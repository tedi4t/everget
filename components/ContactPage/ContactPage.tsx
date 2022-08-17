import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ContactImg from '../../assets/media/contact.png';

import {
	RightBg,
	ImgWrapper,
	WContainer,
	RightSideWrapper,
	ContactForm,
	ContactFormTextField,
} from './ContactPage.styles';

export function ContactPage() {
	return (
		<Box sx={{ height: '100vh' }}>
			<RightBg />
			<WContainer>
				<Grid container sx={{ height: '100vh' }}>
					<ImgWrapper>
						<Image src={ContactImg} alt={'everget'} />
					</ImgWrapper>
					<RightSideWrapper>
						<Typography variant={'h3'} color={'primary'}>
							Contact Us
						</Typography>
						<ContactForm>
							<ContactFormTextField label={'Your name'} />
							<ContactFormTextField label={'Your Company'} />
							<ContactFormTextField label={'Your email address'} />
							<ContactFormTextField label={'When do you want to start?'} />
							<ContactFormTextField label={'What is your budget?'} />
							<ContactFormTextField
								multiline
								rows={'5'}
								label={'Describe your needs, the more we know, the better.'}
							/>
							<Button variant={'outlined'} size={'large'} fullWidth>
								Submit
							</Button>
						</ContactForm>
					</RightSideWrapper>
				</Grid>
			</WContainer>
		</Box>
	);
}
