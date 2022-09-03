import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar } from '../components';


const drawerWidth = 280;

export const TradingLayout = ({ children }) => {
    return (
        <Box
            sx={{ display: 'flex', minHeight: '100vh' }}
        >

            <NavBar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{ flexGrow: 1 }}
            >
                <Toolbar />

                {children}

            </Box>
        </Box>
    )
}
