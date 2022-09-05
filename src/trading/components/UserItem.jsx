import { Button, Grid, Link, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";

export const UserItem = ({ displayName, email, id, numero, password }) => {

    return (
        <Grid
            container
            display="flex"
            flexDirection="row"
            borderBottom="1px solid black"
        >
            <Grid item xs={2} borderRight="1px solid black">
                <Typography fontWeight="bold">{displayName}</Typography>
            </Grid>
            <Grid item xs={3} borderRight="1px solid black">
                <Typography fontWeight="bold">{email}</Typography>
            </Grid>
            <Grid item xs={1} borderRight="1px solid black">
                <Typography fontWeight="bold">{numero}</Typography>
            </Grid>
            <Grid item xs={2} borderRight="1px solid black">
                <Typography fontWeight="bold">{password}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained">
                    <Link
                        display={{ xs: 'none', sm: 'flex' }}
                        mx={2}
                        component={RouterLink}
                        to={`/retirosAdmin/${id}`}
                        color='black'
                        underline="hover"
                    >
                        <Typography fontSize="15px" px="2px">Ver retiros</Typography>
                    </Link>
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained">
                    <Link
                        display={{ xs: 'none', sm: 'flex' }}
                        mx={2}
                        component={RouterLink}
                        to={`/licenciasAdmin/${id}`}
                        color='black'
                        underline="hover"
                    >
                        <Typography fontSize="15px" px="2px">Ver Licencias</Typography>
                    </Link>
                </Button>
            </Grid>
        </Grid>
    )
}
