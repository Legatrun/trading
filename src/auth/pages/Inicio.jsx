import { Box, Grid, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";

export const Inicio = () => {
    return (
        <Grid
            container
            spacing={0}
            sx={{ minHeight: '100vh' }}
            className="empezar"
        >
            <Grid
                item
                sm={6}
                className="inicio"
            >
                <Grid
                    container
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    className="inicioContainer"
                >
                    <div className="profitCash">Profit Cash</div>
                    <div className="invierteConNosotros">Invierte con nosotros</div>
                    <Grid
                        display="flex"
                        my={3}
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
                            to="/auth/register"
                            mx={2}
                            display={{ xs: 'none', sm: 'flex' }}
                            className="singUp"
                            underline="hover">
                            <Typography fontSize="12px" px="2px">REGISTRAR</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                sm={6}
                className="logo"
            >
            </Grid>
            <Box
                className="namePageContainer"
            >
                <Typography className="namePage">HOME</Typography>
            </Box>
        </Grid>
    )
}
