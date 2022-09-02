import { collection, deleteDoc, doc, setDoc, getDocs, updateDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { setLicenciasVigentes, setBilleteraLicencia, setBilleteraComision } from "./"
import { fileUpload, loadNotes } from "../../helpers"

export const comprarNuevaLicencia = (value) => {
    return async (dispatch, getState) => {
        const { uid, photoURL, email } = getState().auth
        const nuevaLicencia = {
            state: true,
            date: Math.floor((new Date().getTime()) / 86400000),
            value: value
        }
        const newLicenceDoc = doc(collection(FirebaseDB, `contacts/${uid}/licencias/`))
        await setDoc(newLicenceDoc, nuevaLicencia)
    }
}

export const crearColeccionDePatrocinadorYBilletera = (id, uid) => {
    return async () => {

        const referido = {
            referidoPadre: id,
            referidoHijo: []
        }
        const referidos = doc(collection(FirebaseDB, `contacts/${uid}/referidos`))
        await setDoc(referidos, referido)

        const billetera = {
            billeteraComision: 0,
            billeteraRenta: 0
        }

        const crearBilletera = doc(collection(FirebaseDB, `contacts/${uid}/billetera`))
        await setDoc(crearBilletera, billetera)
    }
}

// id de mi padre
export const anotarmeComoHijoDeMipadre = (id, uid) => {
    return async (dispatch, getState) => {
        const getReferido = collection(FirebaseDB, `contacts/${id}/referidos`)
        const docs = await getDocs(getReferido)
        let referidosPadrehijo = []
        docs.forEach(doc => {
            referidosPadrehijo = { refid: doc.id, ...doc.data() }
        })
        if (referidosPadrehijo.length != 0) {
            // const { uid } = getState().auth

            const newReferido = {
                referidoPadre: referidosPadrehijo.referidoPadre,
                referidoHijo: [...referidosPadrehijo.referidoHijo, uid]
            }
            const newDoc = doc(FirebaseDB, `contacts/${id}/referidos/${referidosPadrehijo.refid}`)
            await setDoc(newDoc, newReferido, { merge: true })
        }

    }
}

export const cargarBilletera = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth
        if (!uid) throw new Error('El Uid del usuario no existe')

        const notes = await loadNotes(uid)
        let contador = 0

        notes.map(nota => {
            let hoy = new Date().getTime()
            let diferencia = Math.floor((hoy - nota.date) / 86400000)
            let interes = nota.precioDeLaLicencia + (nota.precioDeLaLicencia * diferencia)

            contador = contador + interes
        })

        dispatch(setNotes(contador))
    }
}

export const cargarLicenciasVigentes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        if (!uid) throw new Error('El Uid del usuario no existe')

        const collectionRef = collection(FirebaseDB, `contacts/${uid}/licencias`)
        const docs = await getDocs(collectionRef)

        let licencias = []
        docs.forEach(doc => {
            licencias.push({ ...doc.data() })
        })
        let hoy = Math.floor((new Date().getTime()) / 86400000)
        const licenciasActivas = licencias.filter(licencia => (
            (licencia.state === true) && ((hoy - licencia.date) < 150)
        ))
        let licenciasVigentes = 0
        let billeteraPorLicencia = 0
        licenciasActivas.map(licencia => {
            licenciasVigentes = licenciasVigentes + licencia.value
            billeteraPorLicencia = billeteraPorLicencia + Math.floor((hoy - licencia.date) * 0.015 * licencia.value);
        })

        dispatch(setLicenciasVigentes(licenciasVigentes))
        dispatch(setBilleteraLicencia(billeteraPorLicencia))
    }
}

