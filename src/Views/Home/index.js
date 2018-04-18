import React, { Component } from 'react';
import {
  Platform,
  Button,
  Text,
  View
} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { Styles } from '~/Styles'

const instructions = Platform.select({
  ios: 'Hello iOS World',
  android: 'Hello Andoid World',
});

export default class HomeView extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          {instructions}
        </Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <LoginButton
          onLoginFinished={() => ({})}
          onLogoutFinished={() => ({})}
          defaultAudience='everyone'
        />
      </View>
    )
  }
}