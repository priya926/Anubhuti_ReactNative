import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function PlayerCard() {
  return (
  <View style={styles.fullContainer}>
    <View style={styles.container}>
      <View style={styles.imageWrapper}>              //new feature
        <Image source={require('../assets/bp.jpg')}
        style={styles.image}
        />
      </View>
      <Text style={styles.name}>Bajrang Punia</Text>
      <Text style={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({

    fullContainer:{
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },

  container: {
    backgroundColor: "#1E1E70",
    alignItems: "center",
    padding: 20,
//    borderRadius: 10,
    width: 300,
    alignSelf: "center",
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "orange",
    overflow: "hidden",     // cuts outside image
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",   // fills circle
  },


  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
  },
});
