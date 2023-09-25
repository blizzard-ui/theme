export declare type ColorSchemeType = 'light' | 'dark';

export declare type ColorSchemeName = 'system' | ColorSchemeType;

export declare type ColorValue = string | (symbol & { __TYPE__: 'Color' });

declare type ColorWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

declare type DefaultColorWeightList = Record<ColorWeight, ColorValue>;

declare type ColorPaletteKeyName =
	| 'info'
	| 'dark'
	| 'body'
	| 'white'
	| 'black'
	| 'error'
	| 'light'
	| 'primary'
	| 'neutral'
	| 'surface'
	| 'success'
	| 'warning'
	| 'tertiary'
	| 'secondary'
	| 'infoSubtle'
	| 'darkSubtle'
	| 'bodySubtle'
	| 'transparent'
	| 'errorSubtle'
	| 'lightSubtle'
	| 'primarySubtle'
	| 'neutralSubtle'
	| 'surfaceSubtle'
	| 'successSubtle'
	| 'warningSubtle'
	| 'tertiarySubtle'
	| 'secondarySubtle';

export declare type DefaultColorPalette = Record<ColorPaletteKeyName, ColorValue>;

export declare type DefaultThemePaletteType = Record<ColorSchemeType, DefaultColorPalette>;

export declare type ColorPalette = Partial<Record<ColorPaletteKeyName, ColorValue>>;

export declare type ThemePalette = Partial<Record<ColorSchemeType, ColorPalette>>;

export declare interface DefaultThemeType {
	colors: DefaultColorPalette;
}

export declare interface ThemeProviderValue {
	theme: DefaultThemeType;
	themeScheme: ColorSchemeName;
	changeThemeScheme: (newColorScheme: ColorSchemeName) => void;
}
