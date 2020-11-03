
import { Image, StyleSheet, } from "react-native"
import React from 'react';


const ImageSample = () => {
    return (
        <Image style={styles.imageStyle} source={{ uri: "https://www.softwarefeeder.com/img/profileicon.png" }}>
        </Image>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        padding: 10,
        width: 200,
        height: 200
    },
});

export default ImageSample;