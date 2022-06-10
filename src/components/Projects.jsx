import { Grid, GridItem, Heading, Image, Box, Text } from '@chakra-ui/react';
import React from 'react';
import projects from '../assets/data/projects.json';

const Projects = ({ id }) => {
	const projectList = projects.map((project) => (
		<GridItem w="100%">
			<a href={project.link}>
				<Box
					w={300}
					h={400}
					border="1px"
					borderColor="gray.200"
					p={5}
					boxShadow="base"
				>
					<Image w={300} h={150} src={project.image_url}></Image>
					<Heading align="center">{project.title}</Heading>
					<Text>{project.description}</Text>
				</Box>
			</a>
		</GridItem>
	));
	return (
		<div id={id}>
			<Grid
				templateColumns="repeat(3, 1fr)"
				gap={6}
				mt={350}
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
