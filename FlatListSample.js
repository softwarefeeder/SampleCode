import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image
} from 'react-native';


const SampleData = [
    {
        id: "1",
        title: "Sample Code 1",
        descrisption: "descrisption data 1",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "2",
        title: "Sample Code 2",
        descrisption: "descrisption data 2",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"
    },
    {
        id: "3",
        title: "Sample Code 3",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "4",
        title: "Sample Code 4",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
];


const Item = ({ item }) => (
    <View style={styles.container}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <Text style={styles.textDescStyle}>{item.descrisption}</Text>
        <Image style={styles.imageStyle} source={{ uri: item.imagedata }} >
        </Image>
    </View>
);

const FlatListSample = () => {

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <FlatList horizontal data={SampleData} keyExtractor={item => item.id} renderItem={renderItem}>
        </FlatList>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        padding: 10,
        width: 100,
        height: 100
    },
    textStyle: {
        padding: 10,
        fontSize: 40,
        color: "red"
    },
    textDescStyle: {
        padding: 10,
        fontSize: 18,
        color: "green"
    },
});


export default FlatListSample;