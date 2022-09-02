import { Box, Button, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { CardItem } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Telegram, WhatsApp } from '@mui/icons-material';


export const UserPage = () => {

    const { licenciasVigentes, billeteraPorLicencia, billeteraComision } = useSelector(state => state.trading)
    const { uid } = useSelector(state => state.auth)

    const billeteraTotal = billeteraPorLicencia + billeteraComision
    const state = (billeteraTotal > 0) ? 'Activo' : 'Inactivo'

    return (
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
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h3" fontWeight="bold" textAlign="center">Estado:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{state}</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h4" fontWeight="bold" textAlign="center">Licencias Vigentes:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{licenciasVigentes}</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h5" fontWeight="bold" textAlign="center">Billetera Por Comisiones:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{billeteraComision}$</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h5" fontWeight="bold" textAlign="center">Billetera por licencias:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{billeteraPorLicencia}$</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h4" fontWeight="bold" textAlign="center">Billetera Total:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{billeteraTotal}</Typography>
                </Grid>
                <Grid
                    item
                    sm={12}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h4" fontWeight="bold" textAlign="center">Link Referido:</Typography>
                    <Typography sx={{ fontSize: { xs: 10, sm: 30 } }} fontWeight="bold" textAlign="center">profitcash.shop/auth/register/{uid}</Typography>
                </Grid>
                <Grid
                    display="flex"
                    flexDirection="column"
                    className='botonesContacto'
                >
                    <Grid item bgcolor="#0dc043">
                        <IconButton
                            sx={{ color: "white" }}
                            href="https://api.whatsapp.com/send?phone=76188189"
                            target="_blank"
                        >
                            <WhatsApp />
                        </IconButton>
                    </Grid>
                    <Grid item bgcolor="#27a2e1">
                        <IconButton
                            sx={{ color: "white" }}
                            href="https://t.me/cash_prof"
                            target="_blank"
                        >
                            <Telegram />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography fontSize={{ xs: 30, sm: 45 }} textAlign="center" color="white" fontWeight="bold" >Seleccíone su plan de inversíon con 1,5% diario de lunes a lunes, 150 dias habiles</Typography>
                <CardItem value={10} />
                <CardItem value={25} />
                <CardItem value={50} />
                <CardItem value={100} />
                <CardItem value={200} />
                <CardItem value={300} />
                <CardItem value={500} />
                <CardItem value={800} />
                <CardItem value={1000} />
                <CardItem value={2000} />
                <CardItem value={3000} />
                <CardItem value={5000} />
            </Grid>
        </Grid>
    )
}
