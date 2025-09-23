import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import homeStyles from "../styles/homeStyles";

const { width } = Dimensions.get('window');

const photosData = [
  {
    id: 1,
    title: "Day 4 of 69th Senior National Men's Kabaddi Championship",
    source: require("../assets/photo1.png")
  },
  {
    id: 2,
    title: "Day 3 of 69th Senior National Men's Kabaddi Championship",
    source: require("../assets/photo2.png")
  },
  {
    id: 3,
    title: "Vivo Pro Kabaddi Player Auction - Meet the Retained Heroes!",
    source: require("../assets/photo3.png")
  },
  {
    id: 4,
    title: "47th Junior National Kabaddi Championship: Day 4",
    source: require("../assets/photo4.png")
  },
  {
    id: 5,
    title: "47th Junior National Kabaddi Championship: Day 3",
    source: require("../assets/photo4.png")
  },
];

const Photos = ({ navigation }) => {
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
      <ScrollView contentContainerStyle={homeStyles.photosContainer}>
        <Text style={homeStyles.photosGalleryTitle}>Photos Gallery</Text>

        {photosData.map((photo) => (
          <TouchableOpacity key={photo.id} style={homeStyles.photoCard}>
            <Image source={photo.source} style={homeStyles.photoImage} />
            <View style={homeStyles.photoTextContainer}>
              <Text style={homeStyles.photoTitleText}>{photo.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="home-sharp" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="calendar-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="play-circle-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Videos</Text>
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

export default Photos;