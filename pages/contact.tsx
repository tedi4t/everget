import type { NextPage } from 'next';
import Head from 'next/head';

import { ContactPage, Navbar } from '../components';

const Contact: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Everget</title>
				<meta name='description' content='Everget Desc' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />
				<ContactPage />
			</main>
		</div>
	);
};

export default Contact;
