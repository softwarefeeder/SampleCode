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
    Text
} from 'react-native';


const TextSample = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle} onPress={() => { alert("TextSample alert") }} >
                click me!!!
            </Text>
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

export default TextSample;
