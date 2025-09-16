import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from "../styles/globalStyles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login to your Dashboard</Text>
      <Text style={globalStyles.header1}>Enter Your Details !</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Enter Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Enter Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("Splash")}
      >
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
