import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { Splash } from '~/components'
import { handleAuthWithFirebase } from '~/redux/modules/authentication'

class SplashContainer extends Component {
  handleLoginFinished = (error, result) => {
    if (error) {
      console.warn("Error in handleLoginFinished: ", error)
    } else if (result.isCancelled === true) {
      console.warn("The user cancelled ")
    } else {
      this.props.dispatch(handleAuthWithFirebase())
    }
  }

  render() {
    return (
      // <View style={this.props.isAuthed === true ? {} : { flex: 1 }}>  {/* -f */}
      //   {this.props.isAuthed === true
      //     ? <Navigator />
      //     : <Splash onLoginFinished={this.handleLoginFinished} />
      //   }
      // </View>
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    )
  }
}

export default connect()(SplashContainer)
