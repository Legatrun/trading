import { Box, Grid, Link, Typography } from "@mui/material"

export const Empezar = () => {
    return (
        <Grid
            container
            className="referidos"
            alignItems="center"
            height="100%"
            justifyContent="center"
        >
            <Grid
                item
                xs={12}
                sm={9}
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                className="referidos"
                height={{ xs: "90%", sm: 450 }}
            >
                <Grid container display="flex" justifyContent="center" alignItems="center">
                    <Grid
                        item
                        sm={12}
                    >
                        <Typography fontWeight={700} fontSize={{ xs: 30, sm: 56 }} sx={{ color: "#1DC5A3" }}>
                            Como Empezar
                        </Typography>
                    </Grid>
                    <Grid
                        height={{ xs: 100, sm: 108 }}
                        item
                        sm={3}
                        xs={8}
                        m={{ xs: 1, sm: 6 }}
                        className="crearCard containerBlurEmpezar"
                    >
                        Crear una cuenta
                    </Grid>
                    <Grid item
                        height={{ xs: 100, sm: 108 }}
                        sm={3}
                        xs={8}
                        m={{ xs: 1, sm: 6 }}
                        className="empezarCard containerBlurEmpezar"
                    >
                        Comprar una licencia
                    </Grid>
                    <Grid
                        item
                        sm={3}
                        xs={8}
                        height={{ xs: 100, sm: 108 }}
                        m={{ xs: 1, sm: 6 }}
                        className="invitarCard containerBlurEmpezar"
                    >
                        Invitar más Gente
                    </Grid>
                    <Grid
                        item
                        height={{ xs: 100, sm: 108 }}
                        sm={3}
                        xs={8}
                        m={{ xs: 1, sm: 6 }}
                        className="empezarCard containerBlurEmpezar"
                    >
                        Obten tu Comisión
                    </Grid>
                </Grid>

            </Grid>
            <Box
                className="namePageContainer"
                display={{ xs: "none", sm: "block" }}
            >
                <Typography className="namePage">EMPEZAR</Typography>
            </Box>
        </Grid >
    )
}
