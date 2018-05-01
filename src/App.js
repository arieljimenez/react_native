import React from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools';

import { TabsNavigator } from '~/containers'
import * as reducers from '~/redux'

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    devTools()
  )
)

export default class App extends React.Component {
  render() {
    console.warn(store)
    return (
      <Provider store={store}>
        <TabsNavigator />
      </Provider>
    )
  }
}
