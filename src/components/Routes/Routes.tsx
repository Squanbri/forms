import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { Container } from '@mui/material';

import { publicRoutes, authRoutes, unauthRoutes } from './routesConfig';
import { useAppSelector } from 'hooks/redux';

const Routes: FC = () => {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const allowedRoutes = [...publicRoutes];

  if (isAuth) {
    allowedRoutes.push(...authRoutes);
  } else {
    allowedRoutes.push(...unauthRoutes);
  }
  
  const routing = useRoutes(allowedRoutes);

  return (
    <main>
      <Container maxWidth='sm' style={{ height: '100%' }}>
        {routing}
      </Container>
    </main>
  );
};

export default Routes;
