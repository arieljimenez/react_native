import React from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { TabsNavigator, SplashContainer } from '~/containers'
import * as reducers from '~/redux'
import { composeWithDevTools } from 'remote-redux-devtools'

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(thunk),
  )
)

export default class App extends React.Component {
  render() {
    console.warn(store)
    return (
      <Provider store={store}>
        {/* <TabsNavigator strore={store} /> */}
        <SplashContainer store={store} />
      </Provider>
    )
  }
}
