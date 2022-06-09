import {
	Button,
	Flex,
	Spacer,
	Text,
	Image,
	useColorMode,
	useColorModeValue,
	Wrap,
} from '@chakra-ui/react';

import { Link } from 'react-scroll';
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
		<Wrap w="100%" top={0} justify="center" opacity={80}>
			<Flex
				maxW="1000px"
				p="25px"
				align="center"
				justify="center"
				gap="5"
				m="auto"
				pos="fixed"
				w="100%"
				zIndex={1}
			>
				<Link
					activeClass="active"
					to="App"
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
						Home
					</Text>
				</Link>

				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={-250}
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
		</Wrap>
	);
};

export default Navbar;
