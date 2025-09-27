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
import Register from './src/screens/Register';
import Card from './src/screens/Card';
import Bp from './src/screens/Bp';
import Data from './src/screens/Data';
import Bdata from './src/screens/Bdata';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import ListScreen from './src/screens/ListScreen';
import Forget from './src/screens/Forget';
import Verify from './src/screens/Verify';
import Reset from './src/screens/Reset';
import LatestUpdate from './src/screens/LatestUpdate';
import Dangal from './src/screens/Dangal';
import AddDangal from './src/screens/AddDangal';
import Photos from './src/screens/Photos';
import Videos from './src/screens/Videos';
import TeamsScreen from './src/screens/TeamsScreen';
import Live from './src/screens/Live';
import Academic from './src/screens/Academic';

const Stack = createStackNavigator();

function Navigator(){
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#C8A2C8" />
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Bp" component={Bp} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Bdata" component={Bdata} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="LatestUpdate" component={LatestUpdate} />
        <Stack.Screen name="Dangal" component={Dangal} />
        <Stack.Screen name="AddDangal" component={AddDangal} />
        <Stack.Screen name="Photos" component={Photos} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="TeamsScreen" component={TeamsScreen} />
        <Stack.Screen name="Live" component={Live} />
        <Stack.Screen name="Academic" component={Academic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
    return <Navigator />;
}








