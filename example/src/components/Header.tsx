import { Text, View } from 'react-native';
import type { ColorValue } from '@blizzard-ui/theme';

interface HeaderProps {
	title: string;
	color: ColorValue;
}

export const Header = ({ title, color }: HeaderProps): JSX.Element => (
	<View style={{ marginTop: '7%', marginBottom: '5%' }}>
		<Text
			style={{
				color,
				fontSize: 32,
				fontWeight: 'bold',
				textAlign: 'center',
				textTransform: 'capitalize',
			}}
		>
			{title}
		</Text>
	</View>
);
