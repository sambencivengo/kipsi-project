import { Box, Center, Text, Flex, IconButton, Heading } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import { colors } from '../theme';
interface HeaderProps {
	isMobile: boolean;
	toggleSideBar: () => void;
}

export const Header = ({ isMobile, toggleSideBar }: HeaderProps) => {
	return (
		<Flex bgColor={colors.navy} p={5}>
			<Box flex="1">
				{isMobile && (
					<IconButton
						icon={<MdMenu />}
						aria-label="Menu Button"
						onClick={toggleSideBar}
					/>
				)}
			</Box>
			<Center>
				<Heading>Kipsi Projects</Heading>
			</Center>
			<Box flex="1" />
		</Flex>
	);
};
