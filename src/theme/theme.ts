import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      primary?: string;
      secondary?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black - Dentsu style
      dark: '#000000',
      light: '#333333',
    },
    secondary: {
      main: '#FF6B00', // Orange accent - Dentsu inspired
      dark: '#E55A00',
      light: '#FF8533',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      secondary: 'linear-gradient(135deg, #FF6B00 0%, #E55A00 100%)',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#666666',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#333333',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#666666',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 0, // Square corners like Dentsu
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px', // Square buttons
          padding: '16px 32px',
          fontSize: '1rem',
          fontWeight: 500,
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
            transform: 'none',
          },
          transition: 'all 0.2s ease',
        },
        contained: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
          borderWidth: '2px',
          '&:hover': {
            borderColor: '#000000',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0px', // Square cards
          boxShadow: 'none',
          border: 'none',
          backgroundColor: '#FFFFFF',
          '&:hover': {
            boxShadow: 'none',
            transform: 'none',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          backdropFilter: 'none',
          boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
          color: '#000000',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
  },
});
