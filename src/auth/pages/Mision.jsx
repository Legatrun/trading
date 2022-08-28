import { Box, Grid, Link, Typography } from "@mui/material"

export const Mision = () => {
    return (
        <Grid
            container
            className="mision"
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
                className="mision"
                height={{ xs: "80%", sm: 450 }}
            >
                <Grid
                    item
                    sm={6}
                    xs={12}
                    mx={5}
                    maxHeight={{ xs: 250, sm: "100%" }}
                >
                    <Box
                        className="imageMision containerBlur"
                        height={{ xs: 175, sm: "100%" }}
                        borderRadius="30px"
                    >
                    </Box>
                </Grid>
                <Grid
                    item
                    sm={6}
                    xs={12}
                    px={{ xs: 6 }}
                >
                    <div className="historiaContent">
                        ///
                        <div className="historia">Misión</div>
                        ///
                    </div>
                    <Typography
                        fontWeight={700}
                        fontSize={{ xs: 30, sm: 56 }}
                        sx={{ color: "#1DC5A3" }}
                    >
                        MISIÓN
                    </Typography>
                    <Typography
                        fontFamily="Raleway"
                        fontWeight={{ xs: 300, sm: 400 }}
                        fontSize={{ xs: 18, sm: 25 }}
                        sx={{ color: "white" }}
                    >
                        <strong>Ayudar</strong> al mayor número de personas
                        <br />
                        <strong>e</strong>n su crecimiento tanto <strong>financiero</strong>
                        <br />
                        <strong>c</strong>omo en lo <strong>personal</strong>
                    </Typography>
                </Grid>
            </Grid>
            <Box
                className="namePageContainer"
                display={{ xs: "none", sm: "block" }}
            >
                <Typography className="namePage">MISIÓN</Typography>
            </Box>
        </Grid>
    )
}
