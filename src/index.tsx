import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from 'store';

import './assets/css/normalize.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
