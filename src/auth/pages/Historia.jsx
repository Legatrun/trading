import { Box, Grid, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";

export const Historia = () => {
    return (
        <Grid
            container
            className="empezar"
            alignItems="center"
            justifyContent="center"
            height="100%"
        >
            <Grid
                item
                sm={9}
                xs={12}
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                className="historia"
                height={{ xs: "85%", sm: 450 }}
            >
                <Grid
                    item
                    sm={6}
                    xs={12}
                    mx={5}
                    maxHeight={{ xs: 175, sm: "100%" }}
                >
                    <Box
                        className="imageBitcoin containerBlur"
                        borderRadius="30px"
                        height={{ xs: 175, sm: "100%" }}
                    >
                    </Box>
                </Grid>
                <Grid
                    item
                    sm={6}
                    xs={12}
                    px={{ xs: 5 }}
                >
                    <div className="historiaContent">
                        ///
                        <div className="historia">Historia</div>
                        ///
                    </div>
                    <Typography
                        fontWeight={700}
                        fontSize={{ xs: 30, sm: 56 }}
                        sx={{ color: "#1DC5A3" }}
                    >
                        QUIENES SOMOS
                    </Typography>
                    <Typography
                        fontFamily="Raleway"
                        fontWeight={{ xs: 300, sm: 400 }}
                        fontSize={{ xs: 18, sm: 25 }}
                        sx={{ color: "white" }}
                    >
                        Somos una <span>empesa</span>, que <span>innovamos</span>
                        <br />
                        a través de diferentes <span>instrumentos financieros</span>
                        <br />
                        que te brindan la <span>oportunidad</span> de hacer <span>crecer tu capital</span> y <span>generar ingresos</span> de forma pasiva.
                        <br />
                        Además contamos con un atractivo <span>plan de referidos</span>.
                    </Typography>
                </Grid>
            </Grid>
            <Box
                className="namePageContainer"
                display={{ xs: "none", sm: "block" }}
            >
                <Typography className="namePage">HISTORIA</Typography>
            </Box>
        </Grid>
    )
}
