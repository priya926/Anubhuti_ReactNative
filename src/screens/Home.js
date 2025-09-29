import React, { useState } from "react";
import {View,Text,Dimensions,ScrollView,Image,TouchableOpacity} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import homeStyles from "../styles/homeStyles";

const { width } = Dimensions.get("window");

const coaches = [
  { name: 'Abhishek Yadav', role: 'Selection Committee', image: require('../assets/coach1.png') },
  { name: 'Ashok Shinde', role: 'Air-India Flight Purser', image: require('../assets/coach2.png') },
  { name: 'Banani Shah', role: 'NIS Coach', image: require('../assets/coach3.png') },
  { name: 'BC Ramesh', role: 'Head Coach of Bengal', image: require('../assets/coach4.png') },
  { name: 'Bhaskaran E', role: 'CAPT. Bhaskarane', image: require('../assets/coach5.png') },
  { name: 'Dr G R Sridhar Kumar', role: 'Chief Kabaddi Coach', image: require('../assets/coach6.png') },
  { name: 'Dr G R Sridhar Kumar', role: 'Chief Kabaddi Coach', image: require('../assets/coach6.png') },
  { name: 'Dr G R Sridhar Kumar', role: 'Chief Kabaddi Coach', image: require('../assets/coach6.png') },
];

const referees = [
  { name: 'Sharafat Ali', role: 'Technical Official', image: require('../assets/ref1.png') },
  { name: 'Abdul Jabbar', role: 'Physical Instructor', image: require('../assets/ref2.png') },
  { name: 'Sunil Kumar', role: 'Technical Official', image: require('../assets/ref3.png') },
  { name: 'S Raju', role: 'Engineer at Shree cement', image: require('../assets/ref4.png') },
  { name: 'Vikram', role: 'Technical Official', image: require('../assets/ref5.png') },
  { name: 'Angrej Singh', role: 'Punjab Kabaddi Association', image: require('../assets/ref6.png') },
  { name: 'Angrej Singh', role: 'Punjab Kabaddi Association', image: require('../assets/ref6.png') },
  { name: 'Angrej Singh', role: 'Punjab Kabaddi Association', image: require('../assets/ref6.png') },
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
              source={require("../assets/player1.png")}
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

            <TouchableOpacity
              style={homeStyles.categoryItem}
               onPress={() => navigation.navigate('OlympicsScreen')}
            >
              <Icon name="medal-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Olympic</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.categoryItem}
               onPress={() => navigation.navigate('WrestlerProfileScreen')}
            >
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
            <TouchableOpacity
              style={homeStyles.categoryItem}
               onPress={() => navigation.navigate('Dangal')}
            >
              <Icon name="trophy-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Dangal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.categoryItem}
               onPress={() => navigation.navigate('Photos')}
            >
              <Icon name="images-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Photos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.navItem}
               onPress={() => navigation.navigate('TeamsScreen')}
            >
              <Icon name="people-outline" size={28} color="#fff" />
              <Text style={homeStyles.navText}>Teams</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.categoryItem}
               onPress={() => navigation.navigate('Shop')}
            >
              <Icon name="storefront-outline" size={28} color="#fff" />
              <Text style={homeStyles.categoryText}>Shop</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('LatestUpdate')}>
            <Text style={homeStyles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>


        <View style={{ height: 100 }}></View>
      </ScrollView>


          <View style={homeStyles.bottomNav}>
            <TouchableOpacity style={homeStyles.navItem}>
              <Icon name="home" size={24} color="#FD721D" />
              <Text style={homeStyles.navTextActive}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.navItem}
               onPress={() => navigation.navigate('Event')}
            >
              <Icon name="calendar-outline" size={24} color="#fff" />
              <Text style={homeStyles.navText}>Event</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={homeStyles.navLive}
               onPress={() => navigation.navigate('Live')}
            >
              <Icon name="radio-outline" size={28} color="#fff" />
              <Text style={homeStyles.navTextLive}>Live</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={homeStyles.navItem}
               onPress={() => navigation.navigate('Videos')}
            >
              <Icon name="play-circle-outline" size={24} color="#fff" />
              <Text style={homeStyles.navText}>Videos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.navItem}
               onPress={() => navigation.navigate('MoreScreen')}
            >
              <Icon name="menu-outline" size={24} color="#fff" />
              <Text style={homeStyles.navText}>More</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

export default Home;