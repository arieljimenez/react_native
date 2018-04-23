import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { FooterTabs } from '~/components'
import { setFooterTab } from '~/redux/modules/activeFooterTab'

class FooterTabsContainer extends Component {
  render() {
    return (
      <View>
        <FooterTabs
          activeFooterTab={this.props.activeFooterTab}
          onTabSelect={(tab) => this.props.dispatch(activeFooterTab(tab))}
        />
      </View>
    )
  }
}

FooterTabsContainer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps({ activeFooterTab }) {
  return {
    activeFooterTab
  }
}


// const styles = StyleSheet.create({

// });


FooterTabsContainer = connect(
  mapStateToProps
)(FooterTabsContainer)

export default FooterTabsContainer;
