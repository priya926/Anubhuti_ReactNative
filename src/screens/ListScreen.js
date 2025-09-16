import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import listStyles from "../styles/listStyles";
import homeStyles from "../styles/homeStyles";

const ListScreen = ({ navigation, route }) => {
  const { title, data } = route.params;

  return (
    <View style={listStyles.mainContainer}>
      <View style={listStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require("../assets/logo.png")}
          style={listStyles.logo}
        />
        <View style={listStyles.headerIcons}>
          <Icon name="search-outline" size={26} color="#fff" style={{ marginRight: 10 }} />
          <Icon name="notifications-outline" size={26} color="#fff" />
        </View>
      </View>

      <ScrollView style={listStyles.scrollView}>
        <Text style={listStyles.screenTitle}>{title}</Text>
        <View style={listStyles.gridContainer}>
          {data.map((item, index) => (
            <View key={index} style={listStyles.card}>
              <View style={listStyles.imageContainer}>
                <Image
                  source={item.image}
                  style={listStyles.profileImage}
                />
              </View>
              <Text style={listStyles.name}>{item.name}</Text>
              <Text style={listStyles.role}>{item.role}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
        <View style={homeStyles.bottomNav}>
          <TouchableOpacity style={homeStyles.navItem}>
            <Icon name="home" size={24} color="orange" />
            <Text style={homeStyles.navTextActive}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.navItem}>
            <Icon name="calendar-outline" size={24} color="#fff" />
            <Text style={homeStyles.navText}>Event</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.navItem}>
            <Icon name="videocam-outline" size={24} color="#fff" />
            <Text style={homeStyles.navText}>Videos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.navItem}>
            <Icon name="people-outline" size={24} color="#fff" />
            <Text style={homeStyles.navText}>Teams</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.navItem}>
            <Icon name="menu-outline" size={24} color="#fff" />
            <Text style={homeStyles.navText}>More</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default ListScreen;