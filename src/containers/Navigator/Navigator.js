import React from 'react';
import { StackNavigator } from 'react-navigation';

import AppContainer from '~/containers/App/AppContainer'
import DetailsContainer from '~/containers/Details/DetailsContainer'
import SplashContainer from '~/containers/Splash/SplashContainer'

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
)