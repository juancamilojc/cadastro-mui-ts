import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Divider, Paper, useTheme } from "@mui/material";


interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEVoltar?: boolean;
    mostrarBotaoDeletar?: boolean;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;

    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEVoltarCarregando?: boolean;
    mostrarBotaoDeletarCarregando?: boolean;
    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;

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

    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEVoltarCarregando = false,
    mostrarBotaoDeletarCarregando = false,
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,

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
            gap={1.5}
        >
            { mostrarBotaoSalvar && (
                <LoadingButton
                    loading={mostrarBotaoSalvarCarregando}
                    loadingPosition="start"
                    variant="contained"
                    color="primary"
                    disableElevation
                    startIcon={<Save />}
                    onClick={aoClicarEmSalvar}
                >
                    <span>Salvar</span> 
                </LoadingButton>
            )}

            { mostrarBotaoSalvarEVoltar && (
                <LoadingButton
                    loading={mostrarBotaoSalvarEVoltarCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<Save />}
                    onClick={aoClicarEmSalvarEVoltar}
                >
                    <span>Salvar e Voltar</span>
                </LoadingButton>
            )}

            { mostrarBotaoDeletar && (
                <LoadingButton
                    loading={mostrarBotaoDeletarCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<Delete />}
                    onClick={aoClicarEmDeletar}
                >
                    <span>Deletar</span>
                </LoadingButton>
            )}

            { mostrarBotaoNovo && (
                <LoadingButton
                    loading={mostrarBotaoNovoCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<Add />}
                    onClick={aoClicarEmNovo}
                >
                    <span>{textoBotaoNovo}</span>
                </LoadingButton>
            )}

            <Divider variant="middle" orientation="vertical" />
            
            { mostrarBotaoVoltar && (
                <LoadingButton
                    loading={mostrarBotaoVoltarCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    startIcon={<ArrowBack />}
                    onClick={aoClicarEmVoltar}
                >
                    <span>Voltar</span>
                </LoadingButton>
            )}

        </Box>
    );
}