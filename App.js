/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { bold } from 'ansi-colors';


class App extends Component {
  render() {
    return (
      <View style={styles.textStyle}>
          <Text>
            Hi
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewBackground:
  {
    flex: 1,
  },
  viewBackground1:
  {
    backgroundColor: "red",
    flex: 0.5,
    alignContent:"center",
    
  },
  viewBackground2:
  {
    backgroundColor: "green",
    flex: 0.5
  },
  textStyle:
  {
    flex: 1,
    fontSize: 40,
    alignContent:"center",
    justifyContent:"center"
  },
});

export default App;
