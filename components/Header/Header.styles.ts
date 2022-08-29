import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const WContainer = styled(Container)`
	padding: 4rem 0 4rem 0;
`;

export const WTypography = styled(Typography)`
	text-transform: uppercase;
	color: ${({ theme }) => theme.palette.primary.main};
	padding: 0 4rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding: 0 2rem;
	}
`;
WTypography.defaultProps = {
	variant: 'h4',
	letterSpacing: 3,
	textAlign: 'center',
};

export const WButton = styled(Button)`
	text-transform: uppercase;
	align-self: center;
	margin: 3rem 0 4rem 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		margin: 2rem 0 0;
	}
`;
WButton.defaultProps = {
	variant: 'outlined',
};

export const LogoWrapper = styled.div`
	flex: 1;
	width: 15rem;
	margin: 2rem auto 0 auto;

	@media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding-bottom: 5rem;
	}
`;

export const ImageWrapper = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		padding: 3.5rem;
	}
`;
