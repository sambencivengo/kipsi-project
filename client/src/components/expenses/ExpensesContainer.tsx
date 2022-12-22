import { Box, Center, Heading, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { devBaseApiUrl } from '../../constants';
import { Expense } from '../../types';
import { ErrorAlert, ErrorAlertProps } from '../ErrorAlert';

export const ExpensesContainer: React.FC = ({}) => {
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
