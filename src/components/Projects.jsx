import { Grid, GridItem, Heading, Image, Box, Text } from '@chakra-ui/react';
import React from 'react';
import projects from '../assets/data/projects.json';

const Projects = ({ id }) => {
	const projectList = projects.map((project) => (
		<GridItem w="100%" key={project.id}>
			<a href={project.link} target="_blank" rel="noreferrer">
				<Box
					w={300}
					h={400}
					border="1px"
					borderColor="gray.200"
					p={5}
					boxShadow="base"
				>
					<Image w={300} h={150} src={project.image_url}></Image>
					<Heading align="center" fontFamily="Montserrat" fontSize="2xl" p={5}>
						{project.title}
					</Heading>
					<Text fontFamily="Montserrat" align="justify" pb={5}>
						{project.description}
					</Text>
					<Text as="em" fontFamily="Montserrat" fontSize="small">
						Tech: {project.tech_stack}
					</Text>
				</Box>
			</a>
		</GridItem>
	));
	return (
		<div id={id}>
			<Grid
				templateColumns="repeat(3, 1fr)"
				gap={6}
				mt={300}
				maxW="1000px"
				ml="auto"
				mr="auto"
			>
				{projectList}
			</Grid>
		</div>
	);
};

export default Projects;
