import { Image, Wrap, WrapItem, Text, Box } from '@chakra-ui/react';
import React from 'react';
import profilePic from '../assets/images/ProfilePic.jpeg';

const Landing = () => {
	return (
		<div>
			<Wrap spacing={150} justify="center" mt={250} align="center">
				<WrapItem>
					<Image
						src={profilePic}
						boxSize={300}
						borderRadius="full"
						boxShadow="base"
						filter="grayscale(40%)"
					></Image>
				</WrapItem>
				<WrapItem>
					<Box
						borderRadius="3xl"
						bgGradient="linear(to-br, gray.500, blue.800)"
						p={30}
					>
						<Text fontFamily="Montserrat" fontSize="3xl" color="InfoText">
							Hi! My Name is Guilherme. 👋 <br /> I love writing code and riding
							bikes.
							<br /> Except when I'm stuck on red lights.
						</Text>
					</Box>
				</WrapItem>
			</Wrap>
		</div>
	);
};

export default Landing;
