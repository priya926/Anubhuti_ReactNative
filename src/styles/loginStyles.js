import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      backgroundColor: "#1E1E70",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
  cardContainer: {
    width: "100%",
    backgroundColor: "rgba(45, 45, 146, 0.9)",
    borderRadius: 5,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
    backgroundColor: "orange",
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
});

export default loginStyles;