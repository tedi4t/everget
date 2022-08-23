import type { NextPage } from 'next';
import Head from 'next/head';

import { Advantages, Header, Navbar, CallToAction, Expertise, Footer } from '../components';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Everget</title>
				<meta name='description' content='Everget Desc' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='icon' type='image/vnd.microsoft.icon' sizes='16x16 32x32' href='favicon.ico' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>

			<main>
				<Navbar />
				<Header />
				<Advantages />
				<CallToAction />
				<Expertise />
				<Footer />
			</main>
		</div>
	);
};

export default Home;
