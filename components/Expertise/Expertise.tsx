import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {
	ExpertiseWrapper,
	SkillsList,
	Skill,
	// ExpertiseTypography,
	DescTypography,
	SkillsTypography,
} from './Expertise.styles';
import Typography from '@mui/material/Typography';

export function Expertise() {
	const skills = [
		[
			'Software Outsourcing',
			'Website turnkey',
			'Project management',
			'Web hosting',
			'Content management system',
			'Complex web systems',
			'Quality Assurance',
			'UI/UX Design',
			'Website Re-engineering',
		],
		[
			'React, Next.JS',
			'JavaScript, Typescript',
			'Node.JS',
			'Amazon Web Services',
			'Nest.JS',
			'Express',
			'MySQL',
			'PostgreSQL',
			'DevOps',
		],
	];

	return (
		<ExpertiseWrapper>
			<Container>
				<Grid container>
					<Grid item md={4} sm={12} xs={12}>
						<SkillsTypography>OUR SKILLS</SkillsTypography>
						{/*<ExpertiseTypography>Expertise</ExpertiseTypography>*/}
						<DescTypography>
							We provide trustworthy software development services and become your partner who knows
							how to optimize your business processes, improve the customer experience of your
							business, and create new opportunities through software solutions
						</DescTypography>
					</Grid>
					{skills.map(skillColumn => {
						return (
							<Grid item md={4} sm={6} xs={12} key={JSON.stringify(skillColumn)}>
								<SkillsList>
									{skillColumn.map(skill => {
										return (
											<Skill key={skill}>
												<Typography>{skill}</Typography>
											</Skill>
										);
									})}
								</SkillsList>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</ExpertiseWrapper>
	);
}
