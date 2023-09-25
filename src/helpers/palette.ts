import { themePalette } from '../styles/palette';
import type { ColorSchemeType, DefaultColorPalette, ThemePalette } from '../types/colors';

/** Generate Color Palette from User Defined Palette
 *
 * @param theme User describe theme palette
 * @param themeScheme Current color scheme type
 * @returns Color Palette */
export const generateColorPalette = (
	theme: ThemePalette,
	themeScheme: ColorSchemeType
): DefaultColorPalette => {
	const userPalette: DefaultColorPalette = {
		info: theme[themeScheme]?.info ?? themePalette[themeScheme].info,
		body: theme[themeScheme]?.body ?? themePalette[themeScheme].body,
		dark: theme[themeScheme]?.dark ?? themePalette[themeScheme].dark,
		white: theme[themeScheme]?.white ?? themePalette[themeScheme].white,
		black: theme[themeScheme]?.black ?? themePalette[themeScheme].black,
		error: theme[themeScheme]?.error ?? themePalette[themeScheme].error,
		light: theme[themeScheme]?.light ?? themePalette[themeScheme].light,
		primary: theme[themeScheme]?.primary ?? themePalette[themeScheme].primary,
		surface: theme[themeScheme]?.surface ?? themePalette[themeScheme].surface,
		neutral: theme[themeScheme]?.neutral ?? themePalette[themeScheme].neutral,
		success: theme[themeScheme]?.success ?? themePalette[themeScheme].success,
		warning: theme[themeScheme]?.warning ?? themePalette[themeScheme].warning,
		tertiary: theme[themeScheme]?.tertiary ?? themePalette[themeScheme].tertiary,
		secondary: theme[themeScheme]?.secondary ?? themePalette[themeScheme].secondary,
		infoSubtle: theme[themeScheme]?.infoSubtle ?? themePalette[themeScheme].infoSubtle,
		bodySubtle: theme[themeScheme]?.bodySubtle ?? themePalette[themeScheme].bodySubtle,
		darkSubtle: theme[themeScheme]?.darkSubtle ?? themePalette[themeScheme].darkSubtle,
		transparent: theme[themeScheme]?.transparent ?? themePalette[themeScheme].transparent,
		errorSubtle: theme[themeScheme]?.errorSubtle ?? themePalette[themeScheme].errorSubtle,
		lightSubtle: theme[themeScheme]?.lightSubtle ?? themePalette[themeScheme].lightSubtle,
		primarySubtle: theme[themeScheme]?.primarySubtle ?? themePalette[themeScheme].primarySubtle,
		surfaceSubtle: theme[themeScheme]?.surfaceSubtle ?? themePalette[themeScheme].surfaceSubtle,
		neutralSubtle: theme[themeScheme]?.neutralSubtle ?? themePalette[themeScheme].neutralSubtle,
		successSubtle: theme[themeScheme]?.successSubtle ?? themePalette[themeScheme].successSubtle,
		warningSubtle: theme[themeScheme]?.warningSubtle ?? themePalette[themeScheme].warningSubtle,
		tertiarySubtle:
			theme[themeScheme]?.tertiarySubtle ?? themePalette[themeScheme].tertiarySubtle,
		secondarySubtle:
			theme[themeScheme]?.secondarySubtle ?? themePalette[themeScheme].secondarySubtle,
	};

	return userPalette;
};
