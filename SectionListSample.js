import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity,
    SectionList
} from 'react-native';


const SampleData = [
    {
        id: "1",
        title: "Sample Code 1",
        descrisption: "descrisption data 1",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png",
        sectionData: ["https://www.softwarefeeder.com/img/profileicon.png",
            "https://www.softwarefeeder.com/img/profileicon.png",
            "https://www.softwarefeeder.com/img/profileicon.png",
            "https://www.softwarefeeder.com/img/profileicon.png"]

    },
    {
        id: "2",
        title: "Sample Code 2",
        descrisption: "descrisption data 2",
        imagedata: "https://www.softwarefeeder.com/img/profileicon.png",
        sectionData: ["French Fries", "Onion Rings", "Fried Shrimps"]
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


const onClickListener = (title) => {
    alert(title)
}


const Item = ({ item }) => (
    <View style={styles.container}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <Text style={styles.textDescStyle}>{item.descrisption}</Text>
        <Image style={styles.imageStyle} source={{ uri: item.imagedata }} >
        </Image>
    </View>
);

const SectionListSample = () => {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { alert(item.descrisption) }}>
            <Item item={item} />
        </TouchableOpacity>

    );

    const emptyItem = () => {
        <Text>
        </Text>
    };
    const headerComponent = () => {
        <Text>
        </Text>
    };

    const SampleEmptyArray =
        [];


    return (
        <SectionList
            data={SampleData}
        >
        </SectionList>
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
        width: 50,
        height: 50
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


export default SectionListSample;