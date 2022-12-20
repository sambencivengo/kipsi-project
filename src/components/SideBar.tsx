import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { colors } from '../theme';

interface SideBarProps {
	isMobile: boolean;
	showSideBar: boolean;
	toggleSideBar: () => void;
}
export const Sidebar = ({
	isMobile,
	showSideBar,
	toggleSideBar,
}: SideBarProps) => {
	const sideBarColor = colors.navy;
	const NavigationContent = () => (
		<VStack gap={4}>
			<Button width="100%">Projects</Button>
			<Button width="100%">Expenses</Button>
			<Button width="100%">Extra</Button>
		</VStack>
	);

	return isMobile ? (
		// TODO: Drawer with button activator

		<Drawer isOpen={showSideBar} placement="left" onClose={toggleSideBar}>
			<DrawerOverlay>
				<DrawerContent bgColor={sideBarColor}>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<NavigationContent />
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	) : (
		<Box
			position="fixed"
			left={0}
			p={5}
			w="300px"
			top={0}
			h="100%"
			bgColor={sideBarColor}
			pt={10}
		>
			<NavigationContent />
		</Box>
	);
};
