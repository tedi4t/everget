import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';

const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
					<link rel='icon' type='image/vnd.microsoft.icon' sizes='16x16 32x32' href='favicon.ico' />
					<link rel='manifest' href='/site.webmanifest' />
				</Head>
				<body>
					<Main />
					<NextScript />

					<Script
						async
						id={'GA-source'}
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
						strategy='lazyOnload'
					/>
					<Script
						id={'GA-tracker'}
						dangerouslySetInnerHTML={{
							__html: `
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					  gtag('config', '${GA_TRACKING_ID}', {
					    page_path: window.location.pathname,
					  });
					`,
						}}
					/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
