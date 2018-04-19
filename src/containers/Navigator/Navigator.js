import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeContainer from '~/containers/Home/HomeContainer';
import DetailsContainer from '~/containers/Details/DetailsContainer'

export default Navigator = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Details: {
      screen: DetailsContainer,
    },
  },
  {
    initialRouteName: "Home",
  }
);