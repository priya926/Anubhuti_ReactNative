import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Background = ({ children }) => {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../assets/background.jpg')}
        style={globalStyles.backgroundImage}
      />


      <View style={globalStyles.overlay} />


      <View style={globalStyles.contentContainer}>

        <View style={[globalStyles.circle, globalStyles.circleLg]} />
        <View style={[globalStyles.circle, globalStyles.circleMd]} />
        <View style={[globalStyles.circle, globalStyles.circleSm]} />
        {children}
      </View>
    </View>
  );
};

export default Background;