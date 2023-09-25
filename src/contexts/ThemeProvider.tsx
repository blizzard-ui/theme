import { useColorScheme } from 'react-native';
import type { PropsWithChildren } from 'react';
import { createContext, useCallback, useContext, useState } from 'react';

import { themePalette } from '../styles/palette';
import { generateColorPalette } from '../helpers/palette';
import type {
	ColorSchemeName,
	ColorSchemeType,
	DefaultThemeType,
	ThemePalette,
	ThemeProviderValue,
} from '../types/colors';

const ThemeContext = createContext<ThemeProviderValue>({
	themeScheme: 'light',
	changeThemeScheme: () => {},
	theme: { colors: themePalette.light },
});

export const ThemeProvider = ({
	children,
	userPalette,
}: PropsWithChildren<{ userPalette?: ThemePalette }>): JSX.Element => {
	const { Provider } = ThemeContext;
	const systemThemeScheme = useColorScheme();

	const [themeScheme, setThemeScheme] = useState<ColorSchemeName>('light');

	const colorScheme: ColorSchemeType =
		themeScheme === 'system' ? systemThemeScheme ?? 'light' : themeScheme ?? 'light';

	const theme: DefaultThemeType = {
		colors: generateColorPalette(userPalette ?? {}, colorScheme),
	};

	const changeThemeScheme = useCallback((newColorScheme: ColorSchemeName) => {
		setThemeScheme(() => newColorScheme);
	}, []);

	const themeContextValue: ThemeProviderValue = { theme, themeScheme, changeThemeScheme };

	return <Provider value={themeContextValue}>{children}</Provider>;
};

export const useTheme = (): ThemeProviderValue => useContext(ThemeContext);
