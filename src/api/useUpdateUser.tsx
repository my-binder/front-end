import { useState } from 'react';
import { useAlert } from 'react-styled-alert';
import { useRequest, useSetUser, useToken } from 'hooks';

export function useUpdateUser(): [
  boolean,
  string,
  (
    email: string,
    urlName: string,
    displayName: string,
    newPassword: string,
    oldPassword: string
  ) => void
] {
  const [error, setError] = useState<string>('');
  const [submitting, sendRequest] = useRequest();
  const popup = useAlert();
  const setUser = useSetUser();
  const token = useToken();

  const submit = (
    email: string,
    urlName: string,
    displayName: string,
    newPassword: string,
    oldPassword: string
  ) => {
    if (submitting) return;
    const data = {
      email: email ? email : undefined,
      urlName: urlName ? urlName : undefined,
      displayName: displayName ? displayName : undefined,
      newPassword: newPassword ? newPassword : undefined,
      oldPassword: oldPassword,
    };
    sendRequest(
      'put',
      '/users/update',
      data,
      () => {
        popup('Update successful');
        if (!data.displayName) return;
        setUser((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            displayName: data.displayName as string
          };
        });
      },
      (err) => setError(err.message),
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [submitting, error, submit];
}
