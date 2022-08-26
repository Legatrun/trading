import { Box, Grid, Link, Typography } from "@mui/material"

export const Vision = () => {
    return (
        <Grid
            container
            className="vision"
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
                className="vision"
                height={{ xs: "80%", sm: 450 }}
            >
                <Grid
                    item
                    sm={6}
                    xs={12}
                    px={{ xs: 5 }}
                    maxHeight={{ xs: 300, sm: "100%" }}
                >
                    <div className="historiaContent">
                        ///
                        <div className="historia">Historia</div>
                        ///
                    </div>
                    <Typography fontWeight={700} fontSize={{ xs: 30, sm: 56 }} sx={{ color: "#1DC5A3" }} className="titleHistoria">VISIÓN</Typography>
                    <p className="historiaParrafo" >
                        <strong>O</strong>frecer al <strong>mundo</strong>
                        <br />
                        la mejor experiencia digital,
                        <br />
                        ser el proyecto mas <strong>longevo</strong> y
                        <br />
                        <strong>responsable</strong>
                        <br />
                        <strong>C</strong>ontar con la mayor comunidad de
                        <br />
                        <strong>inversores prosperos</strong>.
                    </p>
                </Grid>
                <Grid
                    item
                    sm={6}
                    xs={12}
                    mx={6}
                    maxHeight={{ xs: 175, sm: "100%" }}
                >
                    <Box
                        className="imageVision containerBlur"
                        borderRadius="30px"
                        height={{ xs: 175, sm: "100%" }}
                    >
                    </Box>
                </Grid>
            </Grid>
            <Box
                className="namePageContainer"
                display={{ xs: "none", sm: "block" }}
            >
                <Typography className="namePage">VISIÓN</Typography>
            </Box>
        </Grid>
    )
}
