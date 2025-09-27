import React from "react";
import { View, ScrollView, Dimensions, Image, Text, TouchableOpacity, TextInput } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import homeStyles from "../styles/homeStyles";
import CategorySection from "../components/CategorySection";

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



const Dashboard = ({ navigation }) => {
  return (
    <View style={homeStyles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={homeStyles.welcomeContainer}>
          <View>
            <Text style={homeStyles.welcomeText}>Welcome Back !</Text>
            <Text style={homeStyles.userName}>Anubhutiii</Text>
          </View>
          <TouchableOpacity style={homeStyles.profileBtn}>
            <Text style={homeStyles.profileBtnText}>Complete Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={homeStyles.searchContainer}>
          <Icon name="search-outline" size={20} color="#fff" style={homeStyles.searchIcon} />
          <TextInput
            style={homeStyles.searchInput}
            placeholder="Search here..."
            placeholderTextColor="#aaa"
          />
          <Icon name="notifications-outline" size={26} color="red" />
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
                      style={homeStyles.categoryItem}
                       onPress={() => navigation.navigate('Academic')}
                    >
                      <Icon name="school-outline" size={28} color="#fff" />
                      <Text style={homeStyles.categoryText}>Academies</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={homeStyles.categoryItem}
                       onPress={() => navigation.navigate('LatestUpdate')}
                    >
                      <Icon name="newspaper-outline" size={28} color="#fff" />
                      <Text style={homeStyles.categoryText}>News</Text>
                    </TouchableOpacity>
                  </View>
                </View>



        <View style={homeStyles.adBannerContainer}>
          <View style={homeStyles.adTextContent}>
            <Text style={homeStyles.adHeadline}>Popular now</Text>
            <Text style={homeStyles.adTitle}>Nike Go Flyease</Text>
            <TouchableOpacity style={homeStyles.adShopButton}>
              <Text style={homeStyles.adShopButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../assets/nike.png")}
            style={homeStyles.adShoeImage}
            resizeMode="contain"
          />
        </View>


        <View style={homeStyles.newsHeader}>
          <Text style={homeStyles.sectionTitle}>News</Text>
           <TouchableOpacity onPress={() => navigation.navigate('LatestUpdate')}>
            <Text style={homeStyles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeStyles.newsList}>
          <View style={homeStyles.newsCard}>

              <Image source={require("../assets/news.png")} style={homeStyles.fullNewsImage} />

            <Text style={homeStyles.newsTitle}>
              Sushil, Geeta, Sakshi: 5 Indians to Watch in Pro Wrestling League
            </Text>
            <View style={homeStyles.newsMeta}>
              <Icon name="calendar-outline" size={12} color="#FD721D" />
              <Text style={homeStyles.newsMetaText}>Sep 13, 2022</Text>
              <Icon name="time-outline" size={12} color="#FD721D" style={{ marginLeft: 10 }} />
              <Text style={homeStyles.newsMetaText}>5 min</Text>
            </View>
          </View>

          <View style={homeStyles.newsCard}>
            <Image source={require("../assets/news.png")} style={homeStyles.fullNewsImage} />
            <Text style={homeStyles.newsTitle}>
              Story of Sturdy:
              An Indian wrestler making it big
            </Text>
            <View style={homeStyles.newsMeta}>
              <Icon name="calendar-outline" size={12} color="#FD721D" />
              <Text style={homeStyles.newsMetaText}>Sep 13, 2022</Text>
              <Icon name="time-outline" size={12} color="#FD721D" style={{ marginLeft: 10 }} />
              <Text style={homeStyles.newsMetaText}>5 min</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="home" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="calendar-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={homeStyles.navItem}
           onPress={() => navigation.navigate('Videos')}
        >
          <Icon name="videocam-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={homeStyles.navItem}
           onPress={() => navigation.navigate('TeamsScreen')}
        >
          <Icon name="people-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Teams</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="menu-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;