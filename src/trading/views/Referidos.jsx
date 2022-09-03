import { TradingLayout } from '../layout/TradingLayout'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReferidoItem } from '../components/ReferidoItem';

export const Referidos = () => {

    const { referidos } = useSelector(state => state.trading)


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
                        <Typography fontSize={35} fontWeight="bold" textAlign="center">REFERIDOS</Typography>
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
                        <Grid item xs={3}>
                            <Typography fontWeight="bold">Licencia</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography fontWeight="bold">nivel</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                referidos.map(referido => (
                                    <ReferidoItem key={referido.name} {...referido} />
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
