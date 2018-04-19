import React, { Component } from 'react';
import { Splash } from '~/components';

export default class HomeContainer extends Component {
  render() {
    return (
      <Splash
        onpress={() => this.props.navigation.navigate('Details')}
      />
    )
  }
}
