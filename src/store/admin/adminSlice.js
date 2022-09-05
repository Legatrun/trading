import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        licenciasUser: [],
        retirosUser: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setLicenciasUser: (state, action) => {
            state.licenciasUser = action.payload;
        },
        setRetirosUser: (state, action) => {
            state.retirosUser = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setUsers, setLicenciasUser, setRetirosUser } = adminSlice.actions;