import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequest, useSetUser, useStorageToken } from 'hooks';
import { FullUser } from 'types';

export function useSignIn(): [
  boolean,
  string,
  (email: string, password: string) => void
] {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const setUser = useSetUser();
  const { setToken } = useStorageToken();
  const [loading, sendRequest] = useRequest<FullUser>();

  const signIn = (email: string, password: string) => {
    setError('');
    sendRequest(
      'post',
      '/sign-in',
      { email, password },
      (res) => {
        setUser(res.data);
        setToken(res.data.token);
        navigate('/dashboard');
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  return [loading, error, signIn];
}
