import type { NextPage } from 'next';
import Head from 'next/head';

import { Header, Navbar } from '../components';

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
			</main>
		</div>
	);
};

export default Home;
