import '@emotion/react';

import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
	export type Theme = MuiTheme;
}
