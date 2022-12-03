import ReactDOM from 'react-dom/client';
import App from './App';
import { MainProviders } from 'components';
import '@fontsource/ubuntu';
import '@fontsource/roboto';
import '@fontsource/bebas-neue';
import '@fontsource/black-han-sans';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MainProviders>
    <App />
  </MainProviders>
);
