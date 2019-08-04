import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Container, Content, Icon} from "native-base";
import ForecastInfo from "../ForecastInfo";

export default class Forecast extends Component{
    static navigationOptions={
        tabBarIcon: ({tintColor})=>(
            <Icon name="calendar" style={{color: tintColor}}/>
        )
    }
    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <ForecastInfo />
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