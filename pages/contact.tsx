import type { NextPage } from 'next';
import Head from 'next/head';
import swal from 'sweetalert';

import { ContactPage, Navbar } from '../components';
import { ContactInfo } from '../components/ContactPage/ContactPage';

const Contact: NextPage = () => {
	const onSubmit = async (contactInfo: ContactInfo) => {
		fetch('/api/mails/send', {
			body: JSON.stringify(contactInfo),
			method: 'POST',
		})
			.then(() => {
				swal({
					title: 'Thank you for contacting us!',
					text: 'We will contact you shortly',
					icon: 'success',
				});
			})
			.catch(() => {
				swal({
					title: 'We are sorry but this function is not available for now',
					text: 'Contact us via everget@everget.com, please',
					icon: 'info',
				});
			});
	};

	return (
		<div>
			<Head>
				<title>Everget</title>
				<meta name='description' content='Everget Desc' />
			</Head>

			<main>
				<Navbar />
				<ContactPage onSubmit={onSubmit} />
			</main>
		</div>
	);
};

export default Contact;
