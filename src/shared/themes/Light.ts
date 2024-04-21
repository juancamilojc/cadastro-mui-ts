import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main:orange[500],
            dark: orange[700],
            light: orange[300],
            contrastText: '#FCFCFC',
        },
        secondary: {
            main:blue[500],
            dark: blue[700],
            light: blue[300],
            contrastText: '#FCFCFC',
        },
        background: {
            default: '#F1F1F1',
            paper: '#FFFFFF',
        }
    }
});