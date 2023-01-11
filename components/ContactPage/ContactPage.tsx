import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Checkbox from '@mui/material/Checkbox';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import ContactImg from '../../assets/media/contact.png';

import {
	RightBg,
	ImgWrapper,
	WContainer,
	RightSideWrapper,
	ContactForm,
	ContactFormTextField,
	// ContactFormControlLabel,
	ContactFormButton,
	SocialMedia,
} from './ContactPage.styles';

export interface ContactInfo {
	name: string;
	company: string;
	email: string;
	startDate: string;
	budget: string;
	description: string;
}

export function ContactPage({ onSubmit }: { onSubmit: (contactInfo: ContactInfo) => any }) {
	const [isErrorShown, setIsErrorShown] = useState<boolean>(false);
	const [contactInfo, setContactInfo] = useState<ContactInfo>({
		name: '',
		company: '',
		email: '',
		startDate: '',
		budget: '',
		description: '',
	});

	const handleSubmit = () => {
		if (!contactInfo.name || !contactInfo.email) {
			setIsErrorShown(true);
		} else {
			onSubmit(contactInfo);
		}
	};

	return (
		<Box sx={{ height: '100vh' }}>
			<RightBg />
			<WContainer>
				<Grid container sx={{ height: '100vh' }}>
					<ImgWrapper>
						<Image src={ContactImg} alt='everget' />
					</ImgWrapper>
					<RightSideWrapper>
						<Typography variant={'h3'} color={'primary'}>
							Contact Us
						</Typography>
						<ContactForm>
							<ContactFormTextField
								required
								error={isErrorShown && !contactInfo.name}
								helperText={isErrorShown && !contactInfo.name ? 'This field is mandatory' : null}
								label={'Your name'}
								value={contactInfo.name}
								onChange={({ target: { value } }) => {
									setIsErrorShown(false);
									setContactInfo(contactInfo => ({ ...contactInfo, name: value }));
								}}
							/>
							<ContactFormTextField
								label={'Your Company'}
								value={contactInfo.company}
								onChange={({ target: { value } }) =>
									setContactInfo(contactInfo => ({ ...contactInfo, company: value }))
								}
							/>
							<ContactFormTextField
								required
								error={isErrorShown && !contactInfo.email}
								helperText={isErrorShown && !contactInfo.email ? 'This field is mandatory' : null}
								label={'Your email address'}
								value={contactInfo.email}
								onChange={({ target: { value } }) => {
									setIsErrorShown(false);
									setContactInfo(contactInfo => ({ ...contactInfo, email: value }));
								}}
							/>
							<ContactFormTextField
								label={'When do you want to start?'}
								value={contactInfo.startDate}
								onChange={({ target: { value } }) =>
									setContactInfo(contactInfo => ({ ...contactInfo, startDate: value }))
								}
							/>
							<ContactFormTextField
								label={'What is your budget?'}
								value={contactInfo.budget}
								onChange={({ target: { value } }) =>
									setContactInfo(contactInfo => ({ ...contactInfo, budget: value }))
								}
							/>
							<ContactFormTextField
								multiline
								rows={'5'}
								label={'Describe your needs, the more we know, the better.'}
								value={contactInfo.description}
								onChange={({ target: { value } }) =>
									setContactInfo(contactInfo => ({ ...contactInfo, description: value }))
								}
								className={'no-bottom-margin'}
							/>
							{/*<ContactFormControlLabel*/}
							{/*	defaultChecked*/}
							{/*	control={<Checkbox defaultChecked />}*/}
							{/*	label='I want to receive a confirmation letter'*/}
							{/*/>*/}
							<ContactFormButton onClick={handleSubmit}>Submit</ContactFormButton>
						</ContactForm>
						<SocialMedia alignItems={'center'} justifyContent={'center'} gap={1}>
							<Grid container alignItems={'center'} justifyContent={'center'} gap={1}>
								<EmailIcon color={'primary'} />
								<Typography color={'primary'} variant={'body1'}>
									everget@everget.co
								</Typography>
							</Grid>
							<Link
								href={'https://www.linkedin.com/company/everget-development/'}
								passHref
								legacyBehavior
							>
								<a>
									<Grid container alignItems={'center'} justifyContent={'center'} gap={1}>
										<LinkedInIcon color={'primary'} />
										<Typography color={'primary'} variant={'body1'}>
											LinkedIn
										</Typography>
									</Grid>
								</a>
							</Link>
						</SocialMedia>
					</RightSideWrapper>
				</Grid>
			</WContainer>
		</Box>
	);
}
