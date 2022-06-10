import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
	return (
		<Box w="100%" bg="black">
			<Text fontFamily="Montserrat" align="center" color="white" p={2}>
				Made in Berlin. 2022 @guilhermefill
			</Text>
		</Box>
	);
};

export default Footer;
