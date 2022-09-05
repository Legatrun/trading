import { useNavigate, useParams } from 'react-router-dom';
import { TradingLayout } from '../layout/TradingLayout'

import { Button, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cargarLicenciasAdmin } from '../../store/admin/thunks';
import { useEffect } from 'react';
import { LicenciaAdminItem } from '../components';

export const LicenciasAdmin = () => {

    const { uid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { licenciasUser } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(cargarLicenciasAdmin(uid))
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
                        <Typography fontSize={35} fontWeight="bold" textAlign="center">Licencias</Typography>
                    </Grid>
                    <Grid
                        container
                        height="30%"
                        bgcolor="white"
                        borderRadius={2}
                    >
                        <Grid item xs={3}>
                            <Typography fontWeight="bold">Nom.</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Valor</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Estado</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                licenciasUser.map(licencia => (
                                    <LicenciaAdminItem
                                        key={licencia.id}
                                        uid={uid}
                                        {...licencia}
                                    />
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={onNavigateBack}>
                            Atrás
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </TradingLayout>
    )
}
