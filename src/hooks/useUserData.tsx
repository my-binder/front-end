import { useContext } from 'react';
import { UserContext } from 'contexts';
import { User } from 'types';

export function useUserData() {
  const { user } = useContext(UserContext);
  return {
    email: user ? user.email : '',
    displayName: user ? user.displayName : '',
    urlName: user ? user.urlName : '',
  } as User;
}
