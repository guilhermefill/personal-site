import { Text, Container } from '@chakra-ui/react';
import React from 'react';

const About = ({ id }) => {
	return (
		<div id={id}>
			<Container mt={350}>
				<Text fontFamily="Montserrat" textAlign="justify" fontSize="large">
					[Post-Pandemic] Fullstack Engineer recently graduated from Ironhack
					Berlin. For the past years, I have been dedicated to exploring a new
					found passion for programming and creating products from scratch.
					Having done multiple self-taught courses on web development and data
					engineering and finally made the move to formalize this education with
					a Tech Bootcamp.
				</Text>
			</Container>
		</div>
	);
};

export default About;
