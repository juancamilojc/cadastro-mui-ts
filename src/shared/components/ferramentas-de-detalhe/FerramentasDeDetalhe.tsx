import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";


export const FerramentasDeDetalhe: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component={Paper}
            elevation={0}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            marginX={2}
            padding={1}
            paddingX={2}
            gap={1}
        >
            <Button
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Save />}
                // onClick={}
            >
                Salvar
            </Button>
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Save />}
                // onClick={}
            >
                Salvar e Voltar
            </Button>
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Delete />}
                // onClick={}
            >
                Deletar
            </Button>
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Add />}
                // onClick={}
            >
                Novo
            </Button>
            <Divider variant="middle" orientation="vertical" />
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<ArrowBack />}
                // onClick={}
            >
                Voltar
            </Button>
        </Box>
    );
}