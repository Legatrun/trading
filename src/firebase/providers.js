import { createUserWithEmailAndPassword, GoogleAuthProvider, PhoneAuthProvider, RecaptchaVerifier, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePhoneNumber, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result)

        const { displayName, email, photoURL, uid, phoneNumber } = result.user

        return {
            ok: true,

            displayName, email, photoURL, uid, phoneNumber
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const mail = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error)

        return {
            ok: false,
            errorMessage
        }
    }
}

export const registeruserWithEmailPassword = async ({ email, password, displayName, photoURL }) => {


    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid } = resp.user;


        // "FirebaseAuth.currentUser" es el actual usuario


        await updateProfile(FirebaseAuth.currentUser, { displayName });
        await updateProfile(FirebaseAuth.currentUser, { photoURL });
        // await updatePhoneNumber(FirebaseAuth.currentUser, { phoneNumber });


        return {
            ok: true,
            uid, email
        }

    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const loginWithEmailPassword = async ({ email, password }) => {

    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const logoutFirebase = async () => {
    // "FirebaseAuth.signOut" cierra cualquier sesion de cualquier provider
    return await FirebaseAuth.signOut()
}

export const sendPasswordResetEmailFirebase = async (email) => {
    // "FirebaseAuth.signOut" cierra cualquier sesion de cualquier provider
    try {
        const resp = await sendPasswordResetEmail(FirebaseAuth, email)
        return resp

    } catch (error) {
        return error
    }
}