import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import homeStyles from "../styles/homeStyles"; // Assuming your shared styles are here

const { width } = Dimensions.get('window');

const facilitiesData = [
  { icon: 'dumbbell', name: 'GYM' },
  { icon: 'bed', name: 'Hostel' },
  { icon: 'food-fork-drink', name: 'Mess' },
  { icon: 'run', name: 'Running Track' },
  { icon: 'weight-lifter', name: 'Cross Fit' },
  { icon: 'car-parking', name: 'Parking' },
  { icon: 'square-outline', name: 'Mat' }, // Using a simple square for 'Mat'
];



const AcademyDetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header (Reusing existing style structure) */}
      <View style={homeStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <MaterialCommunityIcons name="share-variant" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.academyTitle}>Obra Kabaddi Club</Text>

        {/* Image Slider Section */}
        <View style={styles.imageSliderContainer}>
          <Image
            source={require('../assets/bp.jpg')} // Main image
            style={styles.mainImage}
            resizeMode="cover"
          />
          {/* Slider Dots */}
          <View style={styles.dotContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Coach and Description */}
        <View style={styles.infoSection}>
          <Text style={styles.coachText}>
            <Text style={styles.boldText}>Coach:</Text> Ajay Choudhary
          </Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>

        {/* Location */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={18} color="#FD721D" />
          <Text style={styles.locationText}>
            8-12, Lorem Ipsum, Gurgaon, Haryana, 120001
          </Text>
        </View>

        {/* Practice Time */}
        <Text style={styles.sectionHeader}>Practice Time:</Text>
        <View style={styles.practiceTimeContainer}>
          <View style={styles.timeRow}>
            <Text style={[styles.timeLabel, styles.morningTime]}>Morning Time:</Text>
            <Text style={styles.timeValue}>04:00 AM - 08:00 AM</Text>
          </View>
          <View style={styles.timeRow}>
            <Text style={[styles.timeLabel, styles.eveningTime]}>Evening Time:</Text>
            <Text style={styles.timeValue}>04:00 PM - 08:00 PM</Text>
          </View>
        </View>

        {/* Facilities */}
        <Text style={styles.sectionHeader}>Facilities:</Text>
        <View style={styles.facilitiesContainer}>
          {facilitiesData.map((item, index) => (
            <View key={index} style={styles.facilityItem}>
              <MaterialCommunityIcons name={item.icon} size={30} color="#fff" />
              <Text style={styles.facilityText}>{item.name}</Text>
            </View>
          ))}
        </View>



        {/* Spacer for bottom nav */}
        <View style={{ height: 30 }} />
      </ScrollView>

      {/* Bottom Navigation (Reusing existing style structure) */}
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

export default AcademyDetailScreen;

// --- CSS Styles for this page only ---
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2D2D92', // Dark blue background
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 80, // Space for the bottom nav
  },
  academyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    marginBottom: 15,
  },

  // Image Slider Styles
  imageSliderContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    width: width - 30, // Full width minus padding
  },
  mainImage: {
    width: '100%',
    height: width * 0.7, // Aspect ratio for the image
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FD721D', // Orange accent
  },

  // Info and Description Styles
  infoSection: {
    marginBottom: 20,
  },
  coachText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
  },

  // Location Styles
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  locationText: {
    color: '#ccc',
    fontSize: 14,
    marginLeft: 5,
    flexShrink: 1, // Allows text to wrap
  },

  // Practice Time Styles
  sectionHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  practiceTimeContainer: {
    backgroundColor: '#1E1E70',
    borderRadius: 8,
    marginBottom: 20,
    padding: 1, // Small padding to push content from the edge
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  timeLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  morningTime: {
    backgroundColor: '#FD721D',
  },
  eveningTime: {
    backgroundColor: '#FD721D',
  },
  timeValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Facilities Styles
  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  facilityItem: {
    width: width / 5.5, // Distribute items evenly
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 15, // Space between items
  },
  facilityText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },

  // Social Media Styles
  socialMediaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: 'white', // Placeholder background
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 40, // Assuming your social icons are round and 40x40
    height: 40,
    borderRadius: 20,
  }
});