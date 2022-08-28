import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/trading/thunks';
import { TradingLayout } from '../layout/TradingLayout';
import { useState } from 'react';
import { CardItem } from '../components';

export const TradingPage = () => {
    const dispatch = useDispatch()
    const { isSaving, active } = useSelector(state => state.trading)

    const onClickNewNote = () => {
        dispatch(startNewNote())
    }

    const [count, setCount] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        setCount(event.target.value);
    };

    return (
        <TradingLayout>

            <Grid
                width="100%"
                height="100%"
                container
                display="flex"
                justifyContent="center"
                className='tradingLayout'
            >
                <Grid
                    container
                    width={{ sm: 1200 }}
                >
                    <Grid
                        item
                        sm={3}
                        height={{ sm: 150 }}
                        position="relative"
                        className="form"
                        color="white"
                        p={1}
                        mx={6}
                        my={3}
                    >
                        <Typography variant="h3" fontWeight="bold" textAlign="center">Estado:</Typography>
                        <Typography>Activo</Typography>

                    </Grid>
                    <Grid
                        item
                        sm={3}
                        height={{ sm: 150 }}
                        position="relative"
                        className="form"
                        color="white"
                        p={1}
                        mx={6}
                        my={3}
                    >
                        <Typography variant="h3" fontWeight="bold" textAlign="center">Billetera:</Typography>
                        <Typography>0$</Typography>
                    </Grid>
                    <Grid
                        item
                        sm={3}
                        height={{ sm: 150 }}
                        position="relative"
                        className="form"
                        color="white"
                        p={1}
                        mx={6}
                        my={3}
                    >
                        <Typography variant="h4" fontWeight="bold" textAlign="center">Rango Actual:</Typography>
                        <Typography>Sin rango</Typography>

                    </Grid>
                    <Typography fontSize={{ xs: 30, sm: 45 }} textAlign="center" color="white" fontWeight="bold" >Seleccione su Plan de inversion con 1% de rentabilidad</Typography>
                    <CardItem value={10} count={count} handleChange={handleChange} />
                    <CardItem value={25} count={count} handleChange={handleChange} />
                    <CardItem value={50} count={count} handleChange={handleChange} />
                    <CardItem value={100} count={count} handleChange={handleChange} />
                    <CardItem value={200} count={count} handleChange={handleChange} />
                    <CardItem value={300} count={count} handleChange={handleChange} />
                    <CardItem value={500} count={count} handleChange={handleChange} />
                    <CardItem value={800} count={count} handleChange={handleChange} />
                    <CardItem value={1000} count={count} handleChange={handleChange} />
                    <CardItem value={2000} count={count} handleChange={handleChange} />
                    <CardItem value={3000} count={count} handleChange={handleChange} />
                    <CardItem value={5000} count={count} handleChange={handleChange} />
                </Grid>
            </Grid>


        </TradingLayout>
    )
}
