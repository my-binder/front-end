import { useEffect } from 'react';
import { useAlert } from 'react-styled-alert';
import { useRequest, useStorageToken, useSetUser } from 'hooks';
import { FullUser } from 'types';

export function useAutoLogin(): [boolean] {
  const [loading, sendRequest] = useRequest<FullUser>();
  const { getToken, removeToken } = useStorageToken();
  const setUser = useSetUser();
  const popup = useAlert();
  
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    };

    sendRequest(
      'get',
      '/sign-in-from-token',
      {},
      (res) => setUser({ ...res.data, token }),
      (err) => {
        console.log(err);
        popup('Automatic login failed.');
        removeToken();
      },
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  }, []);

  return [loading];
}