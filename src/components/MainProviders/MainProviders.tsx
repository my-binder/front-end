import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AlertProvider } from 'react-styled-alert';
import { GlobalStyle, MUITheme } from 'components';
import { UserProvider } from 'contexts';

export function MainProviders(props: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <BrowserRouter>
          <AlertProvider>
            <UserProvider>
              <MUITheme>
                {props.children}
              </MUITheme>
            </UserProvider>
          </AlertProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}
