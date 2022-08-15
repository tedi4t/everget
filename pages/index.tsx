import type { NextPage } from 'next';
import Head from 'next/head';

import { Advantages, Header, Navbar, CallToAction, Expertise, Footer } from '../components';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Everget</title>
				<meta name='description' content='Everget Desc' />
				<link rel='icon' href='/favicon.ico' />
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
