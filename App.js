import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import MainScreen from "./Components/MainScreen";

const API_KEY = "5724b0ff86ef805a17a36c9918d5a7c3";
const AppStackNavigator=createStackNavigator({
  Main: {
    screen: MainScreen,
  }
});

export default createAppContainer(AppStackNavigator);