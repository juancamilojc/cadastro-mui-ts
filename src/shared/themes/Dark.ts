import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main:orange[500],
            dark: orange[700],
            light: orange[300],
            contrastText: '#FFFFFF',
        },
        secondary: {
            main:blue[500],
            dark: blue[700],
            light: blue[300],
            contrastText: '#FCFCFC',
        },
        background: {
            default: '#141414',
            paper: '#171717',
        }
    }
});