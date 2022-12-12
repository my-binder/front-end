import { useState, useEffect } from 'react';
import { useRequest } from 'hooks';
import { User, Entry, Page, FullPage } from 'types';

export function useLoadFullPage(userUrl: string, pageUrl: string): [
  fullPage: FullPage,
  error: string,
  loading: boolean,
  load: (onSuccess?: () => void) => void
] {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [page, setPage] = useState<Page>({ id: 0, title: '', urlName: '' });
  const [owner, setOwner] = useState<User>({ email: '', displayName: '', urlName: '' });
  const [error, setError] = useState<string>('');
  const [loading, sendRequest] = useRequest<FullPage>();

  const load = (onSuccess?: () => void) => {
    setError('');
    sendRequest(
      'get',
      `/entries/${userUrl}/${pageUrl}`,
      {},
      (res) => {
        setEntries([...res.data.entries]);
        setPage({
          id: res.data.page.id,
          title: res.data.page.title,
          urlName: res.data.page.urlName
        });
        setOwner({
          email: res.data.owner.email,
          displayName: res.data.owner.displayName,
          urlName: res.data.owner.urlName
        });
        if (onSuccess) onSuccess();
      },
      (err) => setError(err.message)
    );
  };

  useEffect(load, []);

  return [{ owner, page, entries }, error, loading, load];
}
