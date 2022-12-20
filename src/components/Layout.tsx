import { Center } from '@chakra-ui/react';
import React from 'react';
import { Sidebar } from './SideBar';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Sidebar />
			<Center>
				<main>{children}</main>
			</Center>
		</>
	);
}
