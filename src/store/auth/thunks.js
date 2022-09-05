import { FirebaseAuth } from "../../firebase/config"
import { loginWithEmailPassword, logoutFirebase, registeruserWithEmailPassword, sendPasswordResetEmailFirebase, singInWithGoogle } from "../../firebase/providers"
import { anotarmeComoHijoDeMipadre, clearNotesLogout, crearColeccionDePatrocinadorYBilletera, anotarMiInformacion } from "../trading"
import { checkingCredentials, logout, login } from "./"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result = await singInWithGoogle()
        if (!result.ok) return dispatch(logout(result))

        dispatch(login(result))

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName, photoURL }, id) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const { ok, uid, errorMessage } = await registeruserWithEmailPassword({ email, password, displayName, photoURL })


        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, displayName, email, photoURL }))

        dispatch(crearColeccionDePatrocinadorYBilletera(id, uid))
        dispatch(anotarmeComoHijoDeMipadre(id, uid))
        dispatch(anotarMiInformacion(uid, email, password, displayName, photoURL))
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password })


        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, email, photoURL, displayName }))
    }

}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase()
        dispatch(clearNotesLogout())
        dispatch(logout())
    }
}

//reset password
export const sendEmailResetPassword = ({ email }) => {

    return async (dispatch) => {
        const resp = await sendPasswordResetEmailFirebase(email)
    }

}