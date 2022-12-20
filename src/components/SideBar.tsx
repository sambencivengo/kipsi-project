import {
	Box,
	Button,
	ButtonGroup,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
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
	const router = useRouter();
	const sideBarColor = colors.navy;
	const NavigationContent = () => (
		<VStack>
			<Button
				onClick={() => router.push('/projects')}
				size={'lg'}
				borderRadius={0}
				h={'50px'}
				width="100%"
			>
				Projects
			</Button>

			<Button
				onClick={() => router.push('/expenses')}
				size={'lg'}
				borderRadius={0}
				h={'50px'}
				width="100%"
			>
				Expenses
			</Button>
		</VStack>
	);

	return isMobile ? (
		<Drawer
			size={'xs'}
			isOpen={showSideBar}
			placement="left"
			onClose={toggleSideBar}
		>
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
			w="300px"
			top={'80px'}
			h="100%"
			bgColor={sideBarColor}
		>
			<NavigationContent />
		</Box>
	);
};
