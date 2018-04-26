import React, { Component } from 'react';
import { View, StyleSheet, Text, DrawerLayoutAndroid } from 'react-native'

import Drawer from './Drawer'

export default function TabsNavigation(props) {
  return (
    <DrawerLayoutAndroid
      drawerWidth={290}
      renderNavigationView={() => (
        <Drawer />
      )}>

    </DrawerLayoutAndroid>
  )
}
