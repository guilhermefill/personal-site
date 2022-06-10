import { Button, Container, Heading, Input, Textarea } from '@chakra-ui/react';
import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ id }) => {
	const form = React.useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		console.log(form.current);
		emailjs
			.sendForm(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				form.current,
				process.env.PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div id={id}>
			<Container mt={350} mb={250}>
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
					></Input>
					<Input
						placeholder="Subject"
						variant="filled"
						mb={5}
						isRequired
						name="subject"
					></Input>
					<Input
						placeholder="Email"
						variant="filled"
						mb={5}
						isRequired
						name="reply_to_email"
					></Input>
					<Textarea
						placeholder="Message"
						variant="filled"
						mb={5}
						isRequired
						name="message"
					></Textarea>
					<Button type="submit" variant="outline" mb={5} colorScheme="whatsapp">
						Send Email
					</Button>
				</form>
			</Container>
		</div>
	);
};

export default Contact;
