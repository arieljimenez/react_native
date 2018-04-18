import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginButton } from 'react-native-fbsdk';

import { HomeView, DetailsView } from '~/Views'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeView,
    },
    Details: {
      screen: DetailsView,
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
