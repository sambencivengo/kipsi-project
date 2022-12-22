import { Text, Flex, Heading, Stack, VStack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { colors } from '../../theme';
import { Expense } from '../../types';

interface ExpenseCardProps {
	expense: Expense;
	showProjectButton?: boolean;
}

export const ExpenseCard: React.FC<ExpenseCardProps> = ({
	expense,
	showProjectButton = false,
}) => {
	console.log(expense);

	const router = useRouter();
	return (
		<Flex
			minH="150px"
			minW={['auto', '300px', '500px']}
			p={15}
			bgColor={colors.blue}
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
				{showProjectButton && (
					<Button
						onClick={() =>
							router.push(`/projects/${expense.project.id}`)
						}
						rightIcon={<FiArrowUpRight />}
					>
						View Project
					</Button>
				)}
			</Stack>
		</Flex>
	);
};
