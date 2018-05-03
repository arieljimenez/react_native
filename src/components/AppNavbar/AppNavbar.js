import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import NavigationBar from 'react-native-navbar'


export default function AppNavbar(props) {
  return (
    <NavigationBar title={{ title: props.title }} />
  )
}


AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  rightButton: PropTypes.element,
  leftButton: PropTypes.element,
}
