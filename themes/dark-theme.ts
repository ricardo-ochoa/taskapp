import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode:'dark',
    secondary: {
      main:'#19857b'
    },
    error: {
      main:red.A400
   },
  },
  components : {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C24',
        }
      }
    },
    MuiCard: {
      defaultProps: {
      },
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C24',
        }
      }
    },
    MuiAccordion: {
      defaultProps: {
      },
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          backgroundImage: 'none',
          boxShadow: "none"
        }
      }
    },
  }
  });