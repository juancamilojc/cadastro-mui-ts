import { Add, Search } from '@mui/icons-material';
import { Box, Button, InputAdornment, Paper, TextField, useTheme } from '@mui/material';
import React from 'react';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
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
      {mostrarInputBusca && (
        <TextField
          size="small"
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder="Pesquisar..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      )}
      {mostrarBotaoNovo && (
        <Box display="flex" justifyContent="end" flex={1}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            startIcon={<Add />}
            onClick={aoClicarEmNovo}
          >
            {textoBotaoNovo}
          </Button>
        </Box>
      )}
    </Box>
  );
};
