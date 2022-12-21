import { DeepPartial, extendTheme, ThemeConfig, Theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/styled-system/color-mode
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

export const colors = {
	lightBlue: '#8ECAE6',
	blue: '#219EBC',
	darkBlue: '#023047',
	yellow: '#FFB703',
	orange: '#FB8500',
	white: '#FFFFFF',
	red: '#bf0a30',
	warning: '#ffd700',
};

export const theme = extendTheme({
	config,
	components: {
		// Button: {
		// 	baseStyle: {{colors.yellow},
		// },
	},
	styles: {
		global: (props) => ({
			body: {
				color: mode(colors.blue, colors.darkBlue)(props),
				backgroundColor: mode(colors.blue, colors.darkBlue)(props),
			},
			'::-webkit-scrollbar': { display: 'none' },
			'#hubspot-messages-iframe-container': {
				colorScheme: 'auto',
			},
		}),
	},
	colors,
} as DeepPartial<Theme>);
