import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { cargarLicenciasVigentes, cargarComisionesPorHijos } from '../store/trading';


export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {


        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout())

            const { uid, email, displayName, photoURL, phoneNumber } = user
            dispatch(login({ uid, email, displayName, photoURL, phoneNumber }))
            dispatch(cargarLicenciasVigentes())
            dispatch(cargarComisionesPorHijos())
        })
    }, [])

    return status

}
