import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { LoginButton } from 'react-native-fbsdk';
import { Styles } from '~/Styles'

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

