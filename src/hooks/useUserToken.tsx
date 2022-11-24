import { useContext } from 'react';
import { UserContext } from 'contexts';

export function useUserToken() {
  const { user } = useContext(UserContext);
  return user ? user.token : '';
}
