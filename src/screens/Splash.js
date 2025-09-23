import React, { useEffect } from 'react';
import { Image } from 'react-native';
import Background from '../components/Background';
import globalStyles from '../styles/globalStyles';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Background>
      <Image
        source={require('../assets/logo.png')}
        style={globalStyles.logo}
      />
    </Background>
  );
};

export default Splash;