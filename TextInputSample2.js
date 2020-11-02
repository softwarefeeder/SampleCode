/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{ Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';


class TextInputSampleClass2 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textStyle}>
                    Please enter your office address :
            </TextInput>
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
        padding: 10,
        fontSize: 20,
        color: "green"
    },
});

export default TextInputSampleClass2;
