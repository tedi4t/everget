import styled from '@emotion/styled';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export const CallToActionWrapper = styled.div``;

export const WContainer = styled(Container)`
	position: relative;
	padding: 4rem 0 4rem 0;
	height: 53rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		height: auto;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		padding: 4rem 2rem;
	}
`;

export const BackgroundRectangle = styled.div`
	position: absolute;
	left: 25%;
	right: 65%;
	top: 0;
	bottom: 0;
	background: ${({ theme }) => theme.palette.primary.main};
	z-index: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		left: 8%;
		right: 82%;
	}
`;

export const ImageWrapper = styled.div`
	background: ${({ theme }) => theme.palette.grey['800']};
	z-index: 1;
	position: absolute;
	top: 4rem;
	left: 10rem;
	right: 25%;
	border-radius: 1.5rem;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);

	@media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		position: relative;
		width: 85%;
		right: auto;
		left: auto;
		top: auto;
		bottom: auto;
	}
`;

export const Circle = styled.div`
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	background: ${({ theme }) => theme.palette.secondary.main};
	position: absolute;
	top: 0;
	left: 0;
	transform: translateX(-60%) translateY(-10%);

	@media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		display: none;
	}
`;

export const InfoWrapper = styled.div`
	position: absolute;
	right: 0;
	left: 60%;
	z-index: 2;
	bottom: 4rem;
	border-radius: 1.5rem;

	background: ${({ theme }) => theme.palette.grey['800']};
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
	padding: 2rem;

	.body {
		margin-top: 1.5rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
		position: relative;
		right: auto;
		left: auto;
		top: auto;
		bottom: auto;
		width: 80%;
		margin-left: auto;
		margin-top: -2rem;
	}
`;

export const InfoButtonWrapper = styled.div`
	margin-top: 1.5rem;
`;

export const InfoButton = styled(Button)`
	padding: 0.5rem 3rem;
`;
