import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard, ListagemDeCidades } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página Inicial',
        path: '/pagina-inicial',
      },
      {
        icon: 'location_city',
        label: 'Cidades',
        path: '/cidades',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/cidades" element={<ListagemDeCidades />} />
      {/* <Route path="/cidades/detalhe/:id" element={<Dashboard />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
