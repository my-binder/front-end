import { useState, useEffect } from 'react';
import { useRequest, useToken } from 'hooks';
import { Page } from 'types';

export function useLoadPages(): [
  pages: Page[],
  error: string,
  loading: boolean,
  load: () => void
 ] {
   const [pages, setPages] = useState<Page[]>([]);
   const [error, setError] = useState<string>('');
  const [loading, loadRequest] = useRequest<Page[]>();
  const token = useToken();

  const load = () => {
    loadRequest(
      'get',
      '/pages',
      {},
      (res) => setPages(res.data),
      (err) => setError(err.message),
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    );
  };

  useEffect(load, []);

  return [pages, error, loading, load];
}
