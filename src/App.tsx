import { BrowserRouter } from 'react-router-dom';

import Header from 'components/Header/Header';
import Routes from 'components/Routes/Routes';
import { useCheckAuth } from 'hooks/checkAuth';

const App = () => {
  useCheckAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
