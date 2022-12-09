import { useRequest, useToken } from 'hooks';
import { UseRequestError } from 'types';

export function useErasePage(pageId: number): [
  erasing: boolean,
  erase: (
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => void
] {
  const [erasing, eraseRequest] = useRequest();
  const token = useToken();

  const erase = (
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => {
    eraseRequest(
      'delete',
      `/pages/${pageId}`,
      {},
      onSuccess,
      onError,
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [erasing, erase];
}
