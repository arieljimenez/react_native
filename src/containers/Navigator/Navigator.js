import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeContainer from '~/containers/Home/HomeContainer'
import DetailsContainer from '~/containers/Details/DetailsContainer'
import SplashContainer from '~/containers/Splash/SplashContainer'


export default Navigator = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Splash: {
      screen: SplashContainer,
    },
    Details: {
      screen: DetailsContainer,
    },
  },
  {
    initialRouteName: "Home",
  },
);
