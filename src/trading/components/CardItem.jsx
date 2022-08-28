import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material"
import { useState } from "react";

import React from 'react'




function ChildModal() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };

    return (
        <React.Fragment>
            <Button fullWidth variant="contained" onClick={handleOpen1} sx={{ my: 1 }}>BITCOIN</Button>
            <br />
            <Button fullWidth variant="contained" onClick={handleOpen2} sx={{ my: 1 }}>USDT Y TRON</Button>
            <br />
            <Button fullWidth variant="contained" onClick={handleOpen3} sx={{ my: 1 }}>CUENTA DE BANCO</Button>
            <Modal
                hideBackdrop
                open={open1}
                onClose={handleClose1}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className="boxModal" pt={2} px={4} pb={3}>
                    <h2 id="child-modal-title">BITCOIN</h2>
                    <p id="child-modal-description">
                        Realize el deposito en la siguiente cuenta BITCOIN:
                    </p>
                    <p id="child-modal-description">
                        1KQTYDwAnTxKSWaWBDThaYzeZPvCuzR7Tw
                    </p>

                    <Button variant="contained" onClick={handleClose1} sx={{ my: 1 }}>Cerrar</Button>
                </Box>
            </Modal>
            <Modal
                hideBackdrop
                open={open2}
                onClose={handleClose2}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className="boxModal" pt={2} px={4} pb={3}>
                    <h2 id="child-modal-title">USDT Y TRON</h2>
                    <p id="child-modal-description">
                        Realize el deposito en la siguiente cuenta USDT Y TRON:
                    </p>
                    <p id="child-modal-description">
                        TYMAKNNAeEoMA2GiaVEYpZb99oQHAnSK6M
                    </p>
                    <Button variant="contained" onClick={handleClose2} sx={{ my: 1 }}>Cerrar</Button>
                </Box>
            </Modal>
            <Modal
                hideBackdrop
                open={open3}
                onClose={handleClose3}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className="boxModal" pt={2} px={4} pb={3}>
                    <h2 id="child-modal-title">CUENTA DE BANCO</h2>
                    <p id="child-modal-description">
                        Realize el deposito en la siguiente cuenta CUENTA DE BANCO:
                    </p>
                    <p id="child-modal-description">
                        40-0-0654859-1
                    </p>
                    <Button variant="contained" onClick={handleClose3} sx={{ my: 1 }}>Cerrar</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}


export const CardItem = ({ value, count, handleChange }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid
            item
            sm={3}
            xs={12}
            height={{ sm: 150 }}
            position="relative"
            className="containerLicencia"
            color="white"
            p={1}
            mx={6}
            my={3}
        >
            <Typography variant="h3" fontWeight="bold" textAlign="center">{value}$</Typography>
            <Typography>Licencia de {value}$</Typography>
            <Button variant="contained" onClick={handleOpen}>Comprar</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ width: 400 }} className="boxModal" pt={2} px={4} pb={3}>
                    <Typography variant="h4" fontWeight="bold" my={2}>Elige un método de pago</Typography>
                    <ChildModal />
                    <br />
                    <Button variant="contained" onClick={handleClose} sx={{ my: 1 }}>Cerrar</Button>
                </Box>
            </Modal>
        </Grid>
    )
}
