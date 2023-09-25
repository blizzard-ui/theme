import { ThemeProvider } from '@blizzard-ui/theme';
import { Home } from './Home';

const App = (): JSX.Element => (
	<ThemeProvider>
		<Home />
	</ThemeProvider>
);

export default App;
