import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import Header from './Components/Header';

const theme = {
  palette: {
    mode: 'dark',
    background: {
      default: '#124975'
    }
  },
}

function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <Box>
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;
