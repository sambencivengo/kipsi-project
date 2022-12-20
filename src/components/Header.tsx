import { Box, Center, Flex, IconButton, Heading } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import { colors } from '../theme';
interface HeaderProps {
	isMobile: boolean;
	toggleSideBar: () => void;
}

export const Header = ({ isMobile, toggleSideBar }: HeaderProps) => {
	return (
		<Flex bgColor={colors.navy} justifyContent="space-between" h="80px">
			<Box p={5}>
				{isMobile && (
					<IconButton
						icon={<MdMenu />}
						aria-label="Menu Button"
						onClick={toggleSideBar}
					/>
				)}
			</Box>
			<Center>
				<Heading>Kipsi Project</Heading>
			</Center>
			<Box />
		</Flex>
	);
};
