import {
	Text,
	Flex,
	Heading,
	Stack,
	VStack,
	Button,
	HStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { colors } from '../theme';
import { Expense } from '../types';

interface ExpenseCardProps {
	expense: Expense;
	showProjectButton?: boolean;
}

export const ExpenseCard: React.FC<ExpenseCardProps> = ({
	expense,
	showProjectButton = false,
}) => {
	const expenseDate = dayjs(expense.createdAt)
		.format('MM/DD/YYYY')
		.toString();

	const router = useRouter();
	return (
		<Flex
			minH="150px"
			minW={['300px', '500px']}
			p={15}
			bgColor={colors.blue}
			borderRadius={10}
			dir="row"
			justifyContent="space-between"
		>
			<VStack w={'100%'} align={'left'}>
				<Heading size="lg">{expense.name}</Heading>
				<HStack>
					<Text>Qualifies?</Text>
					<Text>
						{expense.is_qualified ? (
							<AiFillCheckCircle color="green" size={'30px'} />
						) : (
							<ImCross color="red" size={'25px'} />
						)}
					</Text>
				</HStack>
				<Text>{expenseDate}</Text>
			</VStack>
			<Stack mr={2} dir="col" w="30%" textAlign={'right'}>
				<Text as={'b'}>Cost:</Text>
				<Text as={'b'}>${expense.cost}</Text>
				{showProjectButton && (
					<Button
						size={'sm'}
						onClick={() =>
							router.push(`/projects/${expense.project.id}`)
						}
						rightIcon={<FiArrowUpRight />}
					>
						View
					</Button>
				)}
			</Stack>
		</Flex>
	);
};
