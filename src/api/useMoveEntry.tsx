import { useEffect, useContext } from 'react';
import { MoveEntryContext } from 'contexts';
import { useRequest, useToken } from 'hooks';
import { UseRequestError } from 'types';

export function useMoveEntry(pageId: number, entryId: number): [
  moving: boolean,
  moveUp: (
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => void,
  moveDown: (
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => void
] {
  const { moving, setMoving } = useContext(MoveEntryContext);
  const [loading, sendRequest] = useRequest();
  const token = useToken();

  useEffect(() => setMoving(loading), [loading]);

  const moveUp = (
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => {
    sendRequest(
      'patch',
      `/entries/move-up/${pageId}/${entryId}`,
      {},
      onSuccess,
      onError,
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  const moveDown = (
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => {
    sendRequest(
      'patch',
      `/entries/move-down/${pageId}/${entryId}`,
      {},
      onSuccess,
      onError,
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [moving, moveUp, moveDown];
}
