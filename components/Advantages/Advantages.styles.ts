import styled from '@emotion/styled';
import DoneIcon from '@mui/icons-material/Done';

export const AdvantagesWrapper = styled.div`
	padding: 4rem 0 4rem 0;
	background: ${({ theme }) => theme.palette.grey['800']};
`;

export const BoxesContainer = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
`;

export const BoxContainer = styled.div`
	border-radius: 1rem;
	background: ${({ theme }) => theme.palette.background.default};
	padding: 2rem;

	display: flex;
	flex-direction: row;
	gap: 1.5rem;
`;

export const DoneIconOutline = styled.div`
	background: ${({ theme }) => theme.palette.primary.main};

	border-radius: 50%;
	min-width: 45px;
	height: 45px;

	display: flex;
	align-items: center;
	justify-content: center;

	align-self: center;
`;

export const WDoneIcon = styled(DoneIcon)`
	color: ${({ theme }) => theme.palette.background.default};
`;
WDoneIcon.defaultProps = {
	fontSize: 'large',
};
