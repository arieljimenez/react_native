import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Home } from '~/components'

export default class HomeContainer extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Home />
      </View>
    )
  }
}
