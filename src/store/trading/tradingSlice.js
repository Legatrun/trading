import { createSlice } from '@reduxjs/toolkit';


export const tradingSlice = createSlice({
    name: 'trading',
    initialState: {
        email: null,
        date: null,
        licenciasVigentes: 0,
        billeteraPorLicencia: 0,
        billeteraComision: 0,
        retiros: 0,
        retirosArray: [],
        referidos: []
    },
    reducers: {
        setLicenciasVigentes: (state, action) => {
            state.licenciasVigentes = action.payload
        },
        setBilleteraLicencia: (state, action) => {
            state.billeteraPorLicencia = action.payload
        },
        setBilleteraComision: (state, action) => {
            state.billeteraComision = action.payload
        },
        setRetiros: (state, action) => {
            state.retirosArray = action.payload.retirosArray
            state.retiros = action.payload.retiros
        },
        setReferidos: (state, action) => {
            state.referidos = action.payload
        },
        // updateNote: (state, action) => {
        //     state.isSaving = false;
        //     state.notes = state.notes.map(note => {
        //         if (note.id === action.payload.id) {
        //             return action.payload
        //         }
        //         return note
        //     })

        //     state.messageSaved = `${action.payload.title}, actualizada correctamente`

        // },
        clearNotesLogout: (state) => {
            state.email = null,
                state.date = null,
                state.licenciasVigentes = 0,
                state.billeteraPorLicencia = 0,
                state.billeteraComision = 0
        }
    }
});


export const {
    setLicenciasVigentes,
    setBilleteraLicencia,
    setBilleteraComision,
    setRetiros,
    setReferidos,
    clearNotesLogout,
} = tradingSlice.actions;