import {
	useBreakpointValue,
	Box,
	Center,
	Heading,
	VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { ErrorAlert, ErrorAlertProps } from '../components/ErrorAlert';
import { ExpenseCard } from '../components/expenses';
import { devBaseApiUrl } from '../constants';
import { Expense } from '../types';

const Expenses: NextPage = () => {
	const [expenses, setExpenses] = React.useState<Expense[] | null>(null);
	const isMobile = useBreakpointValue({ base: true, lg: false });
	const [requestError, setRequestError] = React.useState<ErrorAlertProps>();

	React.useEffect(() => {
		const getExpenses = async () => {
			try {
				const res = await fetch(`${devBaseApiUrl}/api/expenses`);

				if (!res.ok) {
					const errCodeMsg = `(Error Code: ${res.status})`;
					setRequestError({
						header: 'Error',
						text: `Unable to get projects ${errCodeMsg}`,
					});
					return;
				}

				const data = await res.json();
				setExpenses(data);
			} catch (error) {
				console.error(error);
			}
		};
		getExpenses();
	}, []);

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
