import React, {Component} from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const API_KEY="5724b0ff86ef805a17a36c9918d5a7c3";

const weatherCases={
    Rain: "weather-rainy",
    Clear: "white-balance-sunny",
    Thunderstorm: "lightning",
    Clouds: "cloud-outline",
    Snow: "snow",
    Drizzle: "cloud-drizzle",
    Haze: "day-haze",
    Mist: "fog",
}
const position={
    latitude: 34.6236330,
    longitude: 127.1858990,
}

export default class WeatherInfo extends Component{
    state={
        isLoaded: false,
        error: null,
        temperature: null,
        name: null,
        city: null,
        time: null,
        humid: null,
    };
    componentDidMount(){
        this._getWeather(position.latitude, position.longitude);
    };
    _getWeather=(lat, long)=>{
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
        )
        .then(response => response.json())
        .then(json => {
            this.setState({
                temperature: json.main.temp,
                name: json.weather[0].main,
                isLoaded: true,
                city: json.name,
                humid: json.main.humidity,
            });
        });
    };
    render(){
        const {isLoaded, error, temperature, name, city, humid}=this.state;
        return(
            <View>
                <View style={styles.upper}>
                    <Text style={styles.temp}>{Math.ceil(temperature-273.15)}°C</Text>
                    <Text style={styles.humid}>{Math.ceil(humid)}%</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{name}</Text>
                    <MaterialCommunityIcons
                        color="black"
                        size={144}
                        name={weatherCases[name]}
                    />
                </View>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    lower: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingLeft: 25,
        paddingRight: 25,
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "black",
        marginTop: 10
    },
    humid: {
        fontSize: 36,
        backgroundColor: "transparent",
        color: "black",
        marginTop: 5
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "black",
        marginBottom: 10,
        fontWeight: "300"
    },
});
