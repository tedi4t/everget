import type { NextPage } from 'next';
import Head from 'next/head';

import { ContactPage, Navbar } from '../components';
import { ContactInfo } from '../components/ContactPage/ContactPage';

const Contact: NextPage = () => {
	const onSubmit = async (contactInfo: ContactInfo) => {
		fetch('/api/hello');
	};

	return (
		<div>
			<Head>
				<title>Everget</title>
				<meta name='description' content='Everget Desc' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />
				<ContactPage onSubmit={onSubmit} />
			</main>
		</div>
	);
};

export default Contact;
