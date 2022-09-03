import { Grid, Typography } from '@mui/material'

export const ReferidoItem = ({ name = "", licencia = 0, nivel = 0 }) => {

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
            <Grid item xs={3} borderRight="1px solid black">
                <Typography fontSize={{ xs: 10, sm: 15 }} fontWeight="bold">{licencia}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography fontWeight="bold">{nivel}</Typography>
            </Grid>
        </Grid>
    )
}
