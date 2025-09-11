import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const athleteData = [
  { name: "Gilman Thomas Patrick", country: "India", flag: require("../assets/flag.jpg"), points: 100200, rank: "#07" },
  { name: "Gilman Thomas Patrick", country: "India", flag: require("../assets/flag.jpg"), points: 100200, rank: "#08" },
  { name: "Gilman Thomas Patrick", country: "India", flag: require("../assets/flag.jpg"), points: 100200, rank: "#09" },
];

export default function Data() {
  const [activeTab, setActiveTab] = useState("FS");
  const [activeWeight, setActiveWeight] = useState("61Kg");

  let tabViews = [];
  ["GR", "FS", "WW"].forEach((tab) => {
    tabViews.push(
        <TouchableOpacity key={tab} style={styles.tabButton}>
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      );
    });

  let weightViews = [];
  ["57Kg", "61Kg", "65Kg", "70Kg", "74Kg"].forEach((w) => {
    weightViews.push(
      <TouchableOpacity key={w} onPress={() => setActiveWeight(w)}>
        <Text style={[styles.weight, activeWeight === w && styles.weightActive]}>{w}</Text>
      </TouchableOpacity>
    );
  });

  let cardViews = [];
  athleteData.forEach((item, index) => {
    cardViews.push(
      <View key={index} style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.cardRow}>
          <Image source={item.flag} style={styles.flag} />
          <Text style={styles.country}>{item.country}</Text>
          <Text style={styles.points}> | {item.points} pts</Text>
          <Text style={styles.rank}>{item.rank}</Text>
        </View>
      </View>
    );
  });

  return (
    <View style={styles.fullContainer}>
      <View style={styles.mainBox}>
        <View style={styles.tabs}>
            <View style={styles.tabBox}>
              <Text style={styles.tabText}>GR</Text>
            </View>
            <View style={styles.tabBox}>
              <Text style={styles.tabText}>FS</Text>
            </View>
            <View style={styles.tabBox}>
              <Text style={styles.tabText}>WW</Text>
            </View>
          </View>

        <View style={styles.weights}>
          <Text style={styles.arrow}>{"<"}</Text>
          {weightViews}
          <Text style={styles.arrow}>{">"}</Text>
        </View>

        <ScrollView>{cardViews}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dark blue",
    padding: 16,
  },
  mainBox: {
    backgroundColor: "#2D2D92",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "95%",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  tabBox: {
    flex: 1,
    backgroundColor: '#382e98',
    marginHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },


  weights: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#5555aa",
    paddingBottom: 6,
  },
  weight: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 10,
  },
  weightActive: {
    color: "#ffa500",
    borderBottomWidth: 2,
    borderBottomColor: "#ffa500",
  },
  arrow: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 6,
  },
  card: {
    backgroundColor: "#382e98",
    borderRadius: 6,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
//    borderBottomColor: "#5555aa",
  },
  name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  flag: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6,
    resizeMode: "cover",
  },
  country: {
    color: "#fff",
    fontSize: 13,
  },
  points: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 4,
  },
  rank: {
    color: "#ffa500",
    fontWeight: "bold",
    marginLeft: "auto",
    fontSize: 15,
  },
});
