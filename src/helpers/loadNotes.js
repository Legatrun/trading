import { collection, doc, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadNotes = async (email = "") => {
    if (!email) throw new Error('El Uid del usuario no existe')

    const collectionRef = collection(FirebaseDB, `${email}/billetera/licencias`)
    const docs = await getDocs(collectionRef)

    const notes = []

    docs.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() })
    })

    return notes

}