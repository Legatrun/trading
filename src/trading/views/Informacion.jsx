import { TradingLayout } from '../layout/TradingLayout'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const Informacion = () => {

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
                    color="white"
                >
                    <Grid item xs={12}>
                        <Typography fontSize={35} fontWeight="bold" textAlign="center">INFORMACIÓN</Typography>
                    </Grid>
                    <Grid
                        container
                        minHeight="30%"
                        borderRadius={2}
                    >
                        <Grid item xs={12}>
                            <Typography fontWeight="bold">
                                Retiro mínimo de 50 USD y solo los sábados
                            </Typography>
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
