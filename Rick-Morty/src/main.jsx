import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // azul claro para contraste
    },
    secondary: {
      main: "#f48fb1", // rosa para acentos
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },

  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
