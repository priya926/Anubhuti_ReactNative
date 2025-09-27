import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import homeStyles from "../styles/homeStyles";
import Icon from 'react-native-vector-icons/Ionicons';

const liveVideosData = [
  { id: '1', title: 'Wrestling Match 1', viewers: 456, thumbnail: require('../assets/photo2.png') },
  { id: '2', title: 'Wrestling Match 2', viewers: 456, thumbnail: require('../assets/live2.png') },
  { id: '3', title: 'Wrestling Match 3', viewers: 456, thumbnail: require('../assets/live3.png') },
];

const Live  = ({ navigation }) => {
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

      <ScrollView style={homeStyles.liveScrollView}>
        <Text style={homeStyles.liveTitle}>Live Vidoes</Text>
        {liveVideosData.map((video) => (
          <TouchableOpacity key={video.id} style={homeStyles.liveVideoCard}>
            <Image
              source={video.thumbnail}
              style={homeStyles.liveVideoThumbnail}
            />
            <View style={homeStyles.liveBadgeContainer}>
              <View style={homeStyles.liveBadge}>
                <Text style={homeStyles.liveBadgeText}>LIVE</Text>
              </View>
              <View style={homeStyles.liveViewersBadge}>
                <Ionicons name="eye" size={14} color="#fff" />
                <Text style={homeStyles.liveViewersText}>{video.viewers}</Text>
              </View>
            </View>
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
          <MaterialCommunityIcons name="play-circle" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Videos</Text>
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

export default Live;