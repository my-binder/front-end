import { useContext } from 'react';
import { UserContext } from 'contexts';

export function useToken() {
  const { user } = useContext(UserContext);
  return user ? user.token : '';
}
