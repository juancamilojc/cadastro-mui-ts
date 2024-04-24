import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Divider, IconButton, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";


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
    mostrarBotaoSalvarEVoltar = true,
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
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
                    size="small"
                    startIcon={<Save />}
                    onClick={aoClicarEmSalvar}
                >
                    <Typography
                        variant="button"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                    >
                        <span>Salvar</span> 
                    </Typography>
                </LoadingButton>
            )}

            { (mostrarBotaoSalvarEVoltar && !mdDown) && (
                <LoadingButton
                    loading={mostrarBotaoSalvarEVoltarCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    size="small"
                    startIcon={<Save />}
                    onClick={aoClicarEmSalvarEVoltar}
                >
                    <Typography
                        variant="button"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                    >
                        <span>Salvar e Voltar</span>
                    </Typography>
                </LoadingButton>
            )}

            { (mostrarBotaoDeletar && !smDown) && (
                <LoadingButton
                    loading={mostrarBotaoDeletarCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    size="small"
                    startIcon={<Delete />}
                    onClick={aoClicarEmDeletar}
                >
                    <Typography
                        variant="button"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                    >
                        <span>Deletar</span>
                    </Typography>
                </LoadingButton>
            )}

            { smDown && (
                <IconButton onClick={aoClicarEmDeletar} >
                    <Delete />
                </IconButton>
            )}

            { (mostrarBotaoNovo && !smDown ) && (
                <LoadingButton
                    loading={mostrarBotaoNovoCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    size="small"
                    startIcon={<Add />}
                    onClick={aoClicarEmNovo}
                >
                    <Typography
                        variant="button"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                    >
                        <span>{textoBotaoNovo}</span>
                    </Typography>
                </LoadingButton>
            )}

            { smDown && (
                <IconButton onClick={aoClicarEmNovo} >
                    <Add />
                </IconButton>
            )}

            { mostrarBotaoVoltar && 
              (mostrarBotaoSalvar || mostrarBotaoSalvarEVoltar || mostrarBotaoDeletar || mostrarBotaoNovo) &&
              (
                <Divider variant="middle" orientation="vertical" />
            )}
            
            { (mostrarBotaoVoltar && !smDown) && (
                <LoadingButton
                    loading={mostrarBotaoVoltarCarregando}
                    loadingPosition="start"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    size="small"
                    startIcon={<ArrowBack />}
                    onClick={aoClicarEmVoltar}
                >
                    <Typography
                        variant="button"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                    >
                        <span>Voltar</span>
                    </Typography>
                </LoadingButton>
            )}

            { smDown && (
                <IconButton onClick={aoClicarEmVoltar} >
                    <ArrowBack />
                </IconButton>
            )}

        </Box>
    );
}