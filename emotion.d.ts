import '@emotion/react';

import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
	// eslint-disable-next-line
	export interface Theme extends MuiTheme {}
}
