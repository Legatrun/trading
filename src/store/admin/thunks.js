import { collection as collectionLite, doc, getDocs, setDoc } from "firebase/firestore/lite"
import { FirebaseApp, FirebaseDB } from "../../firebase/config"
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';


import { setLicenciasUser, setRetirosUser, setUsers } from "./adminSlice"


const db = getFirestore(FirebaseApp)

export const cargarUsuarios = () => {


    return async (dispatch, getState) => {
        const usuariosRef = collection(db, 'contacts')
        let usuarios = [];
        onSnapshot(usuariosRef, (snapshot) => {
            let users = []
            snapshot.docs.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id });
            });
            dispatch(setUsers(users))
        })
    }
}

export const cargarLicenciasAdmin = (uid) => {
    return async (dispatch, getState) => {
        const collectionRet = collectionLite(FirebaseDB, `contacts/${uid}/licencias`)
        const docs = await getDocs(collectionRet)

        let licencias = []
        docs.forEach(doc => {
            licencias.push({ id: doc.id, ...doc.data() })
        })


        dispatch(setLicenciasUser(licencias))
    }
}


export const cargarRetirosAdmin = (uid) => {
    return async (dispatch, getState) => {

        const collectionRef = collectionLite(FirebaseDB, `contacts/${uid}/retiros`)
        const docs = await getDocs(collectionRef)

        let retiros = []
        docs.forEach(doc => {
            retiros.push({ id: doc.id, ...doc.data() })
        })


        dispatch(setRetirosUser(retiros))
    }
}

export const activarLicenciaAdmin = (name, value, id, date, uid) => {
    return async (dispatch, getState) => {
        const licencia = {
            date,
            name,
            state: true,
            value
        }
        const newState = doc(FirebaseDB, `contacts/${uid}/licencias/${id}`)
        await setDoc(newState, licencia, { merge: true })

    }
}

export const activarRetiroAdmin = (valor, cuenta, id, date, uid) => {
    return async (dispatch, getState) => {

        const retiro = {
            cuenta,
            date,
            state: true,
            valor
        }
        const newState = doc(FirebaseDB, `contacts/${uid}/retiros/${id}`)
        await setDoc(newState, retiro, { merge: true })

    }
}