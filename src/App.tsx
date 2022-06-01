import { BrowserRouter } from 'react-router-dom';

import Header from 'components/Header/Header';
import Routes from 'components/Routes/Routes';

const App = () => {
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
