import React from 'react';
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Collapse,
	Button,
	HStack,
	Box,
	useDisclosure,
	ChakraProps,
} from '@chakra-ui/react';

export interface ErrorAlertProps {
	header: string;
	text: string | JSX.Element[];
	details?: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps & ChakraProps> = ({
	header,
	text,
	details,
	...props
}) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Alert status="error" display="block" borderRadius="md" {...props}>
			<HStack>
				<AlertIcon />
				<AlertTitle mr={2}>{header}</AlertTitle>
				<AlertDescription>{text}</AlertDescription>
				{details ? (
					<Button
						variant="ghost"
						size="xs"
						onClick={onToggle}
						aria-label="Toggle details"
					>
						Details
					</Button>
				) : null}
			</HStack>
			<Collapse in={isOpen} animateOpacity>
				<Box pt={4}>
					<AlertDescription as="pre">{details}</AlertDescription>
				</Box>
			</Collapse>
		</Alert>
	);
};
