import React, { Component } from 'react';
import { View } from 'react-native';

import { SplashContainer } from '~/containers'

export default class AppContainer extends Component {
  render() {
    return (
      <View>
        <SplashContainer />
      </View>
    )
  }
}