import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Access to screen width is needed for some layout elements
const { width } = Dimensions.get('window');

// Data for the menu items
const menuItems = [
  { id: '1', name: 'About Us', icon: 'information-outline', screen: 'AboutUs' },
  { id: '2', name: 'FAQ\'s', icon: 'help-circle-outline', screen: 'FAQs' },
  { id: '3', name: 'Terms & Condition', icon: 'clipboard-text-outline', screen: 'Terms' },
  { id: '4', name: 'Privacy Policy', icon: 'shield-lock-outline', screen: 'Privacy' },
  { id: '5', name: 'Share App', icon: 'share-variant', screen: 'Share' },
  { id: '6', name: 'Rate App', icon: 'star-outline', screen: 'Rate' }, // Note: Assuming "Share App" is actually "Rate App" based on the star icon on the 6th item
];

const MoreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header (Minimal header for this screen) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        {/* The center logo is usually omitted on a slide-out drawer, but we'll stick to the visible elements */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* User Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/profile.png')} // Replace with a generic avatar or user's photo
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.userName}>Anubhuti Priya</Text>
            <Text style={styles.userEmail}>anu@gmail.com</Text>
            <Text style={styles.userPhone}>+91 789456123</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemContent}>
                <MaterialCommunityIcons name={item.icon} size={24} color="#fff" />
                <Text style={styles.menuItemText}>{item.name}</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#FD721D" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Logout Button (Fixed at the bottom above the bottom navigation) */}
      <View style={styles.logoutWrapper}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('LoginScreen')}>
          <MaterialCommunityIcons name="logout" size={24} color="#fff" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation (Assuming this screen sits above the bottom nav) */}
      {/* Note: I'm not including the full bottom nav here, only the necessary padding */}
      <View style={{ height: 60 }} />
    </SafeAreaView>
  );
};

export default MoreScreen;

// --- CSS Styles for this page only ---
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2D2D92', // Dark blue background
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  backButton: {
    // Only the back arrow is visible in the image context
  },

  // Profile Styles
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: '#fff', // Placeholder color
  },
  profileText: {
    justifyContent: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  userEmail: {
    color: '#ccc',
    fontSize: 12,
  },
  userPhone: {
    color: '#ccc',
    fontSize: 12,
  },

  // Menu Styles
  menuContainer: {
    // Container for all menu items
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E70', // Slightly lighter dark blue for separation
    paddingHorizontal: 15, // Match padding of the menu
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
  },

  // Logout Button Styles
  logoutWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#FD721D', // Orange accent color
    borderRadius: 8,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});