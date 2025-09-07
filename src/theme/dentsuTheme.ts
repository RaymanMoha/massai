import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    dentsuGradient: {
      primary: string;
      secondary: string;
      accent: string;
    };
    dentsuGlass: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    dentsuGradient?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
    dentsuGlass?: {
      primary?: string;
      secondary?: string;
    };
  }
}

export const dentsuTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Dentsu's black
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#f5f5f5',
      dark: '#e0e0e0',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    dentsuGradient: {
      primary: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      secondary: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
      accent: 'linear-gradient(135deg, #666666 0%, #999999 100%)',
    },
    dentsuGlass: {
      primary: 'rgba(255, 255, 255, 0.1)',
      secondary: 'rgba(0, 0, 0, 0.05)',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Arial',
      'Helvetica',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '4.5rem', // Large hero titles like Dentsu
      fontWeight: 300,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#000000',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: '#000000',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.3,
      color: '#000000',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.3,
      color: '#000000',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#000000',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#000000',
    },
    body1: {
      fontSize: '1.125rem', // 18px like Dentsu
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#666666',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#666666',
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#666666',
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#666666',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#999999',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 0, // Dentsu uses sharp, clean edges
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '16px 32px',
          fontSize: '1rem',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          backgroundColor: '#000000',
          color: '#ffffff',
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
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderWidth: '2px',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1440px',
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '48px',
            paddingRight: '48px',
          },
          '@media (min-width: 1200px)': {
            paddingLeft: '80px',
            paddingRight: '80px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.hero-title': {
            fontSize: '5rem',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            '@media (max-width:900px)': {
              fontSize: '3.5rem',
            },
            '@media (max-width:600px)': {
              fontSize: '2.5rem',
            },
          },
          '&.section-title': {
            fontSize: '3rem',
            fontWeight: 300,
            lineHeight: 1.2,
            marginBottom: '2rem',
            '@media (max-width:600px)': {
              fontSize: '2rem',
            },
          },
          '&.body-large': {
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#666666',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #e0e0e0',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
  },
});

export default dentsuTheme;
