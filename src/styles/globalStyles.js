import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8A2C8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginVertical: 10,
  },
  header1: {
    fontSize: 22,
    color: "yellow",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 15,
  },
  caption: {
   fontSize: 20,
   color: "#FFFDD0",
   borderWidth: 5,
   borderColor: "black",
   borderRadius: 40,
   margin: 20,
   padding: 10,
   textAlign: "center",
  },
 input: {
     width: "100%",
     padding: 12,
     borderWidth: 1,
     borderColor: "#fff",
     borderRadius: 8,
     marginBottom: 15,
     backgroundColor: "#f9f9f9",
    },
 button: {
     width: "100%",
     padding: 14,
     borderRadius: 8,
     backgroundColor: "black",
     alignItems: "center",
     marginTop: 10,
    },
 buttonText: {
     color: "yellow",
     fontSize: 16,
     fontWeight: "600",
   },
 });


export default globalStyles;
