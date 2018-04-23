import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux'

import { Splash, PreSplash, FooterTabs } from '~/components'
import { SplashContainer, FooterTabsContainer } from '~/containers'


class AppContainer extends Component {
  static propTypes = {
    // isAuthenticating: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.isAuthenticating === false
          ? <SplashContainer onpress={() => this.props.navigation.navigate('Details')} />
          : <PreSplash />
        }
        <FooterTabsContainer />
      </View>
    )
  }
}

function mapStateToProps({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating,
  }
}

AppContainer = connect(
  mapStateToProps
)(AppContainer)

export default AppContainer;
