import { Image, Wrap, WrapItem, Text } from '@chakra-ui/react';
import React from 'react';
import profilePic from '../assets/images/ProfilePic.jpeg';

const Landing = () => {
	return (
		<div>
			<Wrap spacing={250} justify="center" mt={250} mb={250}>
				<WrapItem>
					<Text fontFamily="Montserrat" fontSize="4xl">
						Hi! My Name is Guilherme.
					</Text>
				</WrapItem>
				<WrapItem>
					<Image
						src={profilePic}
						boxSize={300}
						borderRadius="full"
						boxShadow="base"
						filter="grayscale(40%)"
					></Image>
				</WrapItem>
			</Wrap>
		</div>
	);
};

export default Landing;
