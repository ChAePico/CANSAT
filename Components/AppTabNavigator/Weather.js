import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Container, Content, Icon} from "native-base";
import WeatherInfo from "../WeatherInfo";

export default class Weather extends Component{
    static navigationOptions={
        tabBarIcon: ({tintColor})=>(
            <Icon name="cloud" style={{color: tintColor}}/>
        )
    }
    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <WeatherInfo />
                </Content>
            </Container>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});