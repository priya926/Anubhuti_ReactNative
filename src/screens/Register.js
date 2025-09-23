import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Pressable} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import loginStyles from "../styles/loginStyles";
import Background from '../components/Background';

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [remember, setRemember] = useState(false);

  return (
    <Background>
      {/* The new wrapper for the form content, applying padding and width */}
      <View style={loginStyles.formWrapper}>
        <Text style={loginStyles.title}>Create an Account</Text>
        <Text style={loginStyles.subTitle}>Create an account to save your team,
                                           club & league preferences.</Text>

        <Text style={loginStyles.label}>Name</Text>
        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.input}
            placeholder="Type Here"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
        </View>

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
              name={secureText ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              style={loginStyles.iconRight}
            />
          </Pressable>
        </View>

        <TouchableOpacity
          style={loginStyles.loginBtn}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={loginStyles.loginText}>Sign In</Text>
        </TouchableOpacity>

        <View style={loginStyles.orContainer}>
          <View style={loginStyles.line} />
          <Text style={loginStyles.orText}>or</Text>
          <View style={loginStyles.line} />
        </View>

        <View style={loginStyles.accountPromptContainer}>
          <Text style={loginStyles.accountPromptText}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={loginStyles.orangeLinkText}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
};

export default Register;