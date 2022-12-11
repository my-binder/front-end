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
  Dashboard,
  EditPage,
  Landing,
  Settings,
  SignIn,
  SignUp,
  ViewPage
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
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/view/:userUrl/:pageUrl' element={<ViewPage />} />
          <Route path='/settings' element={<LoginGate node={<Settings />} />} />
          <Route path='/dashboard' element={<LoginGate node={<Dashboard />} />} />
          <Route path='/edit/:pageUrl' element={<LoginGate node={<EditPage />} />} />
        </Routes>
      </MainContainer>
      <Alert />
    </>
  );
}

export default App
