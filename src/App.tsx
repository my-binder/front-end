import { Routes, Route } from 'react-router-dom';
import { useAutoLogin } from 'api';
import {
  Alert,
  CoverSpinner,
  Header,
  LoginGate,
  MainContainer,
} from 'components';
import {
  Landing
} from 'pages';

function App() {
  const [loading] = useAutoLogin();
  if (loading) return <CoverSpinner />;

  return (
    <>
      <Header />
      <MainContainer>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<></>} />
          <Route path='/sign-in' element={<></>} />
          <Route path='/view/:username/:pageUrl' element={<Landing />} />
          <Route path='/settings' element={<LoginGate node={<></>} />} />
          <Route path='/dashboard' element={<LoginGate node={<></>} />} />
          <Route path='/edit/:pageUrl' element={<LoginGate node={<></>} />} />
        </Routes>
      </MainContainer>
      <Alert />
    </>
  );
}

export default App
