import { useState } from 'react';
import { useRequest, useToken } from 'hooks';

export function useCreatePage(): [
  error: string,
  creating: boolean,
  create: (
    title: string,
    urlName: string,
    onSuccess: () => void
  ) => void
] {
  const [error, setError] = useState<string>('');
  const [creating, createRequest] = useRequest();
  const token = useToken();

  const create = (
    title: string,
    urlName: string,
    onSuccess: () => void,
  ) => {
    setError('');
    createRequest(
      'post',
      '/pages',
      { title, urlName },
      onSuccess,
      (err) => setError(err.message),
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [error, creating, create];
}
