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
						Outsource Web Development
					</Typography>
					<Typography className={'body'}>
						Hardly any business can do without a website. If you need one too, Everget is the right
						partner for you. Instead of spending time on recruiting, extending the office and buying
						extra devices, you can just get your software done hassle-free.
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
