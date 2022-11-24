import { useContext } from 'react';
import { UserContext } from 'contexts';

export function useSetUser() {
  const { setUser } = useContext(UserContext);
  return setUser;
}
