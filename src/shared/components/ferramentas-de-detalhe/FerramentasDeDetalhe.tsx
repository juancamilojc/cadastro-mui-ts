import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";


interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEVoltar?: boolean;
    mostrarBotaoDeletar?: boolean;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;

    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEVoltar?: () => void;
    aoClicarEmDeletar?: () => void;
    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = "Novo",
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEVoltar = false,
    mostrarBotaoDeletar = true,
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,

    aoClicarEmSalvar,
    aoClicarEmSalvarEVoltar,
    aoClicarEmDeletar,
    aoClicarEmNovo,
    aoClicarEmVoltar,
}) => {
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
            { mostrarBotaoSalvar && (
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    startIcon={<Save />}
                    onClick={aoClicarEmSalvar}
            >
                Salvar
            </Button>
            )}
            { mostrarBotaoSalvarEVoltar && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<Save />}
                    onClick={aoClicarEmSalvarEVoltar}
            >
                Salvar e Voltar
            </Button>
            )}
            { mostrarBotaoDeletar && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<Delete />}
                    onClick={aoClicarEmDeletar}
            >
                Deletar
            </Button>
            )}
            { mostrarBotaoNovo && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<Add />}
                    onClick={aoClicarEmNovo}
            >
                {textoBotaoNovo}
            </Button>
            )}
            <Divider variant="middle" orientation="vertical" />
            { mostrarBotaoVoltar && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<ArrowBack />}
                    onClick={aoClicarEmVoltar}
            >
                Voltar
            </Button>
            )}
        </Box>
    );
}