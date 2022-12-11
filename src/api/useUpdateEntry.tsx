import { useState } from 'react';
import { useRequest, useToken } from 'hooks';
import { Entry } from 'types';

export function useUpdateEntry(pageId: number, entryId: number): [
  error: string,
  submitting: boolean,
  submit: (
    data: Partial<Entry>,
    onSuccess: () => void
  ) => void
] {
  const [error, setError] = useState<string>('');
  const [submitting, submitRequest] = useRequest();
  const token = useToken();

  const submit = (
    data: Partial<Entry>,
    onSuccess: () => void,
  ) => {
    setError('');
    submitRequest(
      'put',
      `/entries/${pageId}/${entryId}`,
      data,
      onSuccess,
      (err) => setError(err.message),
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [error, submitting, submit];
}
