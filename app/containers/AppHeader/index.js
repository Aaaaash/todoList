import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TODO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#31424E',
  	justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    paddingLeft: 10,
  },
});

export default AppHeader;
