import React from 'react';
import { StackNavigator } from 'react-navigation';

import SplashContainer from '~/containers/Splash/SplashContainer';
import DetailsContainer from '~/containers/Details/DetailsContainer'
import AppContainer from '~/containers/App/AppContainer'

export default Navigator = StackNavigator(
  {
    App: {
      screen: AppContainer,
    },
    Splash: {
      screen: SplashContainer,
    },
    Details: {
      screen: DetailsContainer,
    },
  },
  {
    initialRouteName: "App",
  }
);