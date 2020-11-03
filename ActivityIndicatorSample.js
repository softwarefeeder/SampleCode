import React from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    Button
} from 'react-native';


onClick = () => {
    alert("true")
}

const ActivityIndicatiorSample = () => {
    return (
        false ?
            <Button title="Submit" style={styles.buttonStyle} onPress={onClick}>
            </Button> :
            <ActivityIndicator size={"small"} color={"green"} animating={true}>
            </ActivityIndicator>
    )

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


export default ActivityIndicatiorSample;