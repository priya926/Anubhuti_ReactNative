// components/Header.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation, onLogoPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onLogoPress}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.headerIcons}>
        <Icon name="search-outline" size={26} color="#fff" style={styles.icon} />
        <Icon name="notifications-outline" size={26} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#1E1E70",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerIcons: {
    flexDirection: "row",
    width: 65,
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
});

export default Header;