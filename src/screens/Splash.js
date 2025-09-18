import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 10000);
    return () => clearTimeout(timer);
  },


const Splash = () => {
  return (
    <View style={globalStyles.container}>

      <Image
        source={require('../assets/background.jpg')}
        style={globalStyles.backgroundImage}
      />
      <View style={globalStyles.contentContainer}>

        <View style={[globalStyles.circle, globalStyles.circleLg]} />
        <View style={[globalStyles.circle, globalStyles.circleMd]} />
        <View style={[globalStyles.circle, globalStyles.circleSm]} />
        <Image
          source={require('../assets/logo.png')}
          style={globalStyles.logo}
        />
      </View>
    </View>
  );
};

export default Splash;