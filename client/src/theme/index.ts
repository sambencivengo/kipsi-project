import { DeepPartial, extendTheme, ThemeConfig, Theme } from '@chakra-ui/react';

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
	...config,
	components: {
		Button: {
			variants: {
				solid: () => ({
					bg: colors.orange,
					color: colors.white,
					_hover: {
						bg: colors.yellow,
					},
				}),
			},
		},
	},
	styles: {
		global: {
			body: {
				bgColor: colors.lightBlue,
			},
			'::-webkit-scrollbar': { display: 'none' },
		},
	},
	colors,
} as unknown as DeepPartial<Theme>);
