import React, { Component } from 'react';
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { HomeContainer, SplashContainer } from '~/containers'
import { PreSplash } from '~/components'
import { firebaseAuth } from '~/config/constants'
import { onAuthChange } from '~/redux/modules/authentication'
class AppContainer extends Component {

  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChange(user)))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <SplashContainer
            isAuthed={this.props.isAuthed}
          />}
      </View>
    )
  }
}

AppContainer.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  isAuthed: PropTypes.bool.isRequired,
}

function mapStateToProps({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
  }
}

AppContainer = connect(
  mapStateToProps
)(AppContainer)

export default AppContainer;