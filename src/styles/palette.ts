import type { DefaultColorPalette, DefaultThemePaletteType } from '../types/colors';
import {
	black,
	blue,
	cyan,
	gray,
	green,
	indigo,
	orange,
	red,
	teal,
	transparent,
	white,
	yellow,
} from './colors';

const lightTheme: DefaultColorPalette = {
	white,
	black,
	transparent,
	primary: blue[500],
	primarySubtle: blue[300],
	secondary: gray[500],
	secondarySubtle: gray[300],
	success: green[500],
	successSubtle: green[200],
	warning: yellow[500],
	warningSubtle: yellow[200],
	error: red[500],
	errorSubtle: red[200],
	info: cyan[500],
	infoSubtle: cyan[200],
	body: gray[200],
	bodySubtle: gray[100],
	dark: gray[900],
	darkSubtle: gray[700],
	light: blue[200],
	lightSubtle: blue[100],
	tertiary: indigo[500],
	tertiarySubtle: indigo[200],
	surface: orange[500],
	surfaceSubtle: orange[200],
	neutral: teal[500],
	neutralSubtle: teal[200],
};

const darkTheme: DefaultColorPalette = {
	...lightTheme,
	white: black,
	black: white,
	body: gray[900],
	bodySubtle: gray[800],
	dark: gray[200],
	darkSubtle: gray[100],
	light: blue[900],
	lightSubtle: blue[800],
};

export const themePalette: DefaultThemePaletteType = {
	light: lightTheme,
	dark: darkTheme,
};
