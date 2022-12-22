import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { devBaseApiUrl } from '../../constants';

interface ProjectsContainerProps {}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({}) => {
	const [projects, setProjects] = React.useState();

	React.useEffect(() => {
		const getProjects = async () => {
			const res = await fetch(`${devBaseApiUrl}/api/projects`);
			const data = await res.json();

			setProjects(data);
		};
		getProjects();
	}, []);

	console.log(projects);

	return (
		<Box>
			<Text>Projects Container</Text>
			<Button float={'right'}>New Project</Button>
		</Box>
	);
};
