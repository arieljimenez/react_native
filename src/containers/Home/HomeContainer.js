import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Home, AppNavbar, Gear } from '~/components'
// import { TabsNavigator } from '~/containers'

export default class HomeContainer extends React.Component {
  render() {
    console.warn('dd')
    return (
      <View style={{ flex: 1 }}>
        <AppNavbar
          title='Home'
          rightButton={<Gear onPress={() => console.log('GEAR!')} />}
        />
      </View>
    )
  }
}
