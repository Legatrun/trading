import { Box, Grid, Toolbar, Typography } from '@mui/material';
import { NavBar } from '../components/NavBar';
import { ParticleBackground } from './particleBackground';


export const AuthLayout = ({ children, title = '' }) => {
    return (
        <>
            <Grid
                className='authLayout'
                container
                spacing={0}
                sx={{ minHeight: '100vh' }}
            >
                <NavBar />
                <ParticleBackground />
                <Grid item sm={12}
                >
                    <Box component="main">
                        <Toolbar />
                        {children}
                    </Box>
                </Grid>
            </Grid >
        </>

    )
}
