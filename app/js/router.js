import { StackNavigator } from 'react-navigation';

import HomePage from './containers/HomePage';
import LevelPage from './containers/LevelPage';
import HighestScorePage from './containers/HighestScorePage';
import HelpPage from './containers/HelpPage';

const AppNavigator = StackNavigator ({
    Home: {screen: HomePage},
    HighestScore: {screen: HighestScorePage},
    Level: {screen: LevelPage},
    Help: {screen: HelpPage}
});

export default AppNavigator;