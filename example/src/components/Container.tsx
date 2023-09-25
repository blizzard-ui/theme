import { View } from 'react-native';
import type { PropsWithChildren } from 'react';

import type { ColorValue } from '@blizzard-ui/theme';

interface ContainerProps {
	bg: ColorValue;
}

export const Container = ({ children, bg }: PropsWithChildren<ContainerProps>): JSX.Element => (
	<View
		style={{
			flex: 1,
			paddingHorizontal: '5%',
			paddingBottom: '5%',
			flexWrap: 'wrap',
			backgroundColor: bg,
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: 'space-between',
		}}
	>
		{children}
	</View>
);
