import { ScrollView } from 'react-native';
import { useTheme } from '@blizzard-ui/theme';

import { Tile, Header, Container } from './components';

export const Home = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<ScrollView contentContainerStyle={{ backgroundColor: theme.colors.white }}>
			<Header
				bg={theme.colors.white}
				color={theme.colors.dark}
				title="Default Color Palette"
			/>
			<Container bg={theme.colors.white}>
				<Tile bg="primary" color={theme.colors.white} />
				<Tile bg="primarySubtle" color={theme.colors.dark} />
				<Tile bg="secondary" color={theme.colors.dark} />
				<Tile bg="secondarySubtle" color={theme.colors.dark} />
				<Tile bg="info" color={theme.colors.white} />
				<Tile bg="infoSubtle" color={theme.colors.dark} />
				<Tile bg="warning" color={theme.colors.white} />
				<Tile bg="warningSubtle" color={theme.colors.dark} />
				<Tile bg="error" color={theme.colors.white} />
				<Tile bg="errorSubtle" color={theme.colors.dark} />
				<Tile bg="success" color={theme.colors.white} />
				<Tile bg="successSubtle" color={theme.colors.dark} />
				<Tile bg="tertiary" color={theme.colors.white} />
				<Tile bg="tertiarySubtle" color={theme.colors.dark} />
				<Tile bg="surface" color={theme.colors.white} />
				<Tile bg="surfaceSubtle" color={theme.colors.dark} />
				<Tile bg="neutral" color={theme.colors.white} />
				<Tile bg="neutralSubtle" color={theme.colors.dark} />
				<Tile bg="body" color={theme.colors.dark} />
				<Tile bg="bodySubtle" color={theme.colors.dark} />
				<Tile bg="light" color={theme.colors.dark} />
				<Tile bg="lightSubtle" color={theme.colors.dark} />
				<Tile bg="dark" color={theme.colors.white} />
				<Tile bg="darkSubtle" color={theme.colors.dark} />
				<Tile bg="transparent" color={theme.colors.dark} />
				<Tile bg="white" color={theme.colors.dark} />
				<Tile bg="black" color={theme.colors.white} />
			</Container>
		</ScrollView>
	);
};
