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
					A post-pandemic fullstack engineer passionate about creating new
					experiences and products that help people achieve their goals. After
					10+ years providing memorable experiences through concerts as a Sound
					Engineer and technical manager, I have decided to migrate to a new
					passion of mine, programming and building stuff on the internet. After
					validating my excitement for coding with multiple self-taught courses
					on web development and data engineering, this year I decided to
					formalized my expertise with a tech bootcamp. I am always looking for
					new opportunities to learn and connect with like-minded people,
					companies and communities. So reach out if you ever wanna chat about
					coding, music or bikes.
				</Text>
			</Container>
		</div>
	);
};

export default About;
