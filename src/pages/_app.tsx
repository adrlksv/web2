import '@/styles/global.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { PaletteColorOptions, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
    return <Provider store={store}><ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider></Provider>
}

const theme = createTheme({});

