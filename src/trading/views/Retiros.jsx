import { TradingLayout } from '../layout/TradingLayout'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RetiroItem } from '../components';

export const Retiros = () => {

    const { retirosArray } = useSelector(state => state.trading)

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
                        <Typography fontSize={35} fontWeight="bold" textAlign="center">RETIROS</Typography>
                    </Grid>
                    <Grid
                        container
                        minHeight="30%"
                        bgcolor="white"
                        borderRadius={2}
                    >
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Cant.</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography fontWeight="bold">Cuenta</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Estado</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                retirosArray.map(retiro => (
                                    <RetiroItem key={retiro.id} {...retiro} />
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
