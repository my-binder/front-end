import { useRequest, useToken } from 'hooks';
import { UseRequestError } from 'types';

export function useCreatePage(): [
  creating: boolean,
  create: (
    title: string,
    urlName: string,
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => void
] {
  const [creating, createRequest] = useRequest();
  const token = useToken();

  const create = (
    title: string,
    urlName: string,
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => {
    createRequest(
      'post',
      '/pages',
      { title, urlName },
      onSuccess,
      onError,
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [creating, create];
}
