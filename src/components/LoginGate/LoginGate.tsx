import { useState, useEffect } from 'react';
import { useToken } from 'hooks';
import { useSignOut } from 'api';

export function LoginGate(props: { node: JSX.Element }) {
  const [ready, setReady] = useState<boolean>(false);
  const token = useToken();
  const signOut = useSignOut();

  useEffect(() => {
    if (!token) signOut();
    else setReady(true);
  }, []);

  return (
    ready ? props.node : <></>
  );
};
