import React, { useEffect } from 'react';
import { useToken } from 'hooks';
import { useSignOut } from 'api';

export function LoginGate(props: { node: React.ReactNode }) {
  const token = useToken();
  const signOut = useSignOut();

  useEffect(() => {
    if (!token) signOut();
  }, []);

  return (
    <>
      {props.node}
    </>
  );
};
