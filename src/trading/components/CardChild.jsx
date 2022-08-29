import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material"
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import React from 'react'
import { startNewNote } from '../../store/trading';

export const CardChild = ({ handleClose, value = 0 }) => {

    const dispatch = useDispatch()


    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
        handleClose()
        dispatch(startNewNote(value))
        Swal.fire('Su licencia puede tardar hasta 48hrs. en mostrarse en su panel', "gracias por su inversión", 'success')
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
        handleClose()
        dispatch(startNewNote(value))
        Swal.fire('Su licencia puede tardar hasta 48hrs. en mostrarse en su panel', "gracias por su inversión", 'success')
    };

    const handleOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
        handleClose()
        dispatch(startNewNote(value))
        Swal.fire('Su licencia puede tardar hasta 48hrs. en mostrarse en su panel', "gracias por su inversión", 'success')
    };

    return (
        <>
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

                    <Button fullWidth variant="contained" onClick={handleClose1} sx={{ my: 1 }}>
                        Finalizar compra
                    </Button>
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
                    <Button fullWidth variant="contained" onClick={handleClose2} sx={{ my: 1 }}>
                        Finalizar compra
                    </Button>
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
                    <Button fullWidth variant="contained" onClick={handleClose3} sx={{ my: 1 }}>
                        Finalizar compra
                    </Button>
                </Box>
            </Modal>
        </>
    )
}
