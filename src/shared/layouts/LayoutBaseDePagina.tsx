import { Menu, MenuOpen } from '@mui/icons-material';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';

import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  titulo: string;
  barraDeFerramentas?: ReactNode;
  children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  titulo,
  barraDeFerramentas,
  children,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen, isDrawerOpen } = useDrawerContext();

  return (
    <Box display="flex" flexDirection="column" height="100%" gap={1}>
      <Box
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        padding={1}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            {isDrawerOpen ? <MenuOpen /> : <Menu />}
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
