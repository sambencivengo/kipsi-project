import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

interface ProjectsContainerProps {}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({}) => {
	return (
		<Box>
			<Text>Projects Cont ainer</Text>
			<Button float={'right'}>New Project</Button>
		</Box>
	);
};
