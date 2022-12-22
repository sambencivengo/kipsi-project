import { Heading, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ExpensesContainer } from '../components/ExpensesContainer';

const Expenses: NextPage = () => {
	return (
		<VStack>
			<ExpensesContainer />
		</VStack>
	);
};

export default Expenses;
