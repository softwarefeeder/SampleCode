/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput
} from 'react-native';

const TextInputSample = () => {
    const [value, onChangeText] = useState("Please Enter Your Name:")
    return (
        <TextInput value={value} style={styles.textStyle} onChangeText={onChangeText}>
        </TextInput>
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
        fontSize: 40,
        color: "red"
    },
});

export default TextInputSample;
