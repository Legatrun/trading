import { Box, Grid, Link, Typography } from "@mui/material"

export const Referidos = () => {
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
                height={{ xs: "85%", sm: 450 }}
            >
                <Grid
                    item
                    sm={6}
                    height={{ xs: "60%", sm: "100%" }}
                    mx={{ xs: 5, sm: 0 }}
                >
                    <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm={5} xs={5} className="cardReferido" m={1}>
                            <Typography
                                p={{ xs: 2, sm: 0 }}
                                fontSize={{ xs: 20, sm: 35 }}
                                sx={{ color: "white" }}
                            >
                                Nivel 1
                                <br />
                                10%
                            </Typography>
                        </Grid>
                        <Grid item sm={5} xs={5} className="cardReferidoPar" m={1}>
                            <Typography
                                p={{ xs: 2, sm: 0 }}
                                fontSize={{ xs: 20, sm: 35 }}
                                sx={{ color: "white" }}
                            >
                                Nivel 2
                                <br />
                                5%
                            </Typography>
                        </Grid>
                        <Grid item sm={5} xs={5} className="cardReferidoPar" m={1}>
                            <Typography
                                p={{ xs: 2, sm: 0 }}
                                fontSize={{ xs: 20, sm: 35 }}
                                sx={{ color: "white" }}
                            >
                                Nivel 3
                                <br />
                                3%
                            </Typography>
                        </Grid>
                        <Grid item sm={5} xs={5} className="cardReferido" m={1}>
                            <Typography
                                p={{ xs: 2, sm: 0 }}
                                fontSize={{ xs: 20, sm: 35 }}
                                sx={{ color: "white" }}
                            >
                                Nivel 4
                                <br />
                                2%
                            </Typography>
                        </Grid>
                        <Grid item sm={5} xs={12} className="cardReferidoPar" m={1}>
                            <Typography
                                p={{ xs: 2, sm: 0 }}
                                fontSize={{ xs: 20, sm: 35 }}
                                sx={{ color: "white" }}
                            >
                                Nivel 5, 6, 7
                                <br />
                                1%
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm={6}
                    px={7}
                >
                    <div className="historiaContent">
                        ///
                        <div className="historia">Extras</div>
                        ///
                    </div>
                    <Typography fontWeight={700} fontSize={{ xs: 30, sm: 56 }} sx={{ color: "#1DC5A3" }} className="titleHistoria">REFERIDOS</Typography>
                    <Typography
                        fontFamily="Raleway"
                        fontWeight={{ xs: 300, sm: 400 }}
                        fontSize={{ xs: 20, sm: 25 }}
                        sx={{ color: "white" }}
                    >
                        Las comisiones por red es hasta 7 niveles
                    </Typography>
                </Grid>

            </Grid>
            <Box
                className="namePageContainer"
                display={{ xs: "none", sm: "block" }}
            >
                <Typography className="namePage">REFERIDOS</Typography>
            </Box>
        </Grid>
    )
}
