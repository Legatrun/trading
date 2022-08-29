import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';

export const AdminPage = () => {
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

                <Typography fontSize={{ xs: 30, sm: 45 }} textAlign="center" color="white" fontWeight="bold" >Administrador</Typography>
            </Grid>
        </Grid>
    )
}
