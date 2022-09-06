import { Grid, Typography } from '@mui/material'

export const LicenciaItem = ({ state = false, value = 0, date = 0 }) => {

    const estado = state ? 'activ.' : 'inacti.'
    const mili = (date * 86400000)
    const fecha = new Date((mili + 14400000))
    const [day, month, year] = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()];

    const hoy = Math.floor((new Date().getTime()) / 86400000)
    const diasTranscurridos = hoy - date
    const totalGenerado = (diasTranscurridos > 150) ? 'Venc' : `${value * diasTranscurridos * 0.015}`

    return (
        <Grid
            container
            display="flex"
            flexDirection="row"
            borderBottom="1px solid black"
        >
            <Grid item xs={4}>
                <Typography fontWeight="bold" borderRight="1px solid black">
                    {`${day}/${month}/${year}`}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold" borderRight="1px solid black">{value}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold" borderRight="1px solid black">{diasTranscurridos}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold" borderRight="1px solid black">{totalGenerado}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography fontWeight="bold">{estado}</Typography>
            </Grid>
        </Grid>
    )
}
