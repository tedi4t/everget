import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import Team from '../../assets/media/teamConstruct.png';
import Logo from '../../assets/media/logo.png';
import { WContainer, WTypography, WButton, LogoWrapper, ImageWrapper } from './Header.styles';

export function Header() {
	return (
		<div>
			<WContainer>
				<Grid container spacing={1}>
					<Grid item md={6} container flexDirection={'column'} justifyContent={'space-between'}>
						<LogoWrapper>
							<Image src={Logo} alt='everget' priority />
						</LogoWrapper>
						<Grid container flexDirection={'column'}>
							<WTypography>we make technology work for you</WTypography>
							<Link href={'/contact'}>
								<WButton>hire us</WButton>
							</Link>
						</Grid>
					</Grid>
					<Grid item md={6}>
						<ImageWrapper>
							<Image src={Team} alt='everget' priority />
						</ImageWrapper>
					</Grid>
				</Grid>
			</WContainer>
		</div>
	);
}
