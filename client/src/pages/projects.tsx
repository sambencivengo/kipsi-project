import { Box, Spinner, useBreakpointValue, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { ProjectCard } from '../components/projects/ProjectCard';
import { devBaseApiUrl } from '../constants';
import { ErrorAlert, ErrorAlertProps } from '../components/ErrorAlert';
import { Project } from '../types';

const Projects: NextPage = () => {
	const [projects, setProjects] = React.useState<Project[] | null>(null);
	const [requestError, setRequestError] = React.useState<ErrorAlertProps>();
	const [isLoading, setIsLoading] = React.useState(false);
	const isMobile = useBreakpointValue({ base: true, lg: false });

	React.useEffect(() => {
		setIsLoading(true);
		const getProjects = async () => {
			try {
				const res = await fetch(`${devBaseApiUrl}/api/projects`);

				if (!res.ok) {
					const errCodeMsg = `(Error Code: ${res.status})`;
					setRequestError({
						header: 'Error',
						text: `Unable to get projects ${errCodeMsg}`,
					});
					setIsLoading(false);
					return;
				}
				const data = await res.json();
				setProjects(data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getProjects();
	}, []);

	if (isLoading) return <Spinner />;

	if (requestError) return <ErrorAlert {...requestError} />;

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
