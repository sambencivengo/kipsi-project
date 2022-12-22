import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import { devBaseApiUrl } from '../../constants';
import { Expense } from '../../types';

interface ExpensesContainerProps {}

export const ExpensesContainer: React.FC<ExpensesContainerProps> = ({}) => {
	const [expenses, setExpenses] = React.useState<Expense[] | null>(null);

	React.useEffect(() => {
		const getExpenses = async () => {
			const res = await fetch(`${devBaseApiUrl}/api/expenses`);
			const data = await res.json();

			setExpenses(data);
		};
		getExpenses();
	}, []);

	return (
		<Box border="1px solid red" minH="500px" minW="300px">
			<Center>Expenses Container</Center>
		</Box>
	);
};
