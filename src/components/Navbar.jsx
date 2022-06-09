import {
	Button,
	Flex,
	Spacer,
	Text,
	Image,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import gitDark from '../assets/images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';
import gitLight from '../assets/images/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png';
import linkedinLight from '../assets/images/Linkedin/In-White-96.png';
import linkedinDark from '../assets/images/Linkedin/linkedin-logo.png';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const gitLogo = useColorModeValue(gitDark, gitLight);
	const linkedin = useColorModeValue(linkedinDark, linkedinLight);
	return (
		<Flex
			maxW="1000px"
			p="25px"
			align="center"
			justify="center"
			gap="5"
			m="auto"
			fontFamily="Montserrat"
			fontWeight="600"
			fontSize="lg"
		>
			<Text>About</Text>
			<Text>Projects</Text>
			<Text>Contact</Text>
			<Spacer />
			<a href="https://github.com/guilhermefill">
				<Image src={gitLogo} boxSize="25px"></Image>
			</a>
			<a href="https://www.linkedin.com/in/guilhermefill/">
				<Image src={linkedin} boxSize="25px"></Image>
			</a>
			<Button onClick={toggleColorMode} size="md" fontSize="larger">
				{colorMode === 'light' ? '🌚' : '🌞'}
			</Button>
		</Flex>
	);
};

export default Navbar;
