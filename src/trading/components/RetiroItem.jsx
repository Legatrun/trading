import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

export const RetiroItem = ({ valor = 0, cuenta = 0, state = false }) => {

    const estado = state ? 'Realiz.' : 'Pend.'

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
            <Grid item xs={8} borderRight="1px solid black">
                <Typography fontSize={{ xs: 10, sm: 15 }} fontWeight="bold">{cuenta}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold">{estado}</Typography>
            </Grid>
        </Grid>
    )
}
