import Link from 'next/link';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FooterWrapper, HireUsWrapper, WArrowForwardIcon } from './Footer.styles';

export function Footer() {
	return (
		<FooterWrapper>
			<Container>
				<Grid container justifyContent={'space-between'} gap={3}>
					<Typography color={'primary'} variant={'h4'}>
						Let&apos;s talk about your project
					</Typography>
					<Link href={'/contact'}>
						<HireUsWrapper>
							<Typography color={'primary'} variant={'h4'}>
								Hire us
							</Typography>
							<WArrowForwardIcon />
						</HireUsWrapper>
					</Link>
				</Grid>
			</Container>
		</FooterWrapper>
	);
}
