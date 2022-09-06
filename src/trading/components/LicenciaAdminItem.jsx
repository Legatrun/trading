import { Button, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activarLicenciaAdmin } from '../../store/admin/thunks';

export const LicenciaAdminItem = ({ name = "", value = 0, state = false, id = 0, date = 0, uid = 0 }) => {

    const estado = state ? 'Activo' : 'Inactivo'
    const dispatch = useDispatch()

    const onNavigateBack = () => {
        dispatch(activarLicenciaAdmin(name, value, id, date, uid))
    }

    const mili = (date * 86400000)
    const fecha = new Date((mili + 14400000))
    const [day, month, year] = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()];

    return (
        <Grid
            container
            display="flex"
            flexDirection="row"
            borderBottom="1px solid black"
        >
            <Grid item xs={4} borderRight="1px solid black">
                <Typography fontWeight="bold">{name}</Typography>
            </Grid>
            <Grid item xs={2} borderRight="1px solid black">
                <Typography fontWeight="bold">{value}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold">{estado}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold">{`${day}/${month}/${year}`}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={onNavigateBack}>
                    Activar
                </Button>
            </Grid>
        </Grid>
    )
}
