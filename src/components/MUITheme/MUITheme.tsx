import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#489de2',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#ffffff'
    },
    error: {
      main: '#bb0fe6',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#e2e9ee',
      secondary: '#b3b7b9',
      disabled: 'rgba(0, 0, 0, 0.3)'
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            fontFamily: 'Bebas Neue',
            fontSize: '20px',
            height: '36px'
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            fontFamily: 'Bebas Neue',
            fontSize: '20px',
            height: '36px'
          }
        },
        {
          props: { variant: 'text', size: 'medium' },
          style: {
            fontFamily: 'Ubuntu',
            textTransform: 'none'
          }
        },
        {
          props: { variant: 'text', size: 'large' },
          style: {
            fontFamily: 'Ubuntu',
            fontSize: '28px',
            textTransform: 'none'
          }
        }
      ]
    }
  },
  typography: {
    h1: {
      fontFamily: 'Bebas Neue',
      fontSize: '52px',
      fontWeight: 400,
      margin: '32px 0px 16px 0px',
      textAlign: 'center'
    },
    subtitle1: {
      fontFamily: 'Ubuntu',
      fontSize: '28px',
      fontWeight: 400,
      textAlign: 'center'
    },
    body1: {
      fontFamily: 'Ubuntu',
      fontSize: '16px',
      fontWeight: 400,
      textAlign: 'center'
    }
  }
});

export function MUITheme(props: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}
 