import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Drawer, Grid, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { useState } from "react";


const drawerWidth = 300;


export const NavBar = () => {




    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        < >

            <AppBar
                component="nav"
                position="fixed"
                className="appbar"
            >
                <Toolbar className="tollbar">
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                        className="menuOutlined"
                        sx={{ display: { sm: "none" } }}
                    >
                        <MenuOutlined />
                    </IconButton>
                    <Grid
                        container
                        justifyContent="flex-end"
                        display={{ xs: "none", sm: "flex" }}
                    >
                        <Link
                            display={{ xs: 'none', sm: 'flex' }}
                            mx={2}
                            className="singIn"
                            component={RouterLink}
                            to="/auth/login"
                            color='#1DC5A3'
                            underline="hover"
                        >
                            <Typography fontSize="12px" px="2px">INGRESAR</Typography>
                        </Link>
                        <Link
                            component={RouterLink}
                            color='#1DC5A3'
                            to="/auth/register/0"
                            mx={2}
                            display={{ xs: 'none', sm: 'flex' }}
                            className="singUp"
                            underline="hover"
                        >
                            <Typography fontSize="12px" px="2px">REGISTRAR</Typography>
                        </Link>
                        <Grid
                            mx={2}
                            display={{ xs: 'none', sm: 'flex' }}
                            className="bolivia"
                        >
                            <img src="https://i.imgur.com/3dh694G.png" alt="logo" width={"25px"}
                                height={"25px"} />
                            <Typography fontSize="12px" px="2px">BOLIVIA</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar >
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                >
                    <Grid
                        container
                        direction="column"
                        onClick={handleDrawerToggle}
                        justifyContent="space-around"
                        sx={{
                            textAlign: 'center',
                            backgroundColor: "rgba(0,0,0,0.9)",
                            height: "100%"
                        }}
                    >
                        <Typography variant="h4" sx={{ my: 2 }} color="white">
                            <strong>Profit Cash</strong>
                        </Typography>
                        <Link
                            mx={2}
                            className="singIn"
                            component={RouterLink}
                            to="/auth/login"
                            color='white'
                            underline="hover"
                        >
                            <Typography fontSize="12px" px="2px">INGRESAR</Typography>
                        </Link>
                        <Link
                            component={RouterLink}
                            color='white'
                            to="/auth/register/0"
                            mx={2}
                            className="singUp"
                            underline="hover"
                        >
                            <Typography fontSize="12px" px="2px">REGISTRAR</Typography>
                        </Link>
                    </Grid>
                </Drawer>
            </Box>
        </>

    )
}