import { useState, useEffect } from 'react';
import { useAlert } from 'react-styled-alert';
import { useRequest, useToken } from 'hooks';
import { Page, UseRequestError } from 'types';

export function usePageService(): {
  pages: Page[] | 'error',
  loading: boolean,
  creating: boolean,
  load: () => void,
  create: (
    title: string,
    urlName: string,
    onSuccess: () => void,
    onError: (err: UseRequestError) => void
  ) => void,
} {
  const [pages, setPages] = useState<Page[] | 'error'>([]);
  const [loading, loadRequest] = useRequest<Page[]>();
  const [creating, createRequest] = useRequest();
  const popup = useAlert();
  const token = useToken();

  const load = () => {
    loadRequest(
      'get',
      '/pages',
      {},
      (res) => setPages(res.data),
      (err) => {
        popup(err.message);
        setPages('error');
      },
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

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

  useEffect(load, []);

  return { loading, creating, pages, load, create };
}
