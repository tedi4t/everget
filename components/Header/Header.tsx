import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import TeamConstruct from '../../assets/media/teamConstruct.png';
import { WContainer, WTypography, WButton } from './Header.styles';

export function Header() {
	return (
		<div>
			<WContainer>
				<Grid container spacing={1}>
					<Grid item md={6} container flexDirection={'column'} justifyContent={'flex-end'}>
						<WTypography>we make technology work for you</WTypography>
						<Link href={'/contact'}>
							<WButton>hire us</WButton>
						</Link>
					</Grid>
					<Grid item md={6}>
						<Image src={TeamConstruct} />
					</Grid>
				</Grid>
			</WContainer>
		</div>
	);
}
