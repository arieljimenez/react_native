import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';

import { Splash, PreSplash } from '~/components'
import { TabNavigator } from '~/containers'

class SplashContainer extends Component {
  handleLoginFinished = (error, result) => {
    if (error) {
      console.warn("Error in handleLoginFinished: ", error)
    } else if (result.isCancelled === true) {
      console.warn("The user cancelled ")
    } else {
      console.warn("Login successfull")
    }
  }

  render() {
    return (
      <View>
        {this.props.isAuthenticating === false
          ? <Splash
            onLoginFinished={this.handleLoginFinished}
            onpress={() => this.props.navigation.navigate('Details')} />
          : <PreSplash />}
      </View>
    )
  }
}

function mapStateToProps({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating,
  }
}

SplashContainer = connect(
  mapStateToProps
)(SplashContainer)

export default SplashContainer;
