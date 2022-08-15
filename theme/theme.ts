import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
	palette: {
		primary: { contrastText: '#ffffff', main: '#ff8e25', light: '#F2F3FC' },
		secondary: { contrastText: '#ffffff', main: '#ffaa24' },
		background: { default: '#f4f5f7', paper: '#ffffff' },
		text: { primary: '#253858', secondary: '#68758B' },
		action: { active: '#6b778c' },
		success: { contrastText: '#ffffff', main: '#4caf50', light: '#EDF7ED' },
		warning: { contrastText: '#ffffff', main: '#ff9800' },
		error: { contrastText: '#ffffff', main: '#f44336' },
		grey: {
			'50': '#BDBDBD',
			'300': '#E0E0E0',
			'500': '#D0D4DB',
			'700': '#DFDFDF',
			'800': '#e9e9e9',
			'900': '#F4F5F7',
		},
	},
	typography: {
		fontFamily:
			'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		button: { fontWeight: 600 },
		h1: { fontWeight: 600, fontSize: '3.5rem' },
		h2: { fontWeight: 600, fontSize: '3rem' },
		h3: { fontWeight: 600, fontSize: '2.25rem' },
		h4: { fontWeight: 600, fontSize: '2rem' },
		h5: { fontWeight: 600, fontSize: '1.5rem' },
		h6: { fontWeight: 600, fontSize: '1.125rem' },
		subtitle1: { fontSize: '14px' }, // for Data-Grid cells
		subtitle2: { fontSize: '12px' },
		overline: { fontWeight: 600 },
	},
};
