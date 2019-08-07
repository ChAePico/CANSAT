import React, {Component} from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import {Card, CardItem, Left, Right, Body} from "native-base";
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

export default class ForecastInfo extends Component{
    state={
        isLoaded: false,
        error: null,
        temperature: [],
        name: [],
        city: null,
        time: null,
        humid: [],
        date: [],
    };
    componentDidMount(){
        this._getWeather(position.latitude, position.longitude);
    };
    _getWeather=(lat, long)=>{
        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=${API_KEY}`
        )
        .then(response => response.json())
        .then(json => {
            this.setState({
                temperature: [json.list[8].main.temp, json.list[16].main.temp, json.list[24].main.temp, json.list[32].main.temp], 
                name: [json.list[8].weather[0].main, json.list[16].weather[0].main, json.list[24].weather[0].main, json.list[32].weather[0].main], 
                isLoaded: true,
                humid: [json.list[8].main.humidity, json.list[16].main.humidity, json.list[24].main.humidity, json.list[32].main.humidity], 
                date: [json.list[8].dt_txt, json.list[16].dt_txt, json.list[24].dt_txt, json.list[32].dt_txt],
            });
        });
    };
    render(){
        const {isLoaded, error, temperature, name, humid, date}=this.state;
        return(
            <View>
            <View style={styles.container_first}>
            <View style={styles.card}>
                <View style={styles.upper}>
                    <Text style={styles.date}>{date[0]}</Text>
                    <Text style={styles.temp}>{Math.ceil(temperature[0]-273.15)}°C</Text>
                    <Text style={styles.humid}>{Math.ceil(humid[0])}%</Text>                
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{name[0]}</Text>
                    <MaterialCommunityIcons
                        color="black"
                        size={90}
                        name={weatherCases[name[0]]}
                    />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.upper}>
                    <Text style={styles.date}>{date[1]}</Text>
                    <Text style={styles.temp}>{Math.ceil(temperature[1]-273.15)}°C</Text>
                    <Text style={styles.humid}>{Math.ceil(humid[1])}%</Text>                
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{name[1]}</Text>
                    <MaterialCommunityIcons
                        color="black"
                        size={90}
                        name={weatherCases[name[1]]}
                    />
                </View>
            </View>
            </View>
            <View style={styles.container_second}>
            <View style={styles.card}>
                <View style={styles.upper}>
                    <Text style={styles.date}>{date[2]}</Text>
                    <Text style={styles.temp}>{Math.ceil(temperature[2]-273.15)}°C</Text>
                    <Text style={styles.humid}>{Math.ceil(humid[2])}%</Text>                
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{name[2]}</Text>
                    <MaterialCommunityIcons
                        color="black"
                        size={90}
                        name={weatherCases[name[2]]}
                    />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.upper}>
                    <Text style={styles.date}>{date[3]}</Text>
                    <Text style={styles.temp}>{Math.ceil(temperature[3]-273.15)}°C</Text>
                    <Text style={styles.humid}>{Math.ceil(humid[3])}%</Text>                
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{name[3]}</Text>
                    <MaterialCommunityIcons
                        color="black"
                        size={90}
                        name={weatherCases[name[3]]}
                    />
                </View>
            </View>
            </View>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    container_first: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container_second: {
        flex: 1,
        flexDirection: "row",
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
        paddingBottom: 0,
    },
    temp: {
        fontSize: 36,
        backgroundColor: "transparent",
        color: "black",
        marginTop: 10
    },
    humid: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "black",
        marginTop: 5,
    },
    title: {
        fontSize: 26,
        backgroundColor: "transparent",
        color: "black",
        marginBottom: 5,
        fontWeight: "300"
    },
    card: {
        width: "49%",
        height: 300,
        marginHorizontal: 5,
        borderColor: "black",
        borderWidth: 2,
    },
    date: {
        fontSize: 15,
        color: "black",
        marginTop: 5,
        marginBottom: 5,
    },
});
