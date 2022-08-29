import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

import Technologies from '../../assets/media/technologies.png';

import {
	CallToActionWrapper,
	BackgroundRectangle,
	ImageWrapper,
	Circle,
	InfoWrapper,
	WContainer,
	InfoButtonWrapper,
	InfoButton,
} from './CallToAction.styles';

export function CallToAction() {
	return (
		<CallToActionWrapper>
			<WContainer>
				<BackgroundRectangle />
				<ImageWrapper>
					<Image src={Technologies} alt='everget' />
					<Circle />
				</ImageWrapper>
				<InfoWrapper>
					<Typography color={'primary'} variant={'h4'}>
						Create Amazing Website
					</Typography>
					<Typography className={'body'}>
						Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis tincidunt id aliquet
						risus feugiat in. Auctor augue mauris augue neque gravida in fermentum et. Feugiat in
						fermentum urna.
					</Typography>
					<InfoButtonWrapper>
						<Link href={'/contact'}>
							<InfoButton variant={'contained'}>
								<Typography>hire us</Typography>
							</InfoButton>
						</Link>
					</InfoButtonWrapper>
				</InfoWrapper>
			</WContainer>
		</CallToActionWrapper>
	);
}
