import { Box, Heading, Text } from '@chakra-ui/react';
import { colors } from '../theme';

export default function Home() {
	return (
		<Box maxW={'900px'} bgColor={colors.darkBlue} p={10} borderRadius={10}>
			<Heading>Xiaolong,</Heading>
			<Text mt={2}>
				I had a great time speaking with you on Tuesday and really
				enjoyed building this MVP for my application. I hope you enjoy
				playing around with it and I look forward to speaking with you
				again about the opportunity to work for you.
			</Text>
			<Text mt={2}>
				I hope you and your family have a wonderful holiday!
			</Text>
			<Text mt={2}>Best,</Text>
			<Text>Sam Bencivengo</Text>
		</Box>
	);
}
