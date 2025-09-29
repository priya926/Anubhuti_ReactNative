import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import homeStyles from "../styles/homeStyles";
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

// --- Mock Data (Keep this data simple) ---
const supplementsData = [
  { id: '1', name: 'Diet & Sports Nutrition', price: '$50.00', image: require('../assets/shop2.png') },
  { id: '2', name: 'Nike Men\'s Zoom Winflo 8 Running', price: '$50.00', image: require('../assets/shop3.png') },
];

const sportsWearData = [
  { id: '3', name: 'Nike Men\'s Zoom Winflo 8 Running', price: '$50.00', image: require('../assets/shop4.png') },
  { id: '4', name: 'Nike Men\'s Zoom Winflo 8 Running', price: '$50.00', image: require('../assets/shop5.png') },
];

const Shop = ({ navigation }) => {
  // Simple component for rendering a single product card
  const ProductCard = ({ product }) => (
    <TouchableOpacity style={homeStyles.shopProductCard}>
      <Image
        source={product.image}
        style={homeStyles.shopProductImage}
        resizeMode="contain"
      />
      <Text style={homeStyles.shopProductTitle}>{product.name}</Text>
      <Text style={homeStyles.shopProductPrice}>{product.price}</Text>
    </TouchableOpacity>
  );

  // Simple component for rendering a product section (Supplement/Sportswear)
  const ProductSection = ({ title, data }) => (
    <View style={homeStyles.shopSection}>
      <View style={homeStyles.shopSectionHeader}>
        <Text style={homeStyles.shopSectionTitleText}>{title}</Text>
        <MaterialIcons name="arrow-forward" size={24} color="#FD721D" />
      </View>
      <View style={homeStyles.shopProductsRow}>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      {/* Header */}
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

      <ScrollView contentContainerStyle={homeStyles.shopScrollView}>
        {/* Top Promotional Banner */}
        <View style={homeStyles.shopBannerContainer}>
          <View style={homeStyles.shopBannerTextContent}>
            <Text style={homeStyles.shopBannerHeadline}>Cyber Monday</Text>
            <Text style={homeStyles.shopBannerTitle}>20% OFF</Text>
            <Text style={homeStyles.shopBannerSubtitle}>24 Hours Only</Text>
            <TouchableOpacity style={homeStyles.shopShopButton}>
              <Text style={homeStyles.shopShopButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/shop1.png')} // Replace with your image
            style={homeStyles.shopBannerImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Sections */}
        <ProductSection title="Supplement" data={supplementsData} />
        <ProductSection title="Sports Wear" data={sportsWearData} />

      </ScrollView>

      {/* Bottom Navigation (Reusing existing style) */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="home" size={24} color="#FD721D" />
          <Text style={homeStyles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
          <MaterialCommunityIcons name="play-circle-outline" size={24} color="#fff" />
          <Text style={homeStyles.navText}>Videos</Text>
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

export default Shop;