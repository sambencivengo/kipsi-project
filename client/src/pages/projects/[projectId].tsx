import {
	Box,
	Text,
	Heading,
	useBreakpointValue,
	VStack,
	Center,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ExpenseCard } from '../../components/expenses/ExpenseCard';
import { devBaseApiUrl } from '../../constants';
import { colors } from '../../theme';
import { Expense, Project } from '../../types';
import { calculateTotalExpenseCost } from '../../utils';

const ProjectId: NextPage = () => {
	const isMobile = useBreakpointValue({ base: true, lg: false });
	const [project, setProject] = React.useState<Project | null>(null);
	const [expenses, setExpenses] = React.useState<Expense[]>([]);
	const { query, isReady } = useRouter();
	const { projectId } = query;

	React.useEffect(() => {
		if (!isReady) return;

		const getProject = async () => {
			try {
				const res = await fetch(
					`${devBaseApiUrl}/api/projects/${projectId}`
				);
				if (!res.ok) {
					console.log('Unable to get project');
					return;
				}

				const data = await res.json();

				setProject(data);
				setExpenses(data.expenses);
			} catch (error) {
				console.error(error);
			}
		};
		getProject();
	}, [isReady]);

	return (
		<Box
			p={15}
			borderRadius={10}
			bgColor={colors.darkBlue}
			maxW={isMobile ? undefined : '900px'}
		>
			<Box mb={10}>
				<Heading>{project?.name}</Heading>
				<Text>{project?.description}</Text>
				<Text as="b">
					Total Cost: $
					{project ? calculateTotalExpenseCost(project) : null}
				</Text>
			</Box>
			<VStack align="stretch" spacing={10}>
				{expenses &&
					expenses.map((expense) => (
						<ExpenseCard key={expense.id} expense={expense} />
					))}
			</VStack>
		</Box>
	);
};

export default ProjectId;
