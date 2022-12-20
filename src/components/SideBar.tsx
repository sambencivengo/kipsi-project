import { Box } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../theme';

interface SideBarProps {
	isMobile: boolean;
}
export const Sidebar = ({ isMobile }: SideBarProps) =>
	isMobile ? (
		<Box
			position="fixed"
			left={0}
			p={5}
			w="200px"
			top={0}
			h="100%"
			bgColor={colors.greyBlue}
		>
			This is a mobile sidebar
		</Box>
	) : (
		<Box>Desktop</Box>
	);
