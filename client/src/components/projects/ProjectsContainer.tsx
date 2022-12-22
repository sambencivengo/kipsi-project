import { Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { devBaseApiUrl } from '../../constants';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsContainerProps {}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({}) => {
	const [projects, setProjects] = React.useState<Project[] | null>(null);
	const isMobile = useBreakpointValue({ base: true, lg: false });

	React.useEffect(() => {
		const getProjects = async () => {
			const res = await fetch(`${devBaseApiUrl}/api/projects`);
			const data = await res.json();

			setProjects(data);
		};
		getProjects();
	}, []);

	return (
		<Box>
			<Box maxWidth={isMobile ? undefined : '900px'}>
				<VStack align="stretch" spacing={5}>
					{projects &&
						projects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
				</VStack>
			</Box>
		</Box>
	);
};
