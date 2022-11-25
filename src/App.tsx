import { Routes, Route } from 'react-router-dom';
import { useAutoLogin } from 'api';
import {
  Alert,
  CoverSpinner,
  Header,
  MainContainer,
  ProtectedRoutes
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
          <Route path='/view/:username/:pageUrl' element={<></>} />
        </Routes>
        <ProtectedRoutes>
          <Route path='/settings' element={<></>} />
          <Route path='/dashboard' element={<></>} />
          <Route path='/edit/:pageUrl' element={<></>} />
        </ProtectedRoutes>
      </MainContainer>
      <Alert />
    </>
  );
}

export default App
