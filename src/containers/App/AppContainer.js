import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Splash, PreSplash } from '~/components'
import { SplashContainer } from '~/containers'

export default class AppContainer extends Component {

  static propTypes = {
    // isAutenticating: PropTypes.bool.isRequired,
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.isAutenticating === true
          ? <PreSplash />
          : <SplashContainer onpress={() => this.props.navigation.navigate('Details')} />
        }
      </View>
    )
  }
}
