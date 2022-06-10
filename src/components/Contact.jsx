import {
	Button,
	Container,
	Heading,
	Input,
	Text,
	Textarea,
} from '@chakra-ui/react';
import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ id }) => {
	const form = React.useRef();
	const [name, setName] = React.useState('');
	const [subject, setSubject] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [success, setSuccess] = React.useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				form.current,
				process.env.PUBLIC_KEY
			)
			.then(
				(result) => {
					if (result.text === 'OK') {
						setName('');
						setSubject('');
						setEmail('');
						setMessage('');
						setSuccess(true);
					}
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div id={id}>
			<Container mt={350} mb={150}>
				<Heading fontFamily="Montserrat" mb={10}>
					Hire Me!
				</Heading>
				<form ref={form} onSubmit={sendEmail}>
					<Input
						placeholder="Name"
						variant="filled"
						mb={5}
						isRequired
						name="from_name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Input>
					<Input
						placeholder="Subject"
						variant="filled"
						mb={5}
						isRequired
						name="subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					></Input>
					<Input
						placeholder="Email"
						variant="filled"
						mb={5}
						isRequired
						name="reply_to_email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Input>
					<Textarea
						placeholder="Message"
						variant="filled"
						mb={5}
						isRequired
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></Textarea>
					{success ? (
						<Text fontFamily="Montserrat" p={5}>
							Email sent successfully
						</Text>
					) : (
						<></>
					)}
					<Button type="submit" variant="outline" mb={5} colorScheme="whatsapp">
						Send Email
					</Button>
				</form>
			</Container>
		</div>
	);
};

export default Contact;
