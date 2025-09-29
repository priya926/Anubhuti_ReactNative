import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

// --- Mock Data ---
const olympicEvents = [
  {
    year: '2021 Tokyo',
    eventTag: 'olympics',
    wrestlers: [
      { name: 'Ravi Dahiya', weight: '57kg wrestling', medal: require('../assets/silver.png'), photo: require('../assets/player1.png') },
      { name: 'Bajrang Punia', weight: '65 kg wrestling', medal: require('../assets/bronze.png'), photo: require('../assets/bp.jpg') },
    ]
  },
  {
    year: '2016 Rio',
    eventTag: 'olympics',
    wrestlers: [
      { name: 'Sakshi Malik', weight: '58kg wrestling', medal: require('../assets/bronze.png'), photo: require('../assets/sm.png') },
    ]
  },
];

const OlympicsScreen = ({ navigation }) => {

  // Reusable component for displaying a wrestler card
  const WrestlerCard = ({ wrestler }) => (
    <TouchableOpacity style={styles.wrestlerCard}>
      <Image source={wrestler.medal} style={styles.medalOverlayIcon} resizeMode="contain" />
      <Image source={wrestler.photo} style={styles.wrestlerPhoto} />
      <View style={styles.wrestlerInfo}>
        <Text style={styles.wrestlerName}>{wrestler.name}</Text>
        <Text style={styles.wrestlerWeight}>{wrestler.weight}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../assets/logo.png')} // Replace with your logo path
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

        {/* Promotional Banner */}
        <View style={styles.promoBannerContainer}>
          <View style={styles.promoTextContent}>
            <Text style={styles.promoHeadline}>Cheer for</Text>
            <Text style={styles.promoTitle}>INDIA</Text>
            <Text style={styles.promoSubtitle}>at Paris Olympics</Text>
            <Text style={styles.promoHashtag}>#cheer4bharat</Text>
          </View>
          <Image
            source={require('../assets/photo1.png')} // Group photo
            style={styles.promoImage}
            resizeMode="cover"
          />
        </View>

        {/* Olympic Events Sections */}
        {olympicEvents.map((event) => (
          <View key={event.year} style={styles.eventSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{event.year} </Text>
              <View style={styles.eventTagBadge}>
                <Text style={styles.eventTagText}>{event.eventTag}</Text>
              </View>
            </View>

            <View style={styles.wrestlersRow}>
              {event.wrestlers.map((wrestler, index) => (
                <WrestlerCard key={index} wrestler={wrestler} />
              ))}
            </View>
          </View>
        ))}

      </ScrollView>

      {/* Bottom Navigation (Simplified structure) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="home" size={24} color="#FD721D" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Event</Text>
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

export default OlympicsScreen;

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

  // Promotional Banner Styles
  promoBannerContainer: {
    backgroundColor: '#FD721D', // Orange accent color
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 30,
    overflow: 'hidden',
    height: 150,
  },
  promoTextContent: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  promoHeadline: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  promoSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  promoHashtag: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  promoImage: {
    width: width * 0.5,
    height: '100%',
    resizeMode: 'cover',
  },

  // Event Section Styles
  eventSection: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventTagBadge: {
    backgroundColor: '#FFC800', // Yellow tag color
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  eventTagText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Wrestler Card Styles
  wrestlersRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  wrestlerCard: {
    width: (width - 45) / 2, // Half the screen width minus padding/margins
    backgroundColor: '#1E1E70',
    borderRadius: 8,
    marginBottom: 15,
    marginRight: 15,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  medalOverlayIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 80,
    height: 80,
    zIndex: 10,
  },
  wrestlerPhoto: {
    width: '100%',
    height: 180, // Fixed height for the photo container
    resizeMode: 'cover',
    marginBottom: 10,
  },
  wrestlerInfo: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  wrestlerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  wrestlerWeight: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
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