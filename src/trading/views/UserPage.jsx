import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { CardItem } from '../components';
import { useDispatch, useSelector } from 'react-redux';


export const UserPage = () => {

    const { billetera } = useSelector(state => state.trading)

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
                    <Typography variant="h5" fontWeight="bold" textAlign="center">Activo</Typography>

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
                    <Typography variant="h3" fontWeight="bold" textAlign="center">Billetera:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{billetera}$</Typography>
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
                    <Typography variant="h4" fontWeight="bold" textAlign="center">Rango Actual:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">Sin rango</Typography>

                </Grid>
                <Typography fontSize={{ xs: 30, sm: 45 }} textAlign="center" color="white" fontWeight="bold" >Seleccione su Plan de inversion con 1% de rentabilidad</Typography>
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
