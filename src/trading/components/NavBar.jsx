import { AppBar, Box, Drawer, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 300;

export const NavBar = () => {

    const { displayName } = useSelector(state => state.auth)
    const { billeteraPorLicencia, billeteraComision, retiros } = useSelector(state => state.trading)

    const billeteraTotal = billeteraPorLicencia + billeteraComision - retiros
    const state = (billeteraTotal > 0) ? 'Activo' : 'Inactivo'

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogout())
    }

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position='fixed'
                sx={{
                    width: { sm: `100%` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar className='tollbar'>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                        className="menuOutlined"
                        sx={{ display: "flex" }}
                    >
                        <MenuOutlined />
                    </IconButton>

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
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        backgroundColor: "rgba(1,1,1,0)",
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                >
                    <Grid
                        container
                        direction="column"
                        onClick={handleDrawerToggle}
                        justifyContent="space-around"
                        alignItems="center"
                        sx={{
                            textAlign: 'center',
                            // backgroundColor: "rgba(0,0,0,1)",
                            height: "100%"
                        }}
                    >
                        <Typography variant='h6' noWrap component='div'> {displayName} </Typography>
                        <Grid
                            height={110}
                            width={110}
                            className="perfil"
                        >
                        </Grid>
                        <Typography variant='h6' noWrap component='div'> {state} </Typography>
                        <Link
                            mx={2}
                            className="singIn"
                            component={RouterLink}
                            to="/retiros"
                            color='black'
                            underline="hover"
                        >
                            <Typography fontSize="12px" px="2px">Retiros</Typography>
                        </Link>
                        <Link
                            component={RouterLink}
                            color='black'
                            to="/referidos"
                            mx={2}
                            className="singUp"
                            underline="hover"
                        >
                            <Typography fontSize="12px" px="2px">Referidos</Typography>
                        </Link>
                        <Link
                            component={RouterLink}
                            color='black'
                            to="/informacion"
                            mx={2}
                            className="singUp"
                            underline="hover"
                        >
                            <Typography fontSize="12px" px="2px">Información</Typography>
                        </Link>
                    </Grid>
                </Drawer>
            </Box>
        </>
    )
}
