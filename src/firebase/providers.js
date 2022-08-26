import { createUserWithEmailAndPassword, GoogleAuthProvider, PhoneAuthProvider, RecaptchaVerifier, signInWithEmailAndPassword, signInWithPopup, updatePhoneNumber, updateProfile } from 'firebase/auth'
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

export const registeruserWithEmailPassword = async ({ email, password, displayName, phoneNumber }) => {


    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user;


        // "FirebaseAuth.currentUser" es el actual usuario

        console.log("actual", FirebaseAuth.currentUser)

        await updateProfile(FirebaseAuth.currentUser, { displayName });
        await updateProfile(FirebaseAuth.currentUser, { photoURL: phoneNumber });
        // await updatePhoneNumber(FirebaseAuth.currentUser, { phoneNumber });


        return {
            ok: true,
            uid, photoURL: phoneNumber, email, displayName, phoneNumber
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
        const { uid, photoURL, displayName, phoneNumber } = resp.user;

        console.log(resp.user)

        return {
            ok: true,
            uid, photoURL, displayName, phoneNumber
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