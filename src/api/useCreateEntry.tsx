import { useState } from 'react';
import { useRequest, useToken } from 'hooks';

export function useCreateEntry(pageId: number): [
  error: string,
  creating: boolean,
  create: (
    onSuccess: () => void,
  ) => void
] {
  const [error, setError] = useState<string>('');
  const [creating, createRequest] = useRequest();
  const token = useToken();

  const create = (
    onSuccess: () => void
  ) => {
    setError('');
    createRequest(
      'post',
      `/entries/${pageId}`,
      {},
      onSuccess,
      (err) => setError(err.message),
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [error, creating, create];
}
