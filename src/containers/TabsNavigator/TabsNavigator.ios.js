import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { Splash } from '~/components'
import { colors } from '~/styles'

import HomeContainer from '~/containers/Home/HomeContainer'
import SettingsContainer from '~/containers/Settings/SettingsContainer'
import LeaderboardContainer from '~/containers/Leaderboard/LeaderboardContainer'


export default TabsNavigator = TabNavigator(
  {
    Home: { screen: HomeContainer },
    Leaderboard: { screen: LeaderboardContainer },
    Settings: { screen: SettingsContainer },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Leaderboard') {
          iconName = `ios-trophy${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} size={35} color={colors.blue} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
);
