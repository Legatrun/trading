import { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: '',
  photoURL: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @.'],
  password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
  photoURL: [(value) => value.length == 8, 'El número debe tener 8 digitos.'],
}

export const RegisterPage = () => {

  const { id } = useParams();


  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const {
    formState, displayName, email, password, photoURL, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, photoURLValid
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState, id))
  }

  return (
    <AuthLayout title="Crear cuenta">

      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="93vh"
        className='loginPage'
      >


        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster form'>
          <h1 className='ingresarTitlte'>Registrar</h1>

          <Grid item xs={12} sx={{ mt: 2 }} className="textField">
            <TextField
              label="Nombre completo"
              type="text"
              placeholder='Nombre completo'
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} className="textField">
            <TextField
              sx={{ color: "white" }}
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

          <Grid item xs={12} sx={{ mt: 2 }} className="textField">
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} className="textField">
            <TextField
              label="Número de celular"
              type="number"
              placeholder="Número de celular"
              fullWidth
              name="photoURL"
              value={photoURL}
              onChange={onInputChange}
              error={!!photoURLValid && formSubmitted}
              helperText={photoURLValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant='contained'
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              ingresar
            </Link>
          </Grid>



        </form>
      </Grid>

    </AuthLayout>
  )
}
