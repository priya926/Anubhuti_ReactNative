import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import homeStyles from "../styles/homeStyles";

const teamsData = [
  { id: '1', name: 'Pro Wrestling League', country: 'Team India', logo: require('../assets/team1.png') },
  { id: '2', name: 'United World Wrestling Asia', country: 'Team USA', logo: require('../assets/team2.png') },
  { id: '3', name: 'Russian School of Bear', country: 'Indian Team', logo: require('../assets/team3.png') },
  { id: '4', name: 'Pro Wrestling League', country: 'Indian Team', logo: require('../assets/team1.png') },
];

const TeamsScreen = () => {
  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      <View style={homeStyles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../assets/logo.png')}
          style={homeStyles.logo}
        />
        <View style={homeStyles.headerIcons}>
          <TouchableOpacity style={homeStyles.icon}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={homeStyles.teamsScrollView}>
        <Text style={homeStyles.sectionTitle}>Team</Text>
        <View style={homeStyles.teamDropdownsContainer}>
          <TouchableOpacity style={homeStyles.teamDropdown}>
            <Text style={homeStyles.teamDropdownText}>Select by District</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.teamDropdown}>
            <Text style={homeStyles.teamDropdownText}>Select by State</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {teamsData.map((team) => (
          <TouchableOpacity key={team.id} style={homeStyles.teamCard}>
            <Image
              source={team.logo}
              style={homeStyles.teamCardLogo}
            />
            <View style={homeStyles.teamCardTextContainer}>
              <Text style={homeStyles.teamCardTitle}>{team.name}</Text>
              <Text style={homeStyles.teamCardSubtitle}>{team.country}</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#FD721D" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="home-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="play-circle-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="account-group" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="menu" size={24} color="#fff" />
          <Text style={homeStyles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TeamsScreen;