import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

const instructions = Platform.select({
  ios: 'Hello iOS World',
  android: 'Hello Andoid World',
});

export default function Splash(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        {instructions}
      </Text>
      <Button
        title="Go to Details"
        onPress={props.onpress}
      />
      <LoginButton
        onLoginFinished={() => ({})}
        onLogoutFinished={() => ({})}
        defaultAudience='everyone'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

