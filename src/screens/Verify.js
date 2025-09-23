import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Dimensions,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import loginStyles from "../styles/loginStyles";
import Background from '../components/Background';

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);
  const timerIdRef = useRef(null);

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerIdRef.current);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerIdRef.current);
    }
  }, [timer]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleResendCode = () => {
    console.log('Resend code tapped');
    setTimer(60);
  };

  const handleVerify = () => {
    const fullOtp = otp.join('');
    console.log('Verifying OTP:', fullOtp);
    navigation.navigate("Reset");
  };

  return (
    <Background>
      <View style={loginStyles.formWrapper}>
        <Text style={loginStyles.title}>Verification Code</Text>
        <Text style={loginStyles.subTitle}>
          We've sent a OTP verification code to your email
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleOtpChange(text, index)}
              ref={el => (inputRefs.current[index] = el)}
            />
          ))}
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            Resend code in <Text style={styles.orangeText}>{`00:${timer
              .toString()
              .padStart(2, '0')}`}</Text>
          </Text>
        </View>



        <TouchableOpacity
          style={loginStyles.loginBtn}
          onPress={handleVerify}
        >
          <Text style={loginStyles.loginText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive code?</Text>
          <TouchableOpacity onPress={handleResendCode} disabled={timer > 0}>
            <Text
              style={[
                styles.resendLink,
                timer > 0 && styles.disabledLink,
              ]}
            >
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

// Stylesheet for the unique elements of the verification page
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  otpInput: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    borderWidth: 1,
    borderColor: '#FD721D',
  },
  timerContainer: {
    marginBottom: 20,
  },
  timerText: {
    color: 'white',
    fontSize: 16,
  },
  orangeText: {
    color: '#FD721D',
  },
  resendContainer: {
    flexDirection: 'row',
    marginTop: 200,
    marginBottom:50,
  },
  resendText: {
//    textAlign:'center',
    color: 'white',
    fontSize: 14,
    marginRight: 5,
  },
  resendLink: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  disabledLink: {
    color: 'white',
  },
});

export default Verify;