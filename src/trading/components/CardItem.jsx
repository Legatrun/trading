import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material"
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import React from 'react'
import { CardChild } from "./CardChild";


export const CardItem = ({ value }) => {

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
                    <CardChild handleClose={handleClose} value={value} />
                    <br />
                    <Button variant="contained" onClick={handleClose} sx={{ my: 1 }}>Cerrar</Button>
                </Box>
            </Modal>
        </Grid>
    )
}
