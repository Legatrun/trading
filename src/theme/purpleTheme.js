import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat'
        ]
    },
    palette: {
        primary: {
            main: '#1DC5A3'
        },
        secondary: {
            main: '#2d3e50'
        },
        error: {
            main: red.A400
        }
    }
})





