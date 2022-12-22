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
	const sideBarColor = colors.darkBlue;
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
			<Button
				onClick={() => router.push('/create-project')}
				size={'lg'}
				borderRadius={0}
				h={'50px'}
				width="100%"
			>
				New Project
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
					<DrawerHeader>Kipsi Project</DrawerHeader>
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
			pt="80px"
			w="300px"
			h="100%"
			bgColor={sideBarColor}
		>
			<NavigationContent />
		</Box>
	);
};
