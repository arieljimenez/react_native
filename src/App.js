/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { LoginButton } from 'react-native-fbsdk';

const instructions = Platform.select({
  ios: 'Hello iOS World',
  android: 'Hello Andoid World',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.iwelcome}>
          {instructions}
        </Text>
        <LoginButton
          onLoginFinished={() => ({})}
          onLogoutFinished={() => ({})}
          defaultAudience='everyone'
        />
      </View>
    );
  }
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
