import { configureStore } from '@reduxjs/toolkit'
import { adminSlice } from './admin/adminSlice'
import { authSlice } from './auth'
import { tradingSlice } from './trading'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        trading: tradingSlice.reducer,
        admin: adminSlice.reducer
    },
})