import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353A81',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.5, // 50% of the screen width for a responsive design
    height: width * 0.5, // Maintain aspect ratio
    resizeMode: 'contain',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.1, // Adjust opacity as needed
    resizeMode: 'cover',
  },
});

export default styles;