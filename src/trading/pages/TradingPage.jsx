import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { UserPage } from '../views';
import { startNewNote } from '../../store/trading/thunks';
import { TradingLayout } from '../layout/TradingLayout';
import { useState } from 'react';
import { CardItem } from '../components';

export const TradingPage = () => {
    const dispatch = useDispatch()
    const { isSaving, active } = useSelector(state => state.trading)
    const { email } = useSelector(state => state.auth)

    const onClickNewNote = () => {
        dispatch(startNewNote())
    }

    return (
        <TradingLayout>


            <UserPage />

        </TradingLayout>
    )
}
