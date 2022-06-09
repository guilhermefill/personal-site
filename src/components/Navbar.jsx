import {
	Button,
	Flex,
	Spacer,
	Text,
	Image,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';

import { Link } from 'react-scroll';
import React from 'react';
import gitDark from '../assets/images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';
import gitLight from '../assets/images/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png';
import linkedinLight from '../assets/images/Linkedin/In-White-96.png';
import linkedinDark from '../assets/images/Linkedin/linkedin-logo.png';

const Navbar = ({ goToRef }) => {
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
			<Link
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				duration={500}
			>
				<Text
					as="Button"
					fontFamily="Montserrat"
					fontWeight="600"
					fontSize="lg"
				>
					About
				</Text>
			</Link>

			<Link
				activeClass="active"
				to="projects"
				spy={true}
				smooth={true}
				duration={500}
			>
				<Text
					as="Button"
					fontFamily="Montserrat"
					fontWeight="600"
					fontSize="lg"
				>
					Projects
				</Text>
			</Link>

			<Link
				activeClass="active"
				to="contact"
				spy={true}
				smooth={true}
				duration={500}
			>
				<Text
					as="Button"
					fontFamily="Montserrat"
					fontWeight="600"
					fontSize="lg"
				>
					Contact
				</Text>
			</Link>

			<Spacer />
			<a
				href="https://github.com/guilhermefill"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={gitLogo} boxSize="25px"></Image>
			</a>
			<a
				href="https://www.linkedin.com/in/guilhermefill/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={linkedin} boxSize="25px"></Image>
			</a>
			<Button onClick={toggleColorMode} size="md" fontSize="larger">
				{colorMode === 'light' ? '🌚' : '🌞'}
			</Button>
		</Flex>
	);
};

export default Navbar;
