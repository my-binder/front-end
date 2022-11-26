import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-styled-alert';
import { useRequest } from 'hooks';

export function useSignUp(): [
  boolean,
  string,
  (
    email: string,
    urlName: string,
    displayName: string,
    password: string
  ) => void
] {
  const navigate = useNavigate();
  const popup = useAlert();
  const [submitting, sendRequest] = useRequest();
  const [error, setError] = useState<string>('');

  const submit = (
    email: string,
    urlName: string,
    displayName: string,
    password: string
  ) => {
    if (submitting) return;
    setError('');
    sendRequest(
      'post',
      '/sign-up',
      { email, urlName, displayName, password },
      () => {
        popup(
          'Account created successfully.',
          () => navigate('/')
        );
      },
      (err) => setError(err.message)
    );
  };

  return [submitting, error, submit];
}
