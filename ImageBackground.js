

import { ImageBackground, StyleSheet, } from "react-native"
import React from 'react';

const ImageBackgroundSample = () => {
    return (
        <ImageBackground style={styles.imageBackgroundStyle} source={{ uri: "https://www.softwarefeeder.com/img/profileicon.png" }}>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    imageBackgroundStyle: {
        padding: 10,
        width: 400,
        height: 400
    },
});

export default ImageBackgroundSample;

