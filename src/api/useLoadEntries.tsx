import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest, useUserData } from 'hooks';
import { Entry, Page, FullPage } from 'types';

export function useLoadEntries(): [
  page: Page,
  entries: Entry[],
  error: string,
  loading: boolean,
  load: () => void
] {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [page, setPage] = useState<Page>({ id: 0, title: '', urlName: '' });
  const [error, setError] = useState<string>('');
  const [loading, sendRequest] = useRequest<FullPage>();
  const { pageUrl } = useParams();
  const user = useUserData();

  const load = () => {
    setError('');
    sendRequest(
      'get',
      `/entries/${user.email}/${pageUrl}`,
      {},
      (res) => {
        setEntries(res.data.entries);
        setPage({
          id: res.data.id,
          title: res.data.title,
          urlName: res.data.urlName
        });
      },
      (err) => setError(err.message)
    );
  };

  useEffect(load, []);

  return [page, entries, error, loading, load];
}
