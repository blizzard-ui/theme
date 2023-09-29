import { StatusBar, Text, View } from 'react-native';
import type { ColorValue } from '@blizzard-ui/theme';

interface HeaderProps {
	title: string;
	bg: ColorValue;
	color: ColorValue;
}

export const Header = ({ title, color, bg }: HeaderProps): JSX.Element => (
	<>
		<StatusBar animated backgroundColor={bg} />
		<View style={{ paddingTop: '7%', paddingBottom: '5%', backgroundColor: bg }}>
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
	</>
);
