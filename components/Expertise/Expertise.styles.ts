import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const ExpertiseWrapper = styled.div`
	background: ${({ theme }) => theme.palette.grey['800']};
	padding: 4rem 0;
`;

export const SkillsTypography = styled(Typography)``;
SkillsTypography.defaultProps = {
	variant: 'h4',
	fontWeight: 'light',
	color: 'primary',
};

export const ExpertiseTypography = styled(Typography)`
	margin-top: 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		margin-top: 1rem;
	}
`;
ExpertiseTypography.defaultProps = {
	variant: 'h4',
	color: 'primary',
};

export const DescTypography = styled(Typography)`
	margin-top: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
		margin-bottom: 2rem;
	}
`;

export const SkillsList = styled.ul`
	list-style-type: '-   ';
	margin: 0;
`;

export const Skill = styled.li`
	margin-top: 0.3rem;
`;
