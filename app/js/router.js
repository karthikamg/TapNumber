import { StackNavigator } from 'react-navigation';

import HomePage from './containers/HomePage';
import LevelPage from './containers/LevelPage';
import HighestScorePage from './containers/HighestScorePage';
import HelpPage from './containers/HelpPage';
import PlayGamePage from './containers/PlayGamePage';

const AppNavigator = StackNavigator ({
    Home: {screen: HomePage},
    HighestScore: {screen: HighestScorePage},
    Level: {screen: LevelPage},
    Help: {screen: HelpPage},
    PlayGame: {screen: PlayGamePage}
});

export default AppNavigator;