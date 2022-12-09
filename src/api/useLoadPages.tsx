import { useState, useEffect } from 'react';
import { useAlert } from 'react-styled-alert';
import { useRequest, useToken } from 'hooks';
import { Page } from 'types';

export function useLoadPages(): [
  pages: Page[] | 'error',
  loading: boolean,
  load: () => void
 ] {
  const [pages, setPages] = useState<Page[] | 'error'>([]);
  const [loading, loadRequest] = useRequest<Page[]>();
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

  useEffect(load, []);

  return [pages, loading, load];
}
