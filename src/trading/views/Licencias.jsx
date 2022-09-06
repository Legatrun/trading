import { TradingLayout } from '../layout/TradingLayout'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LicenciaItem } from '../components';

export const Licencias = () => {

    const { licencias } = useSelector(state => state.trading)

    const navigate = useNavigate();

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
                        minHeight="30%"
                        bgcolor="white"
                        borderRadius={2}
                    >
                        <Grid item xs={4}>
                            <Typography fontWeight="bold">Fecha com.</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Valor</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Días trans.</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Total gene.</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Estado</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                licencias.map((licencia, index) => (
                                    <LicenciaItem key={index} {...licencia} />
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
