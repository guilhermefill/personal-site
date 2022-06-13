import { Text, Container, Heading } from '@chakra-ui/react';
import React from 'react';

const About = ({ id }) => {
	return (
		<div id={id}>
			<Container mt={250}>
				<Heading fontFamily="Montserrat" pb={5}>
					Who Am I?
				</Heading>
				<Text fontFamily="Montserrat" textAlign="justify" fontSize="larger">
					A [Post-Pandemic] Fullstack Engineer passionate about creating new
					experiences and products as well as helping people achieve their
					dreams and ideas. I have dedicated the past years to exploring my
					passion for programming and building things on the internet. After
					having done multiple self-taught courses on web development and data
					engineering, I have most recently formalized this training with a tech
					bootcamp. I am always looking for new opportunities to learn and
					connect with like-minded companies, communities and people.
				</Text>
			</Container>
		</div>
	);
};

export default About;
