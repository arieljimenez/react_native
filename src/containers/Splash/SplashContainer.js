import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'

export default class SplashContainer extends Component {
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
      <Splash
        onLoginFinished={this.handleLoginFinished}
        onpress={() => this.props.navigation.navigate('Details')}
      />
    )
  }
}
