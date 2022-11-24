import { useNavigate } from 'react-router-dom';
import { useSetUser, useStorageToken } from 'hooks';

export function useSignOut() {
  const navigate = useNavigate();
  const { removeToken } = useStorageToken();
  const setUser = useSetUser();

  setUser(null);
  removeToken();
  navigate('/');
}