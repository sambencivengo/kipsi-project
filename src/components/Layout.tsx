import { Center, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { Header } from './Header';
import { Sidebar } from './SideBar';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const [showSideBar, setShowSideBar] = React.useState(false);
	const isMobile = useBreakpointValue({ base: true, lg: false });
	const toggleSideBar = () => setShowSideBar(!showSideBar);

	return (
		<>
			<Sidebar
				isMobile={isMobile ?? false}
				showSideBar={showSideBar}
				toggleSideBar={toggleSideBar}
			/>
			<Header
				isMobile={isMobile ?? false}
				toggleSideBar={toggleSideBar}
			/>
			<Center>
				<main>{children}</main>
			</Center>
		</>
	);
}
