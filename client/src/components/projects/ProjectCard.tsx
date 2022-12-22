import { Text, Flex, Heading, VStack, HStack, Stack } from '@chakra-ui/react';

import React from 'react';

import { colors } from '../../theme';
import { Project } from '../../types';

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
}: ProjectCardProps) => {
	const totalCost = project.expenses
		.map(({ cost }) => Number(cost))
		.reduce((sum, a) => sum + a, 0);
	console.log(totalCost);

	return (
		<Flex
			minH="150px"
			p={15}
			bgColor={colors.darkBlue}
			borderRadius={10}
			dir="row"
			justifyContent="space-between"
		>
			<VStack w={'100%'} align={'left'}>
				<Heading size="lg">{project.name}</Heading>
				<HStack>
					<Text maxW={'70%'}>{project.description}</Text>
				</HStack>
			</VStack>
			<Stack mr={2} dir="col" w="30%" textAlign={'right'}>
				<Text as={'b'}>Total Cost:</Text>
				<Text as={'b'}>${totalCost}</Text>
			</Stack>
		</Flex>
	);
};
