import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import homeStyles from "../styles/homeStyles";

const { width } = Dimensions.get('window');

const dietData = [
  {
    id: 1,
    title: "Nitin Panwar & Mukesh | Best Players | Umaid Hawks vs Hadoti Challengers",
    thumbnail: require('../assets/vd1.png'),
    date: "28 January, 2022",
    duration: "5 min",
  },
];

const trainingData = [
  {
    id: 1,
    title: "Nitin Panwar & Mukesh | Best Players | Umaid Hawks vs Hadoti Challengers",
    thumbnail: require('../assets/vd2.png'),
    date: "28 January, 2022",
    duration: "5 min",
  },
];

const wrestlingData = [
  {
    id: 1,
    title: "Nitin Panwar & Mukesh | Best Players | Umaid Hawks vs Hadoti Challengers",
    thumbnail: require('../assets/vd2.png'),
    date: "28 January, 2022",
    duration: "5 min",
  },
];

const renderVideoCard = (video) => (
  <TouchableOpacity key={video.id} style={homeStyles.homeVideoCard}>
    <View style={homeStyles.homeVideoThumbnailContainer}>
      {/* The image is the thumbnail */}
      <Image source={video.thumbnail} style={homeStyles.homeVideoThumbnail} />
      {/* The play button is a view on top of the thumbnail */}
      <View style={homeStyles.homePlayIconContainer}>
        <Icon name="play-sharp" size={30} color="#fff" />
      </View>
    </View>
    <View style={homeStyles.homeVideoContent}>
      <Text style={homeStyles.homeVideoTitle}>{video.title}</Text>
      <View style={homeStyles.homeVideoMetaContainer}>
        <Icon name="calendar-outline" size={14} color="#FD721D" />
        <Text style={homeStyles.homeVideoMetaText}>{video.date}</Text>
        <Icon name="time-outline" size={14} color="#FD721D" style={{ marginLeft: 10 }} />
        <Text style={homeStyles.homeVideoMetaText}>{video.duration}</Text>
        <TouchableOpacity style={homeStyles.homeShareButton}>
          <Icon name="share-social-outline" size={14} color="#FD721D" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const renderSection = (title, data) => (
  <View style={homeStyles.homeSection}>
    <View style={homeStyles.homeSectionHeader}>
      <Text style={homeStyles.homeSectionTitleText}>{title}</Text>
      <TouchableOpacity onPress={() => console.log('Navigate to ' + title + ' list')}>
        <Icon name="chevron-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={homeStyles.horizontalScrollView}>
      {data.map(video => renderVideoCard(video))}
    </ScrollView>
  </View>
);

const Videos = ({ navigation }) => {
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
      <ScrollView contentContainerStyle={homeStyles.homeScrollView}>


        {renderSection("Diet & Nutrition", dietData)}
        {renderSection("Training", trainingData)}
        {renderSection("Wrestling", wrestlingData)}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="home-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="calendar-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="play-circle-sharp" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Videos</Text>
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

export default Videos;