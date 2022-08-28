import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';


export const NavBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth)
    // const { notes } = useSelector(state => state.trading)

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogout())
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `100%` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar className='tollbar'>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> {displayName} </Typography>

                    <Grid item display="flex">
                        <IconButton
                            color='error'
                            onClick={onLogout}
                        >
                            <Typography variant='h6' component='div'> Salir </Typography>
                            <LogoutOutlined />
                        </IconButton>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
