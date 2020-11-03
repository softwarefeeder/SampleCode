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
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';


const TextSample2 = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { alert("Hey this is TouchableOpacity") }}>
                <Text style={styles.textStyle}>
                TouchableOpacity!!!
                </Text>
            </TouchableOpacity>

            <TouchableHighlight onPress={() => { alert("Hey this is TouchableHighlight") }}>
                <Text style={styles.textStyle}>
                TouchableHighlight!!!
                </Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback onPress={() => { alert("Hey this is TouchableWithoutFeedback") }}>
                <Text style={styles.textStyle}>
                TouchableWithoutFeedback!!!
                </Text>
            </TouchableWithoutFeedback>
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

export default TextSample2;
