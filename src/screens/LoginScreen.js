import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Pressable,ImageBackground} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import loginStyles from "../styles/loginStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [remember, setRemember] = useState(false);

  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.cardContainer}>
        <Text style={loginStyles.title}>Welcome Back !</Text>

        <Text style={loginStyles.label}>Email</Text>
        <View style={loginStyles.inputContainer}>
          <Icon name="mail-outline" size={20} style={loginStyles.icon} />
          <TextInput
            style={loginStyles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Text style={loginStyles.label}>Password</Text>
        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={() => setSecureText(!secureText)}>
            <Icon
              name={secureText ? "eye-outline" : "eye-off-outline"}
              size={20}
              style={loginStyles.iconRight}
            />
          </Pressable>
        </View>

        <Pressable
          style={loginStyles.rememberContainer}
          onPress={() => setRemember(!remember)}
        >
          <View style={loginStyles.rememberIcon}>
            {remember && (
              <Icon name="checkmark-circle" size={16} color="green" />
            )}
          </View>
          <Text style={loginStyles.rememberText}>Remember me</Text>
        </Pressable>

        <TouchableOpacity
          style={loginStyles.loginBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={loginStyles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;