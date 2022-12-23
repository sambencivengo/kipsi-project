import {
	Box,
	Text,
	Heading,
	useBreakpointValue,
	VStack,
	Center,
	Spinner,
	Button,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ErrorAlert, ErrorAlertProps } from '../../components/ErrorAlert';
import { ExpenseCard } from '../../components/ExpenseCard';
import { ExpenseForm } from '../../components/ExpenseForm';
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
	const [showExpenseForm, setShowExpenseForm] = React.useState(false);
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
			<Box>
				<Heading>{project?.name}</Heading>
				<Text>{project?.description}</Text>
				<Text as="b">
					Total Cost: $
					{project ? calculateTotalExpenseCost(project) : null}
				</Text>
			</Box>
			{!showExpenseForm && (
				<Center p={5}>
					<Button onClick={() => setShowExpenseForm(true)}>
						New Expense
					</Button>
				</Center>
			)}
			{showExpenseForm && (
				<ExpenseForm
					expenses={expenses}
					setExpenses={setExpenses}
					projectId={project?.id}
					setShowExpenseForm={setShowExpenseForm}
				/>
			)}
			<VStack align="stretch" spacing={5}>
				{expenses?.length ? (
					expenses.map((expense) => (
						<ExpenseCard key={expense.id} expense={expense} />
					))
				) : (
					<Center>
						<Heading
							p={5}
							size="lg"
							textAlign="center"
							borderRadius={10}
							bgColor={colors.blue}
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
