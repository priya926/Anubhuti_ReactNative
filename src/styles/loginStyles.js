import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({

  formWrapper: {
    width: "100%",
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  subTitle:{
    fontSize: 17,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    color: "white",
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  input: {
    flex: 1,
    color: "white",
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
    color: "white",
  },
  iconRight: {
    fontSize: 18,
    marginLeft: 8,
    color: "white",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  rememberText: {
    color: "white",
    fontSize: 14,
  },
  rememberIcon: {
    borderWidth: 1.5,
    borderColor: 'green',
    borderRadius: 15,
    marginRight: 8,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: "#FD721D",
    width: "100%",
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 30,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: "white",
      opacity: 0.5,
    },
    orText: {
      color: "white",
      marginHorizontal: 10,
      opacity: 0.8,
    },
    accountPromptContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    accountPromptText: {
      color: "white",
    },
    orangeLinkText: { // This is a more generic name for the same style
      color: "#FD721D",
      fontWeight: "bold",
      marginLeft: 5,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
      },
      otpInput: {
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
      verifyButton: {
        width: '100%',
        backgroundColor: '#FD721D',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
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
        color: '#FD721D',
        fontSize: 14,
        fontWeight: 'bold',
      },
      disabledLink: {
        color: 'grey',
      },
});

export default loginStyles;