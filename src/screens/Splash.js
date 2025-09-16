import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import globalStyles from "../styles/globalStyles";

const Splash = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={globalStyles.logo}
      />
      <Image
        source={require('../assets/background.jpg')}
        style={globalStyles.backgroundImage}
      />

      <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Button
            title="LOGIN  !!"
            color="green"
            onPress={() => navigation.navigate("LoginScreen")}
          />

          <View style={{ width: 12 }} />
          <Button
              title="TASKS  !!"
              color="green"
              onPress={() => navigation.navigate("Task")}
            />
      </View>
    </View>
  );
};

export default Splash;