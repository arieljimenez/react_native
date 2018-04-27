import React, { Component } from 'react';
import { View, StyleSheet, Text, DrawerLayoutAndroid } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import { colors } from '~/styles'
import Drawer from './Drawer'

import HomeContainer from '~/containers/Home/HomeContainer'
import Leaderboard from '~/containers/Leaderboard/LeaderboardContainer'

// export default function TabsNavigation(props) {
//   return (
//     <DrawerLayoutAndroid
//       drawerWidth={20}
//       renderNavigationView={() => (
//         <Drawer />
//       )}>

//     </DrawerLayoutAndroid>
//   )
// }

export default TabsNavigation = DrawerNavigator(
  { //RouteConfigs
    Home: { screen: HomeContainer },
    Leaderboard: { screen: Leaderboard },
  },
  { // DrawerNavigatorConfig
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerWidth: 250,
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: colors.tabPrimary,
      activeBackgroundColor: colors.primary,
      inactiveTintColor: colors.secondary,
      style: {
        marginVertical: 0,
      }
    },
  }
)
