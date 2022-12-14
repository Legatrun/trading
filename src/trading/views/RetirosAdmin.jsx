import { useNavigate, useParams } from 'react-router-dom';
import { TradingLayout } from '../layout/TradingLayout'

import { Button, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { cargarRetirosAdmin } from '../../store/admin/thunks';
import { useEffect } from 'react';
import { RetiroAdminItem } from '../components';

export const RetirosAdmin = () => {

    const { uid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { retirosUser } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(cargarRetirosAdmin(uid))
    }, [])

    const onNavigateBack = () => {
        navigate(-1);
    };

    return (
        <TradingLayout>
            <Grid
                width="100%"
                height="94%"
                container
                display="flex"
                justifyContent="center"
                className='tradingLayout'
            >
                <Grid
                    container
                    width={{ sm: 1200 }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography fontSize={35} fontWeight="bold" textAlign="center">Retiros</Typography>
                    </Grid>
                    <Grid
                        container
                        minHeight="30%"
                        bgcolor="white"
                        borderRadius={2}
                    >
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Valor</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography fontWeight="bold">Cuenta</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Estado</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                retirosUser.map(retiro => (
                                    <RetiroAdminItem key={retiro.id} {...retiro} uid={uid} />
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={onNavigateBack}>
                            Atr??s
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </TradingLayout>
    )
}
