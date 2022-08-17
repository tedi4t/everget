import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const closeWrapperAnimation = keyframes`
	0%, 99% {
		z-index: 10;
		bottom: 0;
		right: 0;
	}

	100% {
		z-index: 0;
	}
`;

export const Wrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	transition-duration: 0.5s;
	z-index: 1;

	&.open {
		bottom: 0;
		right: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.1);
	}

	&.close {
		animation: ${closeWrapperAnimation} 1s;
	}
`;

export const Slide = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	background: ${({ theme }) => theme.palette.background.default};

	box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);

	transform: translateX(-100%);
	transition-duration: 1s;

	&.open {
		transform: translateX(0);
	}
`;

export const MenuTypography = styled(Typography)`
	writing-mode: vertical-lr;
	text-orientation: upright;
`;
MenuTypography.defaultProps = {};

const slideToggleAnimation = keyframes`
	0%, 100% {
		opacity: 1;
	}
	
	20%, 70% {
		opacity: 5%;
	}
`;

export const WIconButton = styled(IconButton)`
	position: fixed;
	top: 1.5rem;
	left: 1.5rem;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	z-index: 11;

	&.animate {
		animation: ${slideToggleAnimation} 1s linear;
	}
`;

export const RightSlideContent = styled.div`
	padding: 2rem 3rem 0 6rem;
`;

export const SlideItem = styled.div`
	cursor: pointer;
	margin-bottom: 1.5rem;
`;

export const SlideItemTypography = styled(Typography)`
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	color: ${({ theme }) => theme.palette.text.secondary};
	transition-duration: 0.3s;

	&:hover {
		color: ${({ theme }) => theme.palette.primary.main};
	}
`;
SlideItemTypography.defaultProps = {
	variant: 'h5',
	fontWeight: 500,
};
