import React, { createContext, useState } from 'react';
import { FullUser } from 'types';

export const UserContext = createContext<{
  user: FullUser | null;
  setUser: React.Dispatch<React.SetStateAction<FullUser | null>>;
}>({ user: null, setUser: () => {} });

export function UserProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = useState<FullUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
