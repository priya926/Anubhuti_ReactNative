import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Card() {
  const [event] = useState({
    tag: "Haryana",
    title: "Haryana state championship",
    date: "Sep 13, 2022",
    location: "Rohtak",
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{event.tag}</Text>
        </View>

        <Text style={styles.title}>{event.title}</Text>

        <View style={styles.row}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
            }}
            style={styles.iconImage}
          />
          <Text style={styles.text}>{event.date}</Text>

          <Image
            source={{
              uri: "https://www.iconsdb.com/icons/preview/orange/map-marker-2-xxl.png",
            }}
            style={styles.iconImage}
          />
          <Text style={styles.text}>{event.location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E70",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#2D2D92",
    borderRadius: 6,
    padding: 20,
    width: "90%",
    shadowColor: "#fff",
    elevation: 6,
  },
  tag: {
    backgroundColor: "#FF5F1F",
    borderRadius: 50,
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 12,
  },
  tagText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconImage: {
    width: 18,
    height: 18,
    tintColor: "#F08000",
    marginRight: 6,
  },
  text: {
    marginRight: 18,
    fontSize: 14,
    color: "#ddd",
  },
});
