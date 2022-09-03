import { Button, Grid, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks'
import { sendEmailResetPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const formData = {
  email: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe ser gmail y tener una @.'],
}

export const ForgetPassword = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { formState, email, onInputChange, emailValid, isFormValid } = useForm(formData, formValidations)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return;
    navigate('/')
    dispatch(sendEmailResetPassword({ email }))
    Swal.fire('Revise su correo gmail', "Le enviamos un correo para restablecer su contraseña, puede que el correo este en la seccion spam", 'success')
  }


  return (
    <AuthLayout>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="93vh"
        className='loginPage'
      >
        <form onSubmit={onSubmit}>
          <Grid item xs={12}>
            <div className='ingresarTitlte'>Ingrese su correo gmail</div>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }} className="textField">
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sm={12} m={2}>
            <Button
              type="submit"
              variant='contained'
              fullWidth
            >
              Enviar solicitud para restablecer contraseña
            </Button>
          </Grid>
        </form>
      </Grid>
    </AuthLayout>
  )
}
