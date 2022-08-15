import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {
	ExpertiseWrapper,
	SkillsList,
	Skill,
	ExpertiseTypography,
	DescTypography,
	SkillsTypography,
} from './Expertise.styles';
import Typography from '@mui/material/Typography';

export function Expertise() {
	const skills = [
		[
			'Website "turnkey"',
			'Project management',
			'Web hosting',
			'Content management system',
			'Complex web systems that include back-end',
			'HTML, CSS',
			'React',
			'Next.JS',
		],
		[
			'JavaScript',
			'Typescript',
			'Node.JS',
			'Amazon Web Services',
			'Nest.JS',
			'Express',
			'MySQL',
			'PostgreSQL',
		],
	];

	return (
		<ExpertiseWrapper>
			<Container>
				<Grid container>
					<Grid item md={4}>
						<SkillsTypography>OUR SKILLS</SkillsTypography>
						<ExpertiseTypography>Expertise</ExpertiseTypography>
						<DescTypography>
							Two decades of hands-on experience and hundreds of millions in spend have yielded a
							diverse skillset that touches on most every function. This is a partial list.
						</DescTypography>
					</Grid>
					{skills.map(skillColumn => {
						return (
							<Grid item md={4} key={JSON.stringify(skillColumn)}>
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
