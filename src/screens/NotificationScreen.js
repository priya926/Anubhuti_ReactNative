import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

// --- Mock Data ---
const notificationsData = [
  {
    id: '1',
    day: 'Today',
    type: 'News',
    message: 'New Dangal Added gurugram janmashtami khusti dangal....',
    date: '26-08-2024',
    icon: 'clipboard-text-outline',
    color: '#3E3EAB'
  },
  {
    id: '2',
    day: 'Today',
    type: 'Event',
    message: 'New Dangal Added gurugram janmashtami khusti dangal....',
    date: '26-08-2024',
    icon: 'chair-school',
    color: '#3E3EAB'
  },
  {
    id: '3',
    day: 'Yesterday',
    type: 'Dangal',
    message: 'New Dangal Added gurugram janmashtami khusti dangal....',
    date: '26-08-2024',
    icon: 'hand-left-pointing-outline', // Placeholder for wrestling icon
    color: '#1E1E70'
  },
  {
    id: '4',
    day: 'Yesterday',
    type: 'Academy',
    message: 'New Dangal Added gurugram janmashtami khusti dangal....',
    date: '26-08-2024',
    icon: 'account-group-outline',
    color: '#1E1E70'
  },
];

const NotificationScreen = ({ navigation }) => {

  // Group notifications by day
  const groupedNotifications = notificationsData.reduce((acc, notif) => {
    acc[notif.day] = acc[notif.day] || [];
    acc[notif.day].push(notif);
    return acc;
  }, {});

  // Reusable component for a single notification card
  const NotificationCard = ({ item }) => (
    <TouchableOpacity style={[styles.notificationCard, { backgroundColor: item.color }]}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={item.icon} size={28} color="#fff" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.notificationType}>{item.type}</Text>
        <Text style={styles.notificationMessage} numberOfLines={2}>{item.message}</Text>
      </View>
      <Text style={styles.notificationDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
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
        <Text style={styles.pageTitle}>Notification</Text>

        {/* Render grouped notifications */}
        {Object.keys(groupedNotifications).map((day) => (
          <View key={day} style={styles.dayGroup}>
            <Text style={styles.dayHeader}>{day}</Text>
            {groupedNotifications[day].map((item) => (
              <NotificationCard key={item.id} item={item} />
            ))}
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

export default NotificationScreen;

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

  // Group Header (Today/Yesterday)
  dayGroup: {
    marginBottom: 20,
  },
  dayHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  // Notification Card Styles
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    // Background color determined by item.color
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light semi-transparent circle behind icon
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  notificationType: {
    color: '#FD721D', // Orange accent color for the type
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  notificationMessage: {
    color: '#fff',
    fontSize: 14,
  },
  notificationDate: {
    color: '#ccc',
    fontSize: 12,
    alignSelf: 'flex-start',
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