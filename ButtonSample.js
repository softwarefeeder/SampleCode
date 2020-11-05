import React from 'react';
import {
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';


const buttonOnPress = () => {
    alert("Submitted Successfully !!!")
}

const ButtonSample = () => {
    return (
        <TouchableOpacity onPress={buttonOnPress}>
            <Button title="Submit Your Document in PDF" style={styles.buttonStyle} >
            </Button >
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle: {
        padding: 10,
        fontSize: 20,
        color: "green"
    },
});


export default ButtonSample;