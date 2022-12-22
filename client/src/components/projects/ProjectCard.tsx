import {
	Text,
	Heading,
	VStack,
	HStack,
	Stack,
	Button,
	Box,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import React from 'react';
import { colors } from '../../theme';
import dayjs from 'dayjs';
import { Project } from '../../types';
import { useRouter } from 'next/router';
import { calculateTotalExpenseCost } from '../../utils';

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
}: ProjectCardProps) => {
	const router = useRouter();
	const totalCost = calculateTotalExpenseCost(project);

	project.expenses
		.map(({ cost }) => Number(cost))
		.reduce((sum, a) => sum + a, 0);

	return (
		<HStack
			minH="150px"
			p={15}
			minW="100%"
			bgColor={colors.darkBlue}
			borderRadius={10}
			dir="row"
			justifyContent="space-between"
		>
			<VStack w="100%" align={'left'}>
				<Heading size="lg">{project.name}</Heading>
				<Text>{project.description}</Text>
			</VStack>
			<Stack mr={2} dir="col" w="30%" textAlign={'right'}>
				<Text as={'b'}>Total Cost: ${totalCost}</Text>
				<Box>
					<Button
						size={'sm'}
						onClick={() => router.push(`/projects/${project.id}`)}
						rightIcon={<FiArrowUpRight />}
					>
						View
					</Button>
				</Box>
			</Stack>
		</HStack>
	);
};
