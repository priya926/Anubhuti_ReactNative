// components/CategorySection.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get("window");

const categories = [
  { name: 'Olympic', icon: 'medal-outline' },
  { name: 'Wrestler', icon: 'person-outline' },
  { name: 'Coaches', icon: 'people-outline' },
  { name: 'Referee', icon: 'shield-outline' },
  { name: 'Dangal', icon: 'trophy-outline' },
  { name: 'Photos', icon: 'images-outline' },
  { name: 'Academies', icon: 'school-outline' },
  { name: 'News', icon: 'newspaper-outline' },
];

const CategorySection = () => {
  const categoryRows = [];
  for (let i = 0; i < categories.length; i += 4) {
    categoryRows.push(categories.slice(i, i + 4));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Category</Text>
      {categoryRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.categoryRow}>
          {row.map((item, itemIndex) => (
            <TouchableOpacity key={itemIndex} style={styles.categoryItem}>
              <Icon name={item.icon} size={28} color="#fff" />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  categoryItem: {
    width: width / 5,
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategorySection;