import type { NextPage } from 'next';
import Head from 'next/head';

import { Advantages, Header, Navbar, CallToAction, Expertise, Footer } from '../components';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Everget</title>
				<meta
					name='description'
					content='Build your brand awareness and increase sales by mere internet presence. Everget, a professional outsource web dev company, will create an eye-catching responsive website according to your requirements. Be it a landing or a complex e-store, we can do it all.'
				/>
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
