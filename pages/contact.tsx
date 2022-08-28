import type { NextPage } from 'next';
import Head from 'next/head';

import { ContactPage, Navbar } from '../components';
import { ContactInfo } from '../components/ContactPage/ContactPage';

const Contact: NextPage = () => {
	const onSubmit = async (contactInfo: ContactInfo) => {
		return fetch('/api/mails/send', {
			body: JSON.stringify(contactInfo),
			method: 'POST',
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
