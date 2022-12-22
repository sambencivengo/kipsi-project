import { Heading, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ExpensesContainer } from '../components/expenses';

const Expenses: NextPage = () => {
	// params will have the project id and fetch on effect.
	// possible useContext instead
	return (
		<VStack>
			<ExpensesContainer />
		</VStack>
	);
};

export default Expenses;
