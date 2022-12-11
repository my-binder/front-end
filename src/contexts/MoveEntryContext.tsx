import React, { createContext, useState } from 'react';

export const MoveEntryContext = createContext<{
  moving: boolean;
  setMoving: React.Dispatch<React.SetStateAction<boolean>>;
}>({ moving: false, setMoving: () => {} });

export function MoveEntryProvider(props: { children: React.ReactNode }) {
  const [moving, setMoving] = useState<boolean>(false);
  return (
    <MoveEntryContext.Provider value={{ moving, setMoving }}>
      {props.children}
    </MoveEntryContext.Provider>
  );
}
