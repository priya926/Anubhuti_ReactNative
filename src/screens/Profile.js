import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

// --- Mock Data ---
const medalData = [
  { type: 'Gold', count: 2, icon: require('../assets/gold.png'), color: '#FFD700' },
  { type: 'Silver', count: 8, icon: require('../assets/silver.png'), color: '#C0C0C0' },
  { type: 'Bronze', count: 5, icon: require('../assets/bronze.png'), color: '#CD7F32' },
];

const resultsData = [
  { id: '1', name: 'Bajrang Punia', location: 'Japan', date: 'June 2021', weight: '57 Kg', medal: require('../assets/gold.png'), category: 'Olympic' },
  { id: '2', name: 'Bajrang Punia', location: 'India', date: 'Sep 2022', weight: '65 Kg', medal: require('../assets/silver.png'), category: 'World Championship' },
];

// -----------------------------------------------------------
// MODIFIED: Component now receives 'navigation' prop
// -----------------------------------------------------------
const Profile = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Olympic');

  // Filter results based on the active tab (simplified for mock data)
  const filteredResults = resultsData.filter(item => activeTab === 'All' || item.category === activeTab);

  // Tabs structure
  const tabs = ['All', '2021', '2022', 'Olympic', 'Games', 'World Championship'];

  // -----------------------------------------------------------
  // MODIFIED: Function now navigates to the confirmation page
  // -----------------------------------------------------------
  const handleDeleteAccount = () => {
    // Replace 'DeleteConfirmationScreen' with the exact route name you defined
    navigation.navigate('DeleteConfirmationScreen');
  };

  // Reusable component for displaying medal count
  const MedalCard = ({ data }) => (
    <View style={styles.medalCard}>
      <Image source={data.icon} style={styles.medalIcon} resizeMode="contain" />
      <Text style={styles.medalCountText}>{data.count} {data.type}</Text>
    </View>
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
            <MaterialCommunityIcons name="share-variant" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Profile Image and Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageWrapper}>
            <Image
              source={require('../assets/bp.jpg')} // Wrestler's Photo
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.wrestlerName}>Bajrang Punia</Text>
          <View style={styles.wrestlerDetailsRow}>
            <Text style={styles.detailText}>Seniors</Text>
            <Text style={styles.detailTextSeparator}>|</Text>
            <Text style={styles.detailText}>57Kg</Text>
            <Text style={styles.detailTextSeparator}>|</Text>
            <Image source={require('../assets/flag.jpg')} style={styles.flagIcon} />
            <Text style={styles.detailText}>India</Text>
          </View>
          <Text style={styles.styleText}>Free Style</Text>
        </View>

        {/* Medal Tally Section */}
        <View style={styles.medalTallyContainer}>
          {medalData.map(data => <MedalCard key={data.type} data={data} />)}
        </View>

        {/* Tab Navigation Section */}
        <View style={styles.tabContainer}>
          <Text style={[styles.tabLabel, styles.aboutTab]}>ABOUT</Text>
          <Text style={[styles.tabLabel, styles.resultTab]}>RESULT</Text>
        </View>

        {/* Results Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalTabs}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabButtonText, activeTab === tab && styles.activeTabButtonText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Results List */}
        <View style={styles.resultsList}>
          {filteredResults.map((item, index) => (
            <View key={item.id} style={styles.resultItem}>
              <Text style={styles.resultRank}>{index + 1}</Text>
              <View style={styles.resultInfo}>
                <Text style={styles.resultName}>{item.name}</Text>
                <View style={styles.resultMeta}>
                  <Ionicons name="location-sharp" size={14} color="#FD721D" />
                  <Text style={styles.resultMetaText}>{item.location}</Text>
                  <Text style={styles.resultMetaTextSeparator}>|</Text>
                  <Text style={styles.resultMetaText}>{item.date}</Text>
                  <Text style={styles.resultMetaTextSeparator}>|</Text>
                  <Text style={styles.resultMetaText}>{item.weight}</Text>
                </View>
              </View>
              <Image source={item.medal} style={styles.resultMedalIcon} resizeMode="contain" />
            </View>
          ))}
        </View>

        {/* New Delete Account Button */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteAccount} // This now navigates
        >
          <MaterialIcons name="delete-forever" size={24} color="#fff" />
          <Text style={styles.deleteButtonText}>Delete Account</Text>
        </TouchableOpacity>

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

export default Profile;

// --- CSS Styles for this page only (No changes here, as they were correct) ---
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2D2D92', // Dark blue background
  },

  // Header Styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
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

  // Profile Section Styles
  scrollViewContent: {
    paddingBottom: 80, // Space for the bottom nav
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E70',
  },
  profileImageWrapper: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: (width * 0.45) / 2,
    borderWidth: 5,
    borderColor: '#FD721D', // Orange accent border
    marginBottom: 15,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wrestlerName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  wrestlerDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailText: {
    color: '#ccc',
    fontSize: 14,
    marginHorizontal: 3,
  },
  detailTextSeparator: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flagIcon: {
    width: 20,
    height: 14,
    resizeMode: 'contain',
    marginRight: 5,
  },
  styleText: {
    color: '#FD721D',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Medal Tally Styles
  medalTallyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E70',
    backgroundColor: '#3E3EAB', // Slightly different background for medal section
  },
  medalCard: {
    alignItems: 'center',
    width: '30%',
  },
  medalIcon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  medalCountText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // About/Result Tab Switcher
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#2D2D92',
  },
  tabLabel: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  // Active state for 'RESULT' tab is implied by the style.
  resultTab: {
    color: '#fff',
  },

  // Horizontal Tabs (Categories)
  horizontalTabs: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E70',
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#FD721D', // Orange background for active sub-tab
  },
  tabButtonText: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabButtonText: {
    color: '#fff',
  },

  // Results List Styles
  resultsList: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E70',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  resultRank: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultMetaText: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 5,
  },
  resultMetaTextSeparator: {
    color: '#ccc',
    fontSize: 12,
    marginHorizontal: 5,
  },
  resultMedalIcon: {
    width: 40,
    height: 40,
  },

  // Delete Account Button Styles
  deleteButton: {
    flexDirection: 'row',
    backgroundColor: '#D10000', // Red color for delete
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 15,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
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