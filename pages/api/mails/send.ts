// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactInfo } from '../../../components/ContactPage/ContactPage';
const sgMail = require('@sendgrid/mail');

export type Data = {
	success: boolean;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const body: ContactInfo = JSON.parse(req.body.toString());

	const text = `
		Name: ${body.name}
		Company: ${body.company}
		Email: ${body.email}
		Start Date: ${body.startDate}
		Budget: ${body.budget}
		Description: ${body.description}
	`;

	const mail = {
		to: 'dmytro@everget.co', // Change to your recipient
		from: 'no-reply@everget.co', // Change to your verified sender
		subject: 'SUBMITTED CONTACT FORM',
		text: text,
		html: text
			.split('\n')
			.map(line => line.trim())
			.join('<br>'),
	};

	sgMail
		.send(mail)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error: any) => {
			console.error(error);
		});

	res.status(200).json({ success: true });
}
