import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Background from '../components/Background'; // Adjust path as needed
import loginStyles from '../styles/loginStyles'; // Reusing some common styles

const { width } = Dimensions.get('window');

const Reset = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- Resend Code functionality (as requested, typically not on reset screen) ---
  const [timer, setTimer] = useState(60);
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

  const handleResendCode = () => {
    console.log('Resend code tapped from Reset Password screen');
    setTimer(60); // Reset the timer
    // Here you would typically trigger an API call to resend a verification code
  };
  // -----------------------------------------------------------------------------

  const handleVerify = () => {
    // Basic validation
    if (newPassword === '' || confirmPassword === '') {
      alert('Please enter both new password and confirm password.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    if (newPassword.length < 6) { // Example password strength
      alert('Password must be at least 6 characters long.');
      return;
    }

    // If validation passes, proceed to reset password (API call would go here)
    console.log('Resetting password:', newPassword);

    // Navigate to LoginScreen as requested
    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loginStyles.formWrapper}>
            <Text style={loginStyles.title}>Reset Password</Text>
            <Text style={loginStyles.subTitle}>
              Enter your new password to continue the app.
            </Text>

            {/* New Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>New Password</Text>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  placeholderTextColor="#ccc"
                  secureTextEntry={!showNewPassword}
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowNewPassword(!showNewPassword)}
                  style={styles.eyeIcon}
                >
                  <Icon
                    name={showNewPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm New Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm New Password</Text>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  placeholderTextColor="#ccc"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeIcon}
                >
                  <Icon
                    name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              style={loginStyles.loginBtn} // Reusing common button style
              onPress={handleVerify}
            >
              <Text style={loginStyles.loginText}>Verify</Text>
            </TouchableOpacity>

            {/* Resend Code Section (as requested) */}
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Background>
  );
};

// Component-specific styles
const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
//    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 0.2,
    borderColor: 'white', // Added orange border
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    height: '100%',
    paddingRight: 10, // Space for the eye icon
  },
  eyeIcon: {
    padding: 5,
  },
  // --- Resend Code styles (copied from previous screen for consistency) ---
  resendContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  resendText: {
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

export default Reset;