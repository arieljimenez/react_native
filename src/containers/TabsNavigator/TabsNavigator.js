import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { Splash } from '~/components'
import SplashContainer from '~/containers/Splash/SplashContainer'
import DetailsContainer from '~/containers/Details/DetailsContainer'
import SettingsContainer from '~/containers/Settings/SettingsContainer'
import { colors } from '~/styles'

const TabsNavigator = TabNavigator(
  {
    Home: { screen: SplashContainer },
    Details: { screen: DetailsContainer },
    Settings: { screen: SettingsContainer },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Details') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} size={25} color={colors.blue} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);

export default TabsNavigator;
