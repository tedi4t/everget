// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');

export type Data = {
	name: string;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const msg = {
		to: 'irynauryn@gmail.com', // Change to your recipient
		from: 'tedi4t@gmail.com', // Change to your verified sender
		subject: 'DMYTRO TESTING',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error: any) => {
			console.error(error);
		});

	res.status(200).json({ name: 'John Doe' });
}
