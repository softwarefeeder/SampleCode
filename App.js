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
import TextInputSampleClass1 from './TextInputSample1';
import TextInputSampleClass2 from './TextInputSample2';


class App extends Component {

  onClickFunction() {
    alert("welcome to my class!!!")
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.textStyle} onPress={this.onClickFunction}>
          Welcome To My Class
        </Text>

      <TextInputSampleClass1/>

      <TextInputSampleClass2/>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    margin: 50,
    fontSize: 30,
    color: "green"
  },
  textInputStyle: {
    padding: 10,
    fontSize: 20,
    color: "gray"
  },
});

export default App;
