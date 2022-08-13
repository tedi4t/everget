import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const WContainer = styled(Container)`
	padding-top: 5rem;
	padding-bottom: 2rem;
`;

export const WTypography = styled(Typography)`
	text-transform: uppercase;
	color: ${({ theme }) => theme.palette.primary.main};
`;
WTypography.defaultProps = {
	variant: 'h3',
	letterSpacing: 3,
	textAlign: 'center',
};

export const WButton = styled(Button)`
	text-transform: uppercase;
	align-self: center;
	margin-top: 4rem;
	margin-bottom: 6rem;
`;
WButton.defaultProps = {
	variant: 'outlined',
};
