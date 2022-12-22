import { Box, Center, Flex, IconButton, Heading } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import { colors } from '../theme';
interface HeaderProps {
	isMobile: boolean;
	toggleSideBar: () => void;
}

export const Header = ({ isMobile, toggleSideBar }: HeaderProps) => {
	return (
		<Flex
			bgColor={colors.darkBlue}
			justifyContent={'space-between'}
			h="80px"
		>
			<Box width={10} p={5}>
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
			<Box width={10} />
		</Flex>
	);
};
