import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { themeOptions } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
	const theme = createTheme(themeOptions);

	return (
		<EmotionThemeProvider theme={theme}>
			<MuiThemeProvider theme={theme}>
				<Component {...pageProps} />
			</MuiThemeProvider>
		</EmotionThemeProvider>
	);
}

export default MyApp;
