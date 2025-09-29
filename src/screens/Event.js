import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Access to screen width for filter layout calculations
const { width } = Dimensions.get('window');

// --- Mock Data ---
const eventsData = [
  { id: '1', title: 'Haryana state championship', date: 'Sep 13, 2022', location: 'Rohtak', tag: 'Haryana' },
  { id: '2', title: 'Haryana state championship', date: 'Sep 13, 2022', location: 'Rohtak', tag: 'Haryana' },
  { id: '3', title: 'Haryana state championship', date: 'Sep 13, 2022', location: 'Rohtak', tag: 'Haryana' },
  { id: '4', title: 'Haryana state championship', date: 'Sep 13, 2022', location: 'Rohtak', tag: 'Haryana' },
];

const Event = ({ navigation }) => {

  // Reusable component for the filter dropdowns
  const DropdownFilter = ({ label }) => (
    <TouchableOpacity style={styles.dropdown}>
      <Text style={styles.dropdownText}>{label}</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
    </TouchableOpacity>
  );

  // Reusable component for an event card
  const EventCard = ({ event }) => (
    <TouchableOpacity style={styles.eventCard}>
      <View style={styles.eventTag}>
        <Text style={styles.eventTagText}>{event.tag}</Text>
      </View>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <View style={styles.eventMetaContainer}>
        <View style={styles.eventMetaItem}>
          <MaterialCommunityIcons name="calendar-month" size={18} color="#FD721D" />
          <Text style={styles.eventMetaText}>{event.date}</Text>
        </View>
        <View style={styles.eventMetaItem}>
          <Ionicons name="location-sharp" size={18} color="#FD721D" />
          <Text style={styles.eventMetaText}>{event.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header (Simplified structure) */}
      <View style={styles.header} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../assets/logo.png')} // Replace with your actual logo path
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.pageTitle}>Events</Text>

        {/* Filter Dropdowns */}
        <View style={styles.filtersContainer}>
          <View style={styles.filterRow}>
            <DropdownFilter label="Select Campionship" />
            <DropdownFilter label="Select National" />
          </View>
          <View style={styles.filterRow}>
            <DropdownFilter label="Select State" />
            <DropdownFilter label="Select District" />
          </View>
        </View>

        {/* Event List */}
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>

      {/* Bottom Navigation (Simplified structure) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="home-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="calendar-month" size={24} color="#FD721D" />
          <Text style={styles.navTextActive}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="play-circle-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="account-group-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="menu" size={24} color="#fff" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Event;

// --- CSS Styles for this page only ---
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2D2D92', // Dark blue background
  },

  // Header Styles (Reusing common elements)
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
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

  // Page Content
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 80, // Space for the bottom nav
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },

  // Filter Dropdown Styles
  filtersContainer: {
    marginBottom: 20,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E70',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: (width - 40) / 2, // 15*2 padding + 10 space
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: '#fff',
    fontSize: 14,
  },

  // Event Card Styles
  eventCard: {
    backgroundColor: '#1E1E70', // Darker blue for the card background
    borderRadius: 8,
    marginBottom: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  eventTag: {
    backgroundColor: '#FD721D', // Orange accent color
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start', // Only takes up the necessary width
    marginBottom: 10,
  },
  eventTagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  eventTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  eventMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  eventMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  eventMetaText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },

  // Bottom Nav Styles (Reusing common elements)
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1E1E70",
    height: 60,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopColor: "rgba(255,255,255,0.1)",
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 10,
  },
  navTextActive: {
    color: "#FD721D",
    fontSize: 10,
  },
});