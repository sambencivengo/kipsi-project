import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { colors } from '../../theme';

interface ProjectDetailsAndExpensesProps {}

export const ProjectDetailsAndExpenses: React.FC<
	ProjectDetailsAndExpensesProps
> = ({}) => {
	const isMobile = useBreakpointValue({ base: true, lg: false });

	const router = useRouter();
	const { projectId } = router.query;

	return (
		<Box maxW={isMobile ? undefined : '900px'} bgColor={colors.darkBlue}>
			{projectId}
		</Box>
	);
};
