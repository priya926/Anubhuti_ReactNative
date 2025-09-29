import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, TextInput, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import homeStyles from "../styles/homeStyles";

const { width } = Dimensions.get('window');

const academiesData = [
  { id: '1', name: 'Obra Kabaddi Club', location: 'Haryana', image: require('../assets/aca1.png') },
  { id: '2', name: 'Obra Kabaddi Club', location: 'Punjab', image: require('../assets/aca2.png') },
  { id: '3', name: 'Obra Kabaddi Club', location: 'Haryana', image: require('../assets/aca2.png') },
];

const Academic = ({ navigation }) => {
  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      <View style={homeStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
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

      <ScrollView style={homeStyles.academiesScrollView}>
        <Text style={homeStyles.sectionTitle}>Academies</Text>
        <View style={homeStyles.academiesFiltersContainer}>
          <View style={homeStyles.academiesDropdownsTop}>
            <View style={homeStyles.academiesSearchInputContainer}>
              <TextInput
                style={homeStyles.academiesSearchInput}
                placeholder="Search by Name"
                placeholderTextColor="#aaa"
              />
            </View>
            <TouchableOpacity style={homeStyles.academiesDropdown}>
              <Text style={homeStyles.academiesDropdownText}>Select City</Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={homeStyles.academiesDropdownsBottom}>
            <TouchableOpacity style={homeStyles.academiesDropdown}>
              <Text style={homeStyles.academiesDropdownText}>Select State</Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.academiesApplyButton}>
              <Text style={homeStyles.academiesApplyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        {academiesData.map((academy) => (
          <TouchableOpacity
            key={academy.id}
            style={homeStyles.academyCard}
            onPress={() => navigation.navigate('AcademyDetailScreen', { academyId: academy.id, academyName: academy.name })}
          >
            <Image
              source={academy.image}
              style={homeStyles.academyImage}
            />
            <View style={homeStyles.academyLocationBadge}>
              <Ionicons name="location" size={14} color="#FD721D" />
              <Text style={homeStyles.academyLocationText}>{academy.location}</Text>
            </View>
            <Text style={homeStyles.academyName}>{academy.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="home-outline" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Home</Text>
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
          <MaterialCommunityIcons name="account-group-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="menu" size={24} color="#fff" />
          <Text style={homeStyles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Academic;