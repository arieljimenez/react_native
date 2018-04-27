import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, fontSizes } from '~/styles'

DrawerTab.proptypes = {
  title: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  iconName: PropTypes.string.isRequired
}

export default function DrawerTab(props) {
  const outline = props.selected === true ? '' : '-outline'
  const color = props.selected === true ? props.activeColor : props.inactiveColor
  return (
    <TouchableOpacity onPress={props.onTabSelect} style={style.container}>
      <Icon
        name={props.iconName + outline}
        size={25}
        color={color}
      />
      <Text style={[{ color }, style.titleText]}>{props.title}</Text>
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: fontSizes.secondary,
    marginLeft: 10,
  }
})