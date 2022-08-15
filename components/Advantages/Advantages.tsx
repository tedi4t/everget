import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
	AdvantagesWrapper,
	BoxesContainer,
	BoxContainer,
	DoneIconOutline,
	WDoneIcon,
} from './Advantages.styles';

export function Advantages() {
	return (
		<AdvantagesWrapper>
			<Container>
				<Typography variant={'h3'} fontWeight={'500'} textAlign={'center'}>
					We create super-awesome designs
				</Typography>
				<Typography variant={'h6'} textAlign={'center'} sx={{ mt: 3 }}>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident.
				</Typography>
				<BoxesContainer>
					<Box
						title={'Amazing Design'}
						description={
							'Sample text. Click to select the text box. Click again or double click to start editing the text.'
						}
					/>
					<Box
						title={'Copywriting'}
						description={
							'Sample text. Click to select the text box. Click again or double click to start editing the text.'
						}
					/>
					<Box
						title={'Development'}
						description={
							'Sample text. Click to select the text box. Click again or double click to start editing the text.'
						}
					/>
					<Box
						title={'24/7 Support'}
						description={
							'Sample text. Click to select the text box. Click again or double click to start editing the text.'
						}
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
