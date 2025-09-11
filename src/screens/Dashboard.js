import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from "../styles/globalStyles";

const Dashboard = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Dashboard :)</Text>
      <Text style={globalStyles.header1}>Enjoy Personalized App !</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("Splash")}
      >
        <Text style={globalStyles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
