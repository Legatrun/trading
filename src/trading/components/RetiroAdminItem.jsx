import { Button, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activarRetiroAdmin } from '../../store/admin/thunks';

export const RetiroAdminItem = ({ valor, state, cuenta, id, date, uid }) => {

    const estado = state ? 'Realizado' : 'Pendiente'
    const dispatch = useDispatch()

    const onNavigateBack = () => {
        dispatch(activarRetiroAdmin(valor, cuenta, id, date, uid))
    }

    return (
        <Grid
            container
            display="flex"
            flexDirection="row"
            borderBottom="1px solid black"
        >
            <Grid item xs={2} borderRight="1px solid black">
                <Typography fontWeight="bold">{valor}</Typography>
            </Grid>
            <Grid item xs={6} borderRight="1px solid black">
                <Typography fontSize={{ xs: 10, sm: 15 }} fontWeight="bold">{cuenta}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold">{estado}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={onNavigateBack}>
                    Activar
                </Button>
            </Grid>
        </Grid>
    )
}
