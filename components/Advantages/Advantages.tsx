import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
	AdvantagesWrapper,
	BoxesContainer,
	BoxContainer,
	DoneIconOutline,
	WDoneIcon,
	AdvantagesTitle,
	AdvantagesSubtitle,
} from './Advantages.styles';

export function Advantages() {
	return (
		<AdvantagesWrapper>
			<Container>
				<AdvantagesTitle>Web Application Development Company</AdvantagesTitle>
				<AdvantagesSubtitle>Best Tech Solutions for Your Business</AdvantagesSubtitle>
				<BoxesContainer>
					<Box
						title={'Design'}
						description={
							'Get an eye-catching look and feel for your business’ online presence, increase your user interaction and drive sales'
						}
					/>
					<Box
						title={'Development'}
						description={
							'Delivering user-friendly, visually appealing and able to convert visitors into new business'
						}
					/>
					<Box
						title={'QA & Testing'}
						description={
							'Take full advantage of your software with high-quality testing that will save your costs yet improve efficiency'
						}
					/>
					<Box
						title={'24/7 Support'}
						description={'We are always ready to help you in your project development'}
					/>
				</BoxesContainer>
			</Container>
		</AdvantagesWrapper>
	);
}

function Box({ title, description }: { title: string; description: string }) {
	return (
		<BoxContainer>
			<DoneIconOutline>
				<WDoneIcon />
			</DoneIconOutline>
			<div>
				<Typography variant={'h6'}>{title}</Typography>
				<Typography>{description}</Typography>
			</div>
		</BoxContainer>
	);
}
