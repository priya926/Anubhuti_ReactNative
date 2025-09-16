/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert, StatusBar  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/screens/Splash';
import Task from './src/screens/Task';
import Login from './src/screens/Login';
import Card from './src/screens/Card';
import Bp from './src/screens/Bp';
import Data from './src/screens/Data';
import Bdata from './src/screens/Bdata';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import ListScreen from './src/screens/ListScreen';

const Stack = createStackNavigator();

function Navigator(){
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#C8A2C8" />
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Bp" component={Bp} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Bdata" component={Bdata} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
    return <Navigator />;
}








