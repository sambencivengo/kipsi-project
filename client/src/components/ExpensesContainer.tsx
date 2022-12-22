import { Box, Center } from '@chakra-ui/react';
import React from 'react';

interface ExpensesContainerProps {}

export const ExpensesContainer: React.FC<ExpensesContainerProps> = ({}) => {
	return (
		<Box border="1px solid red" minH="500px" minW="300px">
			<Center>Expenses Container</Center>
		</Box>
	);
};
