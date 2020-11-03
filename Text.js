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

const onClick = () => {
    alert("test")
}


const TextSample = () => {
    return (
        <Text style={styles.textStyle} onPress={onClick}>
            Text
        </Text>
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

export default TextSample;
