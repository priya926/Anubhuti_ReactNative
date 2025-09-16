import React, { useState } from "react";
import {View,Text,Dimensions,ScrollView,Image,TouchableOpacity} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import homeStyles from "../styles/homeStyles";

const { width } = Dimensions.get("window");

const coaches = [
  { name: 'Abhishek Yadav', role: 'Selection Committee', image: require('../assets/bp.jpg') },
  { name: 'Ashok Shinde', role: 'Air-India Flight Purser', image: require('../assets/bp.jpg') },
  { name: 'Banani Shah', role: 'NIS Coach', image: require('../assets/bp.jpg') },
  { name: 'BC Ramesh', role: 'Head Coach of Bengal', image: require('../assets/bp.jpg') },
  { name: 'Bhaskaran E', role: 'CAPT. Bhaskarane', image: require('../assets/bp.jpg') },
  { name: 'Dr G R Sridhar Kumar', role: 'Chief Kabaddi Coach', image: require('../assets/bp.jpg') },
];

const referees = [
  { name: 'Sharafat Ali', role: 'Technical Official', image: require('../assets/bp.jpg') },
  { name: 'Abdul Jabbar', role: 'Physical Instructor', image: require('../assets/bp.jpg') },
  { name: 'Sunil Kumar', role: 'Technical Official', image: require('../assets/bp.jpg') },
  { name: 'S Raju', role: 'Engineer at Shree cement', image: require('../assets/bp.jpg') },
  { name: 'Vikram', role: 'Technical Official', image: require('../assets/bp.jpg') },
  { name: 'Angrej Singh', role: 'Punjab Kabaddi Association', image: require('../assets/bp.jpg') },
];


const Home = ({ navigation }) => {
  return (
    <View style={homeStyles.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={homeStyles.header}>
              <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <Image
                  source={require("../assets/logo.png")}
                  style={homeStyles.logo}
                />
              </TouchableOpacity>
              <View style={homeStyles.headerIcons}>
                <Icon name="search-outline" size={26} color="#fff" style={homeStyles.icon} />
                <Icon name="notifications-outline" size={26} color="#fff" />
              </View>
            </View>


        <View style={homeStyles.bannerWrapper}>
          <Swiper
            autoplay
            autoplayTimeout={3}
            showsPagination={true}
            dotStyle={homeStyles.dot}
            activeDotStyle={homeStyles.activeDot}
            containerStyle={homeStyles.swiperContainer}
          >
            <Image
              source={require("../assets/wrest.jpg")}
              style={homeStyles.banner}
              resizeMode="cover"
            />
            <Image
              source={require("../assets/flag.jpg")}
              style={homeStyles.banner}
              resizeMode="cover"
            />
            <Image
              source={require("../assets/congo.jpg")}
              style={homeStyles.banner}
              resizeMode="cover"
            />
          </Swiper>
        </View>


        <Text style={homeStyles.sectionTitle}>Category</Text>
        <View style={homeStyles.categoryContainer}>
          <View style={homeStyles.categoryRow}>

            <TouchableOpacity style={homeStyles.categoryItem}>
              <Icon name="medal-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Olympic</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.categoryItem}>
              <Icon name="person-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Wrestler</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.categoryItem}
              onPress={() => navigation.navigate('ListScreen', { title: 'Coaches', data: coaches })}
            >
              <Icon name="people-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Coaches</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.categoryItem}
              onPress={() => navigation.navigate('ListScreen', { title: 'Referees', data: referees })}
            >
              <Icon name="shield-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Referee</Text>
            </TouchableOpacity>
          </View>

          <View style={homeStyles.categoryRow}>
            <TouchableOpacity style={homeStyles.categoryItem}>
              <Icon name="trophy-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Dangal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.categoryItem}>
              <Icon name="images-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Photos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.categoryItem}>
              <Icon name="school-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Academies</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.categoryItem}>
              <Icon name="newspaper-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>News</Text>
            </TouchableOpacity>
          </View>
        </View>


        <Image
          source={require("../assets/congo.jpg")}
          style={homeStyles.congratsBanner}
          resizeMode="cover"
        />


        <View style={homeStyles.newsHeader}>
          <Text style={homeStyles.sectionTitle}>News</Text>
          <TouchableOpacity>
            <Text style={homeStyles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>


        <View style={{ height: 100 }}></View>
      </ScrollView>


      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="home" size={24} color="orange" />
          <Text style={homeStyles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="calendar-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navLive}>
          <Icon name="radio-outline" size={28} color="#fff" />
          <Text style={homeStyles.navTextLive}>Live</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="play-circle-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="menu-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;