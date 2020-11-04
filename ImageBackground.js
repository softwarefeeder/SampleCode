

import { ImageBackground, StyleSheet, View } from "react-native"
import React from 'react';

const ImageBackgroundSample = () => {
    return (
        <View>
            <ImageBackground style={styles.imageBackgroundStyle} source={{ uri: "https://www.softwarefeeder.com/img/profileicon.png" }} >
            </ImageBackground>

            {/* <ImageBackground style={styles.imageBackgroundStyle} source={require("")}>
            </ImageBackground> */}
        </View>
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

