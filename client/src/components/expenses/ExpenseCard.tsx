import { Text, Flex, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../../theme';
import { Expense } from '../../types';

interface ExpenseCardProps {
	expense: Expense;
}

export const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
	return (
		<Flex
			minH="150px"
			minW={['auto', '300px', '500px']}
			p={15}
			bgColor={colors.darkBlue}
			borderRadius={10}
			dir="row"
			justifyContent="space-between"
		>
			<VStack w={'100%'} align={'left'}>
				<Heading size="lg">{expense.name}</Heading>
				<Text>Qualifies for tax credit?</Text>
				<Text>{expense.is_qualified ? 'Yes' : 'No'}</Text>
			</VStack>
			<Stack mr={2} dir="col" w="30%" textAlign={'right'}>
				<Text as={'b'}>Cost:</Text>
				<Text as={'b'}>${expense.cost}</Text>
			</Stack>
		</Flex>
	);
};
