const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the entire screen
    position: 'absolute', // Allows other elements to be layered on top
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust size as needed
    height: 200, // Adjust size as needed
    resizeMode: 'contain',
  },
  circle: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  circleLg: {
    width: 400, // Adjust size
    height: 400,
  },
  circleMd: {
    width: 350, // Adjust size
    height: 350,
  },
  circleSm: {
    width: 300, // Adjust size
    height: 300,
  },
});

export default globalStyles;