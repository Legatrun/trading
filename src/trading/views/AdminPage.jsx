import React, { useEffect, useMemo } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { cargarUsuarios } from '../../store/admin/thunks';
import { UserItem } from '../components/UserItem';

export const AdminPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cargarUsuarios())
    }, [])

    const { users } = useSelector(state => state.admin)

    return (
        <>
            <Grid
                width="100%"
                height="94%"
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
                    <Typography fontSize={35} fontWeight="bold" textAlign="center">Admin</Typography>
                    <Grid
                        container
                        height="30%"
                        bgcolor="white"
                        borderRadius={2}
                    >
                        <Grid item xs={2} >
                            <Typography fontWeight="bold">Nombre</Typography>
                        </Grid>
                        <Grid item xs={3} >
                            <Typography fontWeight="bold">Email</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography fontWeight="bold">Num</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontWeight="bold">Contraseña</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                users.map(user => (
                                    <UserItem key={user.id} {...user} />
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
