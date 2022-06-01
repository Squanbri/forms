import { useRoutes } from 'react-router-dom';
import { Container } from '@mui/material';

import { publicRoutes } from './routesConfig';

const Routes = () => {
  const routing = useRoutes(publicRoutes);

  return (
    <main>
      <Container maxWidth='sm'>
        {routing}
      </Container>
    </main>
  );
};

export default Routes;
