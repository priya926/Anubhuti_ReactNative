import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
//    backgroundColor: '#1E1E70',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(30, 30, 112, 0.9)', // Blue with 50% opacity
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  circle: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  circleLg: {
    width: 400,
    height: 400,
  },
  circleMd: {
    width: 300,
    height: 300,
  },
  circleSm: {
    width: 200,
    height: 200,
  },
});

export default globalStyles;