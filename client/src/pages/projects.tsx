import { Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { ProjectCard } from '../components/projects/ProjectCard';
import { devBaseApiUrl } from '../constants';
import { Project } from '../types';

const Projects: NextPage = () => {
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

export default Projects;
