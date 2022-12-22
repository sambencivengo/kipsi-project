import {
	Box,
	Text,
	Heading,
	useBreakpointValue,
	VStack,
	Center,
	Spinner,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ErrorAlert, ErrorAlertProps } from '../../components/ErrorAlert';
import { ExpenseCard } from '../../components/expenses/ExpenseCard';
import { devBaseApiUrl } from '../../constants';
import { colors } from '../../theme';
import { Expense, Project } from '../../types';
import { calculateTotalExpenseCost } from '../../utils';

const ProjectId: NextPage = () => {
	const isMobile = useBreakpointValue({ base: true, lg: false });
	const [project, setProject] = React.useState<Project | null>(null);
	const [expenses, setExpenses] = React.useState<Expense[]>([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [requestError, setRequestError] = React.useState<ErrorAlertProps>();
	const { query, isReady } = useRouter();
	const { projectId } = query;

	React.useEffect(() => {
		if (!isReady) return;

		const getProject = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(
					`${devBaseApiUrl}/api/projects/${projectId}`
				);
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
				setProject(data);
				setExpenses(data.expenses);

				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getProject();
	}, [isReady]);

	if (isLoading) return <Spinner />;

	if (requestError) return <ErrorAlert {...requestError} />;

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
			<VStack align="stretch" spacing={5}>
				{expenses?.length ? (
					expenses.map((expense) => (
						<ExpenseCard key={expense.id} expense={expense} />
					))
				) : (
					<Center>
						<Heading
							p={5}
							borderRadius={10}
							bgColor={colors.orange}
						>
							No expenses logged for this project
						</Heading>
					</Center>
				)}
			</VStack>
		</Box>
	);
};

export default ProjectId;
