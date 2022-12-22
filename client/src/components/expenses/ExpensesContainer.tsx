import { Box, Center, Heading, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { devBaseApiUrl } from '../../constants';
import { Expense } from '../../types';

interface ExpensesContainerProps {}

export const ExpensesContainer: React.FC<ExpensesContainerProps> = ({}) => {
	const [expenses, setExpenses] = React.useState<Expense[] | null>(null);
	const isMobile = useBreakpointValue({ base: true, lg: false });

	React.useEffect(() => {
		const getExpenses = async () => {
			const res = await fetch(`${devBaseApiUrl}/api/expenses`);
			const data = await res.json();

			setExpenses(data);
		};
		getExpenses();
	}, []);

	return (
		<Box>
			<Center>Expenses Container</Center>
			{expenses &&
				expenses.map((expense) => (
					<Box w={isMobile ? undefined : '800px'}>
						<Heading size="lg" alignSelf={'left'}>
							{expense.name}
						</Heading>
					</Box>
				))}
		</Box>
	);
};
