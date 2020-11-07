
import { Component } from 'react';
import { View } from "react-native"

class Sample extends Component {

    constructor() {

    }

    state = {
        textValue: 0
    }

    getMoviesFromApi = async () => {
        try {
            const response = await fetch('https://softwarefeeder.com/screendesign.json');
            const json = await response.json();
            return json.movies;
        }
        catch (error) {
            if(error.errorcode === 500)
            {
                alert("Internet is not avaiable",error)

            }else 
            {
                alert("Something went wrong",error)

            }
        }
    };

    componentDidMount() {
        fetch("url").
            then(res.json()).
            then(res).
            catch()
    }

    render = () => {

        return (
            <View>
                <Text>
                    {this.state.textValue}
                </Text>
            </View>

        );

    }



}