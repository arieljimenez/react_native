import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'
import PropTypes from 'prop-types'

export default function Settings(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  )
}
