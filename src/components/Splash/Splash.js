import React, { Component } from 'react'
import { StyleSheet, Image, Button, Text, View, Dimensions } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'
import PropTypes from 'prop-types'
const { height, width } = Dimensions.get('window')

import { Styles, colors, fontSizes } from '~/styles'


export default function Splash(props) {
  return (
    <View style={Styles.container}>
      <View>
        <Image style={style.image} source={require('../../images/logo.png')} />
        <Text style={style.slogan}>iPomodoro</Text>
      </View>
      <View style={style.loginContainer}>
        <LoginButton
          style={{
            height: 30,
            width: 190,
            marginBottom: 15,
          }}
          onLoginFinished={props.onLoginFinished} />
        <Text style={style.assuranteText}>
          Dont worry, we will give good use to your data >:)
        </Text>
      </View>
    </View>
  )
}


Splash.propTypes = {
  onLoginFinished: PropTypes.func.isRequired,
}


const style = StyleSheet.create({
  slogan: {
    color: colors.blue,
    fontSize: fontSizes.primary,
    margin: 20,
    textAlign: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: height * .4 > 300 ? 300 : height * .4,
  },
  loginContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  assuranteText: {
    color: colors.secondary,
    fontSize: fontSizes.secondary,
    textAlign: 'center',
  }
});
