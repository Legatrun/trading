import { loginWithEmailPassword, logoutFirebase, registeruserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../trading"
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName, phoneNumber }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await registeruserWithEmailPassword({ email, password, displayName, phoneNumber })

        console.log("create: phoneNumber desde thunks", { phoneNumber })

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, displayName, email, photoURL, phoneNumber }))

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

        const { ok, uid, photoURL, displayName, phoneNumber, errorMessage } = await loginWithEmailPassword({ email, password })

        console.log("login: phoneNumber desde thunks", { phoneNumber, displayName })

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, email, photoURL, displayName, phoneNumber }))

    }

}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase()
        dispatch(clearNotesLogout())
        dispatch(logout())
    }
}