import { Pressable, Text, View } from 'react-native';

import { useTheme } from '@blizzard-ui/theme';
import { type ColorValue, type DefaultColorPalette } from '@blizzard-ui/theme';

interface TileProps {
	color: ColorValue;
	bg: keyof DefaultColorPalette;
}

export const Tile = ({ bg, color }: TileProps): JSX.Element => {
	const { theme } = useTheme();

	return (
		<View
			style={{
				marginTop: '4%',
				borderRadius: 20,
				overflow: 'hidden',
			}}
		>
			<Pressable
				android_ripple={{ color: theme.colors.black }}
				style={{
					width: 170,
					height: 60,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: theme.colors[bg] ?? theme.colors.body,
				}}
			>
				<Text
					style={{
						color,
						fontSize: 18,
						textAlign: 'center',
						textTransform: 'capitalize',
					}}
				>
					{bg?.replace('Subtle', ' Subtle')}
				</Text>
			</Pressable>
		</View>
	);
};
