import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';


const drawerWidth = 280;

export const TradingLayout = ({ children }) => {
    return (
        <Box
            sx={{ display: 'flex', minHeight: '100vh' }}
        >

            <NavBar drawerWidth={drawerWidth} />

            {/* <SideBar drawerWidth={drawerWidth} /> */}

            <Box
                className='animate__animated animate__fadeIn animate__faster'
                component='main'
                sx={{ flexGrow: 1 }}
            >
                <Toolbar />

                {children}

            </Box>
        </Box>
    )
}
