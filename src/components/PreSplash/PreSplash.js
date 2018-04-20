import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native'
import PropTypes from 'prop-types'

import { Styles } from '~/styles'

export default class PreSplash extends Component {
  state = {
    rotation: new Animated.Value(0),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(this.state.rotation, { toValue: -1, duration: 150 }),
        Animated.timing(this.state.rotation, { toValue: 1, duration: 150 }),
        Animated.timing(this.state.rotation, { toValue: 0, duration: 250 }),
      ]).start()
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  getTransform() {
    return {
      transform: [
        {
          rotate: this.state.rotation.interpolate({
            inputRange: [-1, 1],
            outputRange: ['-20deg', '20deg'],
          })
        }
      ]
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Animated.Image
          style={[Styles.image, this.getTransform()]}
          source={require('../../images/logo.png')}
        />
      </View>
    )
  }
}
