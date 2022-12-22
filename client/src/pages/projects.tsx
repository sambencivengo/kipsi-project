import { Input, Spinner, useBreakpointValue, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { devBaseApiUrl } from '../constants';
import { ErrorAlert, ErrorAlertProps } from '../components/ErrorAlert';
import { Project } from '../types';
import { colors } from '../theme';

const Projects: NextPage = () => {
	const [projects, setProjects] = React.useState<Project[]>([]);
	const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(
		[]
	);
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
				setFilteredProjects(data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getProjects();
	}, []);

	if (isLoading) return <Spinner />;

	if (requestError) return <ErrorAlert {...requestError} />;

	const searchProjects = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		if (query === '') {
			setFilteredProjects(projects);
		}
		const filter = projects?.filter((project) => {
			if (
				project.description
					.toLowerCase()
					.includes(query.toLowerCase()) ||
				project.name.toLowerCase().includes(query.toLowerCase())
			) {
				return project;
			}
		});
		setFilteredProjects(filter);
	};

	return (
		<VStack spacing={5}>
			<Input
				minW={'100%'}
				onChange={searchProjects}
				bgColor={colors.blue}
				placeholder={'Search projects...'}
			/>

			{projects &&
				filteredProjects?.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
		</VStack>
	);
};

export default Projects;
