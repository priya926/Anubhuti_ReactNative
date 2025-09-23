import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Pressable} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import loginStyles from "../styles/loginStyles";
import Background from '../components/Background';

const Forget = ({ navigation }) => {
  const [email, setEmail] = useState("");

return (
    <Background>
      {/* The new wrapper for the form content, applying padding and width */}
      <View style={loginStyles.formWrapper}>
        <Text style={loginStyles.title}>Please enter your registered email ID</Text>
        <Text style={loginStyles.subTitle}>We Will send a verification code to your
                                                 registered email ID  </Text>

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

        <TouchableOpacity
          style={loginStyles.loginBtn}
          onPress={() => navigation.navigate("Verify")}
        >
          <Text style={loginStyles.loginText}>Send verification Code</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Forget;