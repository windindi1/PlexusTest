import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ChannelDetails from '../screens/ChannelDetails';
import VideoPlayer from '../screens/VideoPlayer';

const RootStack = createStackNavigator(
  {
    ChannelDetails: {
      screen: ChannelDetails,
      navigationOptions: {
        title: 'PlexusMD Learning',
      },
    },
    VideoPlayer: {
      screen: VideoPlayer,
      navigationOptions: {
        // title: 'TestTestTestTest',
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: 'HelveticaNeue-Medium',
          left: -30,
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {height: 40},
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: 'HelveticaNeue-Medium',
      },
    },
  },
);

const App = createAppContainer(RootStack);

export default App;
