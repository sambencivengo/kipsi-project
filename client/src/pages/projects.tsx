import { VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ProjectsContainer } from '../components/projects';

const Projects: NextPage = () => {
	return (
		<VStack>
			<ProjectsContainer />
		</VStack>
	);
};

export default Projects;
