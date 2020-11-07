import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


const baseApi = "https://softwarefeeder.com/screendesign.json"

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
    {
        id: "5",
        title: "Sample Code 3",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "6",
        title: "Sample Code 4",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "7",
        title: "Sample Code 1",
        descrisption: "descrisption data 1",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "8",
        title: "Sample Code 2",
        descrisption: "descrisption data 2",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"
    },
    {
        id: "9",
        title: "Sample Code 3",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "10",
        title: "Sample Code 4",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "11",
        title: "Sample Code 3",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
    {
        id: "12",
        title: "Sample Code 4",
        descrisption: "descrisption data 3",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png"

    },
];



const FlatListSample = () => {
    //Loading function
    const [isLoading, setLoaderFunc] = useState(true);

    //Api response 
    const [data, setResponse] = useState([]);



    useEffect(() => {

        fetch(baseApi).
            then((response) => response.json()).
            then((json) => setResponse(json)).
            catch((error) => console.error(error)).
            finally(() => setLoaderFunc(false));


    }, []);


    const Item = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{item.text}</Text>
            <Image style={styles.imageStyle} source={{ uri: item.source }} >
            </Image>

        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { alert(item.text) }}>
            <Item item={item} />
        </TouchableOpacity>

    );

    return (
        isLoading ?
            <FlatList
                numColumns={"2"}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}>
            </FlatList> : <Text>No data</Text>
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
        fontSize: 20,
        color: "red"
    },
    textDescStyle: {
        padding: 10,
        fontSize: 18,
        color: "green"
    },
});


export default FlatListSample;