import styled from '@emotion/styled';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

export const RightBg = styled.div`
	background: ${({ theme }) => theme.palette.grey['800']};
	position: absolute;
	left: 50%;
	top: 0;
	right: 0;
	bottom: 0;
`;

export const ImgWrapper = styled(Grid)`
	padding: 5rem;
`;
ImgWrapper.defaultProps = {
	item: true,
	container: true,
	md: 6,
	alignItems: 'center',
	justifyContent: 'center',
};

export const WContainer = styled(Container)`
	position: absolute;
	z-index: 1;
	left: 50%;
	transform: translateX(-50%);
`;
WContainer.defaultProps = {
	maxWidth: 'xl',
};

export const RightSideWrapper = styled(Grid)`
	padding: 3rem;
`;
RightSideWrapper.defaultProps = {
	item: true,
	md: 6,
	container: true,
	justifyContent: 'center',
	alignItems: 'flex-start',
	flexDirection: 'column',
};

export const ContactForm = styled.form`
	margin-top: 4rem;
	width: 100%;
`;

export const ContactFormTextField = styled(TextField)`
	margin-bottom: 1.5rem;

	&.no-bottom-margin {
		margin-bottom: 0;
	}
`;
ContactFormTextField.defaultProps = {
	variant: 'outlined',
	fullWidth: true,
};

export const ContactFormControlLabel = styled(FormControlLabel)`
	color: ${({ theme }) => theme.palette.text.secondary};
`;

export const ContactFormButton = styled(Button)`
	margin-top: 1.5rem;
`;
ContactFormButton.defaultProps = {
	variant: 'outlined',
	size: 'large',
	fullWidth: true,
};
