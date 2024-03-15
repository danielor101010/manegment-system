import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242636',
      paper: '#394056',
    },
    primary: {
      main: '#1976d2', 
      light: '#63a4ff',
    },
    secondary: {
      main: '#d949d6',
      light: '#ff7ae5',
      dark: '#750e72',
    },
    text: {
      primary: '#FFFFFF', 
      secondary: '#989797',
      disabled: '#ffffff',
    },
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FFFFFF', 
      paper: '#f0f0f0',
    },
    primary: {
      main: '#1976d2', 
      light: '#63a4ff',
    },
    secondary: {
      main: '#d949d6',
      light: '#ff7ae5',
      dark: '#750e72',
    },
    text: {
      primary: '#000000', 
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
  }
});
