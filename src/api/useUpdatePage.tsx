import { useRequest, useToken } from 'hooks';
import { UpdatePageData, UseRequestError } from 'types';

export function useUpdatePage(pageId: number): [
  updating: boolean,
  update: (
    data: UpdatePageData,
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => void
] {
  const [updating, updateRequest] = useRequest();
  const token = useToken();

  const update = (
    data: UpdatePageData,
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => {
    updateRequest(
      'patch',
      `/pages/${pageId}`,
      data,
      onSuccess,
      onError,
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  return [updating, update];
}
