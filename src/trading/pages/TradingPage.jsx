import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { AdminPage, UserPage } from '../views';
import { TradingLayout } from '../layout/TradingLayout';
import { useState } from 'react';
import { CardItem } from '../components';

export const TradingPage = () => {
    const dispatch = useDispatch()
    const { email } = useSelector(state => state.auth)


    return (
        <TradingLayout>

            {
                (email === "albertorrodriguezz19@gmail.com")
                    ? <AdminPage />
                    : <UserPage />
            }

        </TradingLayout>
    )
}
