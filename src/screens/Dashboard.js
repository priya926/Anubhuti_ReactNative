import React from "react";
import { View, ScrollView, Dimensions, Image, Text, TouchableOpacity, TextInput } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import homeStyles from "../styles/homeStyles";
import CategorySection from "../components/CategorySection";

const { width } = Dimensions.get("window");

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


        <CategorySection />


        <View style={homeStyles.adBannerContainer}>
          <View style={homeStyles.adTextContent}>
            <Text style={homeStyles.adHeadline}>Popular now</Text>
            <Text style={homeStyles.adTitle}>Nike Go Flyease</Text>
            <TouchableOpacity style={homeStyles.adShopButton}>
              <Text style={homeStyles.adShopButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../assets/nike.jpg")}
            style={homeStyles.adShoeImage}
            resizeMode="contain"
          />
        </View>


        <View style={homeStyles.newsHeader}>
          <Text style={homeStyles.sectionTitle}>News</Text>
          <TouchableOpacity>
            <Text style={homeStyles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeStyles.newsList}>
          <View style={homeStyles.newsCard}>
            <View style={homeStyles.newsImages}>
              <Image source={require("../assets/news.jpg")} style={homeStyles.newsImage} />
              <Image source={require("../assets/news.jpg")} style={homeStyles.newsImage} />
              <Image source={require("../assets/news.jpg")} style={homeStyles.newsImage} />
            </View>
            <Text style={homeStyles.newsTitle}>
              Sushil, Geeta, Sakshi: 5 Indians to Watch in Pro Wrestling League
            </Text>
            <View style={homeStyles.newsMeta}>
              <Icon name="calendar-outline" size={12} color="orange" />
              <Text style={homeStyles.newsMetaText}>Sep 13, 2022</Text>
              <Icon name="time-outline" size={12} color="orange" style={{ marginLeft: 10 }} />
              <Text style={homeStyles.newsMetaText}>5 min</Text>
            </View>
          </View>

          <View style={homeStyles.newsCard}>
            <Image source={require("../assets/news.jpg")} style={homeStyles.fullNewsImage} />
            <Text style={homeStyles.newsTitle}>
              Story of Sturdy:
              An Indian wrestler making it big
            </Text>
            <View style={homeStyles.newsMeta}>
              <Icon name="calendar-outline" size={12} color="orange" />
              <Text style={homeStyles.newsMetaText}>Sep 13, 2022</Text>
              <Icon name="time-outline" size={12} color="orange" style={{ marginLeft: 10 }} />
              <Text style={homeStyles.newsMetaText}>5 min</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="home" size={24} color="orange" />
          <Text style={homeStyles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="calendar-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.navItem}>
          <Icon name="videocam-outline" size={24} color="#fff" />
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
    </View>
  );
};

export default Dashboard;