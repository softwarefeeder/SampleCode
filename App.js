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
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import TextInputSampleClass1 from './TextInputSample1';
import TextInputSampleClass2 from './TextInputSample2';
import TextSample2 from './TextSample2';
import ButtonSample from './ButtonSample';
import ImageSample from './ImageSample';
import ActivityIndicatiorSample from './ActivityIndicatorSample';
import FlatListSample from './FlatListSample';
import ImageBackgroundSample from './ImageBackground';
import PraticeOne from './PraticeOne';



class App extends Component {

  onClick = () => {
    alert("test");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle} onPress={this.onClick}>
          Welcome To My Class
        </Text>
        <PraticeOne />
        <FlatListSample />
          <ActivityIndicatiorSample />
          <TextInputSampleClass1 />
          <TextSample2 />
          <ButtonSample /> 
        {/* <ImageBackgroundSample /> */}
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  textStyle: {
    margin: 50,
    fontSize: 20,
    color: "green"
  },
  textInputStyle: {
    padding: 10,
    fontSize: 20,
    color: "gray"
  },
});

export default App;
