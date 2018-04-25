import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '~/styles'

export default class DetailsContainer extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Details View
        </Text>
      </View>
    );
  }
}
