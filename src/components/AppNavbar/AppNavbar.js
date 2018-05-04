import React from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'
import NavigationBar from 'react-native-navbar'

import { colors } from '~/styles'
import { Gear } from '~/components'


export default function AppNavbar(props) {
  let optionalAttrs = {}

  props.leftButton && (optionalAttrs.leftButton = React.cloneElement(props.leftButton,
    {
      style: { marginLeft: 10, justifyContent: 'center' }
    }
  ))

  props.rightButton && (optionalAttrs.rightButton = React.cloneElement(props.rightButton,
    {
      style: { marginRight: 10, justifyContent: 'center' }
    }
  ))
  // change this from react-native-navigation later
  return (
    <Gear
      {...optionalAttrs}
      style={Platform.OS === 'android' ? { marginTop: 20, marginBottom: 20 } : null}
      tintColor={colors.tabPrimary}
      title={{ title: props.title }} />
  )
}


AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  rightButton: PropTypes.element,
  leftButton: PropTypes.element,
}