export const cargarComisionesPorHijos = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        if (!uid) throw new Error('El Uid del usuario no existe')

        const collectionRef = collection(FirebaseDB, `contacts/${uid}/referidos`)
        const docs = await getDocs(collectionRef)

        let hijos = []
        docs.forEach(doc => {
            let hijosReferidos = doc.data()
            hijos = hijosReferidos.referidoHijo
        })

        if (hijos.length == 0) return

        //                                             PRIMER NIVEL

        let billeteraComision = 0
        hijos.map(async hijo => {
            const collectionHijo1 = collection(FirebaseDB, `contacts/${hijo}/licencias`)
            const docs1 = await getDocs(collectionHijo1)
            docs1.forEach(doc => {
                let licenciaHijo = doc.data()
                if (licenciaHijo.state === true) {
                    billeteraComision = billeteraComision + (licenciaHijo.value * 0.1)
                }
            })

            //                              BUSCAR REFERIDOS NIVEL 2
            const collectionRef2 = collection(FirebaseDB, `contacts/${hijo}/referidos`)
            const docs21 = await getDocs(collectionRef2)
            let hijos2 = []
            docs21.forEach(doc => {
                let hijosReferidos = doc.data()
                hijos2 = hijosReferidos.referidoHijo
            })
            if (hijos2.length == 0) {
                dispatch(setBilleteraComision(billeteraComision))
                return
            }
            //                                          SEGUNDO NIVEL
            hijos2.map(async hijo => {
                let collectionHijo2 = collection(FirebaseDB, `contacts/${hijo}/licencias`)
                let docs2 = await getDocs(collectionHijo2)
                docs2.forEach(doc => {
                    let licenciaHijo2 = doc.data()
                    if (licenciaHijo2.state === true) {
                        billeteraComision = billeteraComision + (licenciaHijo2.value * 0.05)
                    }
                })

                //                              BUSCAR REFERIDOS NIVEL 3
                const collectionRef = collection(FirebaseDB, `contacts/${hijo}/referidos`)
                const docs = await getDocs(collectionRef)
                let hijos3 = []
                docs.forEach(doc => {
                    let hijosReferidos = doc.data()
                    hijos3 = hijosReferidos.referidoHijo
                })
                if (hijos3.length == 0) {
                    dispatch(setBilleteraComision(billeteraComision))
                    return
                }
                //                                          TERCER NIVEL

                hijos3.map(async hijo => {
                    let collectionHijo3 = collection(FirebaseDB, `contacts/${hijo}/licencias`)
                    let docs3 = await getDocs(collectionHijo3)
                    docs3.forEach(doc => {
                        let licenciaHijo = doc.data()
                        if (licenciaHijo.state === true) {
                            billeteraComision = billeteraComision + (licenciaHijo.value * 0.03)
                        }
                    })

                    //                              BUSCAR REFERIDOS NIVEL 4
                    const collectionRef = collection(FirebaseDB, `contacts/${hijo}/referidos`)
                    const docs = await getDocs(collectionRef)
                    let hijos4 = []
                    docs.forEach(doc => {
                        let hijosReferidos = doc.data()
                        hijos4 = hijosReferidos.referidoHijo
                    })
                    if (hijos4.length == 0) {
                        dispatch(setBilleteraComision(billeteraComision))
                        return
                    }
                    //                              NIVEL 4 

                    hijos4.map(async hijo => {
                        let collectionHijo4 = collection(FirebaseDB, `contacts/${hijo}/licencias`)
                        let docs4 = await getDocs(collectionHijo4)
                        docs4.forEach(doc => {
                            let licenciaHijo = doc.data()
                            if (licenciaHijo.state === true) {
                                billeteraComision = billeteraComision + (licenciaHijo.value * 0.02)
                            }
                        })

                        //                              BUSCAR REFERIDOS NIVEL 5
                        const collectionRef = collection(FirebaseDB, `contacts/${hijo}/referidos`)
                        const docs = await getDocs(collectionRef)
                        let hijos5 = []
                        docs.forEach(doc => {
                            let hijosReferidos = doc.data()
                            hijos5 = hijosReferidos.referidoHijo
                        })
                        if (hijos5.length == 0) {
                            dispatch(setBilleteraComision(billeteraComision))
                            return
                        }
                        //                              NIVEL 5
                        hijos5.map(async hijo => {
                            let collectionHijo5 = collection(FirebaseDB, `contacts/${hijo}/licencias`)
                            let docs5 = await getDocs(collectionHijo5)
                            docs5.forEach(doc => {
                                let licenciaHijo = doc.data()
                                if (licenciaHijo.state === true) {
                                    billeteraComision = billeteraComision + (licenciaHijo.value * 0.01)
                                }
                            })
                            //                              BUSCAR REFERIDOS NIVEL 6
                            const collectionRef = collection(FirebaseDB, `contacts/${hijo}/referidos`)
                            const docs = await getDocs(collectionRef)
                            let hijos6 = []
                            docs.forEach(doc => {
                                let hijosReferidos = doc.data()
                                hijos6 = hijosReferidos.referidoHijo
                            })
                            if (hijos6.length == 0) {
                                dispatch(setBilleteraComision(billeteraComision))
                                return
                            }
                            //                              NIVEL 6
                            hijos6.map(async hijo => {
                                let collectionHijo6 = collection(FirebaseDB, `contacts/${hijo}/licencias`)
                                let docs6 = await getDocs(collectionHijo6)
                                docs6.forEach(doc => {
                                    let licenciaHijo = doc.data()
                                    if (licenciaHijo.state === true) {
                                        billeteraComision = billeteraComision + (licenciaHijo.value * 0.01)
                                    }
                                })
                                //                              BUSCAR REFERIDOS NIVEL 7
                                const collectionRef = collection(FirebaseDB, `contacts/${hijo}/referidos`)
                                const docs = await getDocs(collectionRef)
                                let hijos7 = []
                                docs.forEach(doc => {
                                    let hijosReferidos = doc.data()
                                    hijos7 = hijosReferidos.referidoHijo
                                })
                                if (hijos7.length == 0) {
                                    dispatch(setBilleteraComision(billeteraComision))
                                    return
                                }
                                //              NIVEL 7
                                hijos7.map(async hijo => {
                                    let collectionHijo7 = collection(FirebaseDB, `contacts/${hijo}/licencias`)
                                    let docs7 = await getDocs(collectionHijo7)
                                    docs7.forEach(doc => {
                                        let licenciaHijo = doc.data()
                                        if (licenciaHijo.state === true) {
                                            billeteraComision = billeteraComision + (licenciaHijo.value * 0.01)
                                        }
                                    })
                                    dispatch(setBilleteraComision(billeteraComision))
                                })
                            })

                        })

                    })

                })


            })

        })
    }
}

// export const startSaveNote = () => {
//     return async (dispatch, getState) => {

//         const { uid } = getState().auth
//         const { active: note } = getState().trading

//         const noteToFireStore = { ...note }
//         delete noteToFireStore.id

//         const docRef = doc(FirebaseDB, `${uid}/trading/notes/${note.id}`);
//         await setDoc(docRef, noteToFireStore, { merge: true })

//         dispatch(updateNote(note))
//     }
// }

// export const startUploadingFiles = (files = []) => {
//     return async (dispatch) => {

//         const fileUploadPromises = []
//         for (const file of files) {
//             fileUploadPromises.push(fileUpload(file))
//         }

//         const photosUrls = await Promise.all(fileUploadPromises)

//         dispatch(setPhotosToActiveNote(photosUrls))
//     }
// }

// export const startDeletingNote = () => {
//     return async (dispatch, getState) => {

//         const { uid } = getState().auth
//         const { active: note } = getState().trading

//         const docRef = doc(FirebaseDB, `${uid}/trading/notes/${note.id}`)
//         await deleteDoc(docRef)

//         dispatch(deleteNoteById(note.id))

//     }
// }