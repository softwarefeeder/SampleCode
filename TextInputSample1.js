/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';


const onChange = () => {

}


const TextInputSampleClass1 = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={"Please enter your name :"} placeholderTextColor={"gray"} style={styles.textStyle} onChangeText={onChange}>
            </TextInput>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        padding: 10,
        fontSize: 20,
        color: "green"
    },
});

export default TextInputSampleClass1;
