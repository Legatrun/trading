import { Box, Button, Grid, IconButton, InputLabel, Link, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { CardItem } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Telegram, WhatsApp } from '@mui/icons-material';
import { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import React from 'react'
import { useForm } from '../../hooks';
import { retirarDinero } from '../../store/trading';
import { Link as RouterLink } from "react-router-dom";

const formData = {
    cuenta: '',
    valor: ''
}

const formValidations = {
    cuenta: [(value) => value.length >= 1, 'La cuenta es obligatorio.'],
    valor: [(value) => value.length > 1, 'El monto es obligatorio.'],
}

export const UserPage = () => {
    const dispatch = useDispatch()

    const { licenciasVigentes, billeteraPorLicencia, billeteraComision, retiros } = useSelector(state => state.trading)
    const { uid } = useSelector(state => state.auth)

    const billeteraTotal = billeteraPorLicencia + billeteraComision - retiros
    const state = (billeteraTotal > 0) ? 'Activo' : 'Inactivo'

    const {
        cuenta, valor, onInputChange,
        isFormValid, cuentaValid, valorValid, onResetForm
    } = useForm(formData, formValidations)

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setFormSubmitted(true)
        if (!isFormValid) return;
        setOpen(false);
        if (billeteraTotal < valor) {
            Swal.fire('No puede retirar un monto mayor al de su billetera', "debe comprar licencias", 'error')
            return
        }
        dispatch(retirarDinero(cuenta, valor))
        Swal.fire('Su retiro puede tardar hasta 48hrs. en mostrarse en su cuenta', "gracias por su inversión", 'success')
        onResetForm()
    };



    return (
        <Grid
            width="100%"
            height="100%"
            container
            display="flex"
            justifyContent="center"
            className='tradingLayout'
        >
            <Grid
                container
                width={{ sm: 1200 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h3" fontWeight="bold" textAlign="center">Estado:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{state}</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h4" fontWeight="bold" textAlign="center">Licencias Vigentes:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{licenciasVigentes}</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h5" fontWeight="bold" textAlign="center">Billetera Por Comisiones:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{billeteraComision}$</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h5" fontWeight="bold" textAlign="center">Billetera por licencias:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{billeteraPorLicencia}$</Typography>
                </Grid>
                <Grid
                    item
                    sm={3}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h4" fontWeight="bold" textAlign="center">Billetera Total:</Typography>
                    <Typography variant="h5" fontWeight="bold" textAlign="center">{billeteraTotal}</Typography>
                </Grid>
                <Grid
                    item
                    sm={12}
                    height={{ sm: 150 }}
                    position="relative"
                    className="cardState"
                    color="white"
                    p={1}
                    mx={{ xs: 0, sm: 6 }}
                    my={3}
                >
                    <Typography variant="h4" fontWeight="bold" textAlign="center">Link Referido:</Typography>
                    <Typography sx={{ fontSize: { xs: 10, sm: 30 } }} fontWeight="bold" textAlign="center">profitcash.shop/auth/register/{uid}</Typography>
                </Grid>
                <Grid
                    display="flex"
                    flexDirection="column"
                    className='botonesContacto'
                >
                    <Grid item bgcolor="#0dc043">
                        <IconButton
                            sx={{ color: "white" }}
                            href="https://api.whatsapp.com/send?phone=76188189"
                            target="_blank"
                        >
                            <WhatsApp />
                        </IconButton>
                    </Grid>
                    <Grid item bgcolor="#27a2e1">
                        <IconButton
                            sx={{ color: "white" }}
                            href="https://t.me/cash_prof"
                            target="_blank"
                        >
                            <Telegram />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item sm={4} >
                    <Button variant="contained" onClick={handleOpen}>Retirar Dinero</Button>
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ width: 400 }} className="boxModal" pt={2} px={4} pb={3}>
                        <form className='animate__animated animate__fadeIn animate__faster'>
                            <Grid item xs={12}>
                                <div className='ingresarTitlte'>Retirar</div>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }} className="textField">
                                <TextField
                                    label="Cuenta"
                                    type="text"
                                    placeholder='anote con cuidado su cuenta'
                                    fullWidth
                                    name="cuenta"
                                    value={cuenta}
                                    onChange={onInputChange}
                                    error={!!cuentaValid && formSubmitted}
                                    helperText={cuentaValid}
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 2 }} className="textField">
                                <TextField
                                    label="Cantidad"
                                    type="number"
                                    placeholder='Cantidad a retirar'
                                    fullWidth
                                    name="valor"
                                    value={valor}
                                    onChange={onInputChange}
                                    error={!!valorValid && formSubmitted}
                                    helperText={valorValid}
                                />
                            </Grid>
                        </form>
                        <Button variant="contained" onClick={handleClose} sx={{ my: 1 }}>
                            Enviar Solicitud
                        </Button>
                    </Box>
                </Modal>
                <Grid item sm={4}>
                    <Button variant="contained">
                        <Link
                            display={{ xs: 'none', sm: 'flex' }}
                            mx={2}
                            component={RouterLink}
                            to="/retiros"
                            color='black'
                            underline="hover"
                        >
                            <Typography fontSize="15px" px="2px">Ver retiros</Typography>
                        </Link>
                    </Button>
                </Grid>
                <Grid item sm={4}>
                    <Button variant="contained">
                        <Link
                            display={{ xs: 'none', sm: 'flex' }}
                            mx={2}
                            component={RouterLink}
                            to="/referidos"
                            color='black'
                            underline="hover"
                        >
                            <Typography fontSize="15px" px="2px">Ver referidos</Typography>
                        </Link>
                    </Button>
                </Grid>
                <Typography fontSize={{ xs: 30, sm: 45 }} textAlign="center" color="white" fontWeight="bold" >Seleccíone su plan de inversíon con 1,5% diario de lunes a lunes, 150 dias habiles</Typography>
                <CardItem value={10} />
                <CardItem value={25} />
                <CardItem value={50} />
                <CardItem value={100} />
                <CardItem value={200} />
                <CardItem value={300} />
                <CardItem value={500} />
                <CardItem value={800} />
                <CardItem value={1000} />
                <CardItem value={2000} />
                <CardItem value={3000} />
                <CardItem value={5000} />
            </Grid>
        </Grid>
    )
}
