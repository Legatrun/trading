import { Box, Grid, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { ParticleBackground } from "../layout/particleBackground";

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
                xs={12}
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
                    <Typography
                        fontWeight={700}
                        fontSize={{ xs: 40, sm: 66 }}
                        sx={{ color: "#1DC5A3" }}
                    >
                        Profit Cash
                    </Typography>
                    <Typography
                        fontWeight={400}
                        fontSize={{ xs: "1.5rem", sm: 26 }}
                        sx={{ color: "white" }}
                    >
                        Invierte con nosotros
                    </Typography>
                    <Grid
                        display="flex"
                        my={3}
                    >
                        <Link
                            display={{ sm: 'flex' }}
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
                            display={{ sm: 'flex' }}
                            className="singUp"
                            underline="hover"
                            bgcolor={{ xs: "rgba(45, 62, 80, 0.6)", sm: "rgba(29, 197, 163, 0.1)" }}
                        >
                            <Typography fontSize="12px" px="2px">REGISTRAR</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                sm={6}
                xs={0}
                className="logo"
            >
            </Grid>
            <Box
                className="namePageContainer"
                display={{ xs: "none", sm: "block" }}
            >
                <Typography className="namePage">HOME</Typography>
            </Box>
        </Grid>
    )
}
