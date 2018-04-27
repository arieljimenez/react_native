import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import DrawerHeader from './DrawerHeader'
import DrawerTab from './DrawerTab'

export default function Drawer(props) {
  console.warn(props)

  return (
    <View>
      <DrawerHeader />
      <DrawerTab
        title='Home'
        navigation={props.navigation}
        selected={props.activeItemKey === 'Home'}
        onTabSelect={() => props.navigation.navigate('Home')}
        activeColor={props.activeTintColor}
        inactiveColor={props.inactiveTintColor}
        activeBgColor={props.actoveBackgroundColor}
        iconName='ios-home' />

      <DrawerTab
        title='Leaderboard'
        navigation={props.navigation}
        selected={props.activeItemKey === 'Leaderboard'}
        onTabSelect={() => props.navigation.navigate('Leaderboard')}
        activeColor={props.activeTintColor}
        inactiveColor={props.inactiveTintColor}
        activeBgColor={props.actoveBackgroundColor}
        iconName='ios-trophy' />
    </View>
  )
}


