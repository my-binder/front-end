import ReactDOM from 'react-dom/client';
import App from './App';
import { MainProviders } from 'components/MainProviders';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MainProviders>
    <App />
  </MainProviders>
);
