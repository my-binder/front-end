import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AlertProvider } from 'react-styled-alert';
import { GlobalStyle } from 'assets/styles';
import { UserProvider } from 'contexts';

export function MainProviders(props: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <BrowserRouter>
          <AlertProvider>
            <UserProvider>
              {props.children}
            </UserProvider>
          </AlertProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}
