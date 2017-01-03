/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import todoReducer from './reducers';
import AppHeader from './containers/AppHeader';
import TodoList from './containers/TodoList';

// const reducer = combineReducers(todoReducer);
const store = createStore(todoReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="#232f38"
          />
          <AppHeader />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
