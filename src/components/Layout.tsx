import { Center, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { Sidebar } from './SideBar';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<>
			<Sidebar isMobile={isMobile ?? false} />
			<Center>
				<main>{children}</main>
			</Center>
		</>
	);
}
