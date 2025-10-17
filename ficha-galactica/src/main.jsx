import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#865bfcff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={{
        body: {
          backgroundImage: `url('https://images.wallpaperscraft.com/image/single/stars_night_starry_sky_188930_1400x1050.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          color: 'inherit'
        },
        'body::after': {
          content: '""',
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))',
          zIndex: -1,
          pointerEvents: 'none'
        }
      }} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)

