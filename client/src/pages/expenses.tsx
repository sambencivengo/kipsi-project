import { Box, VStack, Spinner } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { ErrorAlert, ErrorAlertProps } from '../components/ErrorAlert';
import { ExpenseCard } from '../components/expenses';
import { devBaseApiUrl } from '../constants';
import { Expense } from '../types';

const Expenses: NextPage = () => {
	const [expenses, setExpenses] = React.useState<Expense[] | null>(null);
	const [isLoading, setIsLoading] = React.useState(false);
	const [requestError, setRequestError] = React.useState<ErrorAlertProps>();

	React.useEffect(() => {
		const getExpenses = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(`${devBaseApiUrl}/api/expenses`);

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
				setExpenses(data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getExpenses();
	}, []);

	if (isLoading) return <Spinner />;

	if (requestError) return <ErrorAlert {...requestError} />;

	return (
		<Box>
			<VStack align="stretch" spacing={5}>
				{expenses &&
					expenses.map((expense) => (
						<ExpenseCard
							showProjectButton={true}
							key={expense.id}
							expense={expense}
						/>
					))}
			</VStack>
		</Box>
	);
};

export default Expenses;
