import styled from '@emotion/styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const FooterWrapper = styled.div`
	padding: 3rem 0;
	z-index: 2;
`;

export const HireUsWrapper = styled.div`
	display: flex;
	align-items: center;

	cursor: pointer;
`;

export const WArrowForwardIcon = styled(ArrowForwardIcon)`
	margin-left: 0.8rem;
`;
WArrowForwardIcon.defaultProps = {
	color: 'primary',
	fontSize: 'large',
};
