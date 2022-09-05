import { Button, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activarLicenciaAdmin } from '../../store/admin/thunks';

export const LicenciaAdminItem = ({ name, value = 0, state, id, date, uid }) => {

    const estado = state ? 'Activo' : 'Pendiente'
    const dispatch = useDispatch()

    const onNavigateBack = () => {
        dispatch(activarLicenciaAdmin(name, value, id, date, uid))
    }

    return (
        <Grid
            container
            display="flex"
            flexDirection="row"
            borderBottom="1px solid black"
        >
            <Grid item xs={3} borderRight="1px solid black">
                <Typography fontWeight="bold">{name}</Typography>
            </Grid>
            <Grid item xs={2} borderRight="1px solid black">
                <Typography fontSize={{ xs: 10, sm: 15 }} fontWeight="bold">{value}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold">{estado}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" onClick={onNavigateBack}>
                    Activar
                </Button>
            </Grid>
        </Grid>
    )
}
