import { createSlice } from '@reduxjs/toolkit';


export const tradingSlice = createSlice({
    name: 'trading',
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        active: null,
        number: null,
        email: null,
        precioDeLaLicencia: null,
        date: null,
        billetera: null
        // active: {
        //     id: 'ABC123',
        //     title: "",
        //     body: "",
        //     date: 1234567,
        //     imageUrls: [], //https://foto1.jpg
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
            state.messageSaved = ``
        },
        setNotes: (state, action) => {
            state.billetera = action.payload
        },
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ``
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
            })

            state.messageSaved = `${action.payload.title}, actualizada correctamente`

        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = ""
            state.notes = []
            state.active = null
        },
        deleteNoteById: (state, action) => {
            state.active = null
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
    }
});


export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNodeById,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById
} = tradingSlice.actions;