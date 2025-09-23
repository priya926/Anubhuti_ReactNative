import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import homeStyles from "../styles/homeStyles";

const { width } = Dimensions.get('window');

const LatestUpdate = ({ navigation }) => {
  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      {/* Header */}
      <View style={homeStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require("../assets/logo.png")}
          style={homeStyles.logo}
        />
        <View style={homeStyles.headerIcons}>
          <TouchableOpacity>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="notifications" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={homeStyles.latestUpdateContainer}>
        <Text style={homeStyles.latestUpdateTitle}>Latest Update</Text>

        {/* Dropdowns */}
        <View style={homeStyles.latestUpdateDropdowns}>
          <TouchableOpacity style={homeStyles.latestUpdateDropdown}>
            <Text style={homeStyles.latestUpdateDropdownText}>Select by District</Text>
            <Icon name="chevron-down" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.latestUpdateDropdown}>
            <Text style={homeStyles.latestUpdateDropdownText}>Select by State</Text>
            <Icon name="chevron-down" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* News Cards */}
        <TouchableOpacity style={homeStyles.latestUpdateNewsCard}>
          <Image
            source={require("../assets/news.png")}
            style={homeStyles.latestUpdateNewsImage}
          />
          <View style={homeStyles.latestUpdateNewsOverlay}>
            <Text style={homeStyles.latestUpdateNewsTitle}>Sushil, Geeta, Sakshi: 5 Indians to Watch in Pro Wrestling League</Text>
            <View style={homeStyles.latestUpdateNewsMeta}>
              <Icon name="calendar" size={12} color="#FD721D" />
              <Text style={homeStyles.latestUpdateMetaText}>Sep 13, 2022</Text>
              <Icon name="time" size={12} color="#FD721D" />
              <Text style={homeStyles.latestUpdateMetaText}>5 min</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.latestUpdateNewsCard}>
          <Image
            source={require("../assets/news2.png")}
            style={homeStyles.latestUpdateNewsImage}
          />
          <View style={homeStyles.latestUpdateNewsOverlay}>
            <Text style={homeStyles.latestUpdateNewsTitle}>Asian Wrestling Championships erve purpose for Indian wrestlers in busy year</Text>
            <View style={homeStyles.latestUpdateNewsMeta}>
              <Icon name="calendar" size={12} color="#FD721D" />
              <Text style={homeStyles.latestUpdateMetaText}>Sep 13, 2022</Text>
              <Icon name="time" size={12} color="#FD721D" />
              <Text style={homeStyles.latestUpdateMetaText}>5 min</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.latestUpdateNewsCard}>
          <Image
            source={require("../assets/news2.png")}
            style={homeStyles.latestUpdateNewsImage}
          />
          <View style={homeStyles.latestUpdateNewsOverlay}>
            <Text style={homeStyles.latestUpdateNewsTitle}>Asian Wrestling Championships erve purpose for Indian wrestlers in busy year</Text>
            <View style={homeStyles.latestUpdateNewsMeta}>
              <Icon name="calendar" size={12} color="#FD721D" />
              <Text style={homeStyles.latestUpdateMetaText}>Sep 13, 2022</Text>
              <Icon name="time" size={12} color="#FD721D" />
              <Text style={homeStyles.latestUpdateMetaText}>5 min</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="home" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="calendar" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="play-circle" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="people" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="menu" size={24} color="#fff" />
          <Text style={homeStyles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LatestUpdate;