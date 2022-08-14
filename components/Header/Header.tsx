import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import TeamConstruct from '../../assets/media/teamConstruct.png';
import Logo from '../../assets/media/logo.png';
import { WContainer, WTypography, WButton, ImageWrapper } from './Header.styles';

export function Header() {
	return (
		<div>
			<WContainer>
				<Grid container spacing={1}>
					<Grid item md={6} container flexDirection={'column'} justifyContent={'space-between'}>
						<ImageWrapper>
							<Image src={Logo} alt={'everget'} />
						</ImageWrapper>
						<Grid container flexDirection={'column'}>
							<WTypography>we make technology work for you</WTypography>
							<Link href={'/contact'}>
								<WButton>hire us</WButton>
							</Link>
						</Grid>
					</Grid>
					<Grid item md={6}>
						<Image src={TeamConstruct} />
					</Grid>
				</Grid>
			</WContainer>
		</div>
	);
}
