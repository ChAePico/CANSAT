import React, {Component} from "react";
import {StyleSheet, Platform} from "react-native";
import {createMaterialTopTabNavigator, createAppContainer} from "react-navigation";
import Forecast from "./AppTabNavigator/Forecast";
import Todo from "./AppTabNavigator/Todo";
import Traffic from "./AppTabNavigator/Traffic";
import Weather from "./AppTabNavigator/Weather";

const AppTabNavigator=createMaterialTopTabNavigator({
    Weather: {screen: Weather},
    Forecast: {screen: Forecast},
    Traffic: {screen: Traffic},
    Todo: {screen: Todo},
    },{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
    style: {
        ...Platform.select({
        android:{
            backgroundColor: "white",
        },
        ios: {
            backgroundColor: "white",
        }
      })
    },
    iconStyle: {height: 20},
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: true,
    showIcon: true,
    }
});
const AppTabContainer=createAppContainer(AppTabNavigator);

export default class MainScreen extends Component{
    static navigationOptions={
        title: "CANSAT",
    }
    render(){
        return(
            <AppTabContainer/>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})