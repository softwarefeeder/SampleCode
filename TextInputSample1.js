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


const TextInputSampleClass1 = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textStyle}>
                Please enter your name :
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
