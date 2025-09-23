import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import homeStyles from "../styles/homeStyles";

const { width } = Dimensions.get('window');

const Dangal = ({ navigation }) => {
  const renderMatchCard = (imageSource, location) => (
    <TouchableOpacity style={homeStyles.dangalMatchCard}>
      <Image
        source={imageSource}
        style={homeStyles.dangalMatchImage}
      />
      <View style={homeStyles.dangalLocationSection}>
        <Icon name="location-sharp" size={16} color="#FD721D" />
        <Text style={homeStyles.locationText}>{location}</Text>
      </View>
    </TouchableOpacity>
  );

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
      <ScrollView contentContainerStyle={homeStyles.dangalContainer}>
        <Text style={homeStyles.dangalTitle}>Dangal</Text>

        {/* Dropdowns */}
        <View style={homeStyles.dangalDropdowns}>
          <TouchableOpacity style={homeStyles.dangalDropdown}>
            <Text style={homeStyles.dangalDropdownText}>State</Text>
            <Icon name="chevron-down" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.dangalDropdown}>
            <Text style={homeStyles.dangalDropdownText}>District</Text>
            <Icon name="chevron-down" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.dangalDropdown}>
              <Text style={homeStyles.dangalDropdownText}>Date</Text>
              <Icon name="chevron-down" size={16} color="#fff" />
            </TouchableOpacity>
        </View>

        {/* Match Cards */}
        {renderMatchCard(
          require('../assets/dangal1.png'),
          'United States, Missouri, St. Louis'
        )}

        {renderMatchCard(
          require('../assets/dangal2.png'),
          'United States, New York, New Paltz'
        )}

        {renderMatchCard(
          require('../assets/dangal2.png'),
          'United States, New York, New Paltz'
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={homeStyles.floatingActionButton}
        onPress={() => navigation.navigate('AddDangal')}
      >
        <Image
          source={require('../assets/plus.jpg')}
          style={homeStyles.floatingActionButtonImage}
        />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="home-sharp" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="calendar-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="play-circle-outline" size={24} color="#fff" />
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
    </SafeAreaView>
  );
};

export default Dangal;