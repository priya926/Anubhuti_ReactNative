import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import homeStyles from "../styles/homeStyles"; // Adjust path if necessary
// You might need to install a date picker library, e.g., @react-native-community/datetimepicker
// and an image picker library, e.g., expo-image-picker or react-native-image-picker

const { width } = Dimensions.get('window');

const AddDangal = ({ navigation }) => {
  const [selectedState, setSelectedState] = useState('State');
  const [selectedDistrict, setSelectedDistrict] = useState('District');
  const [selectedDate, setSelectedDate] = useState('Date'); // Or a proper Date object
  const [imageUri, setImageUri] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleImageUpload = () => {
    // Implement image picking logic here (e.g., using expo-image-picker)
    // For now, let's just show an alert
    Alert.alert("Upload Image", "Image upload functionality coming soon!");
    // Example:
    /*
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
    */
  };

  const handleDateSelection = () => {
    // Implement date picking logic here (e.g., using @react-native-community/datetimepicker)
    // For now, let's just show an alert
    Alert.alert("Select Date", "Date selection functionality coming soon!");
    // Example:
    /*
    // Assuming you have a date picker visible state
    setShowDatePicker(true);
    */
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      selectedState,
      selectedDistrict,
      selectedDate,
      imageUri,
      location,
      description,
    });
    Alert.alert("Dangal Added", "Your Dangal entry has been submitted!");
    // Typically, you would send this data to a backend
    // and then navigate back or to a confirmation page.
    navigation.goBack();
  };

  return (
    <SafeAreaView style={homeStyles.mainContainer}>
      {/* Header */}
      <View style={homeStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require("../assets/logo.png")} // Make sure this path is correct
          style={homeStyles.logo}
        />
        <Text style={homeStyles.addDangalHeaderTitle}>Add Dangal</Text>
        <View style={homeStyles.headerIcons}> {/* Placeholder for spacing */}
          <Icon name="search" size={24} color="transparent" />
          <Icon name="notifications" size={24} color="transparent" />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={homeStyles.addDangalContainer}>
        {/* Dropdowns */}
        <View style={homeStyles.addDangalDropdownsContainer}>
          <TouchableOpacity style={homeStyles.addDangalDropdown}>
            <Text style={homeStyles.addDangalDropdownText}>{selectedState}</Text>
            <Icon name="chevron-down" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.addDangalDropdown}>
            <Text style={homeStyles.addDangalDropdownText}>{selectedDistrict}</Text>
            <Icon name="chevron-down" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={homeStyles.addDangalDateDropdown} onPress={handleDateSelection}>
          <Text style={homeStyles.addDangalDropdownText}>{selectedDate}</Text>
          <Icon name="calendar-outline" size={18} color="#fff" />
        </TouchableOpacity>

        {/* Image Upload Section */}
        <Text style={homeStyles.addDangalLabel}>Image</Text>
        <TouchableOpacity style={homeStyles.addDangalImageUploadBox} onPress={handleImageUpload}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={homeStyles.addDangalUploadedImage} />
          ) : (
            <>
              <Icon name="cloud-upload-outline" size={50} color="#FD721D" />
              <Text style={homeStyles.addDangalUploadText}>Upload Image Here</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Location Input */}
        <Text style={homeStyles.addDangalLabel}>Location</Text>
        <TextInput
          style={homeStyles.addDangalTextInput}
          placeholder="type here"
          placeholderTextColor="#9a9a9a"
          value={location}
          onChangeText={setLocation}
        />

        {/* Description Input */}
        <Text style={homeStyles.addDangalLabel}>Description</Text>
        <TextInput
          style={[homeStyles.addDangalTextInput, homeStyles.addDangalDescriptionInput]}
          placeholder="type here"
          placeholderTextColor="#9a9a9a"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        {/* Add Dangal Button */}
        <TouchableOpacity style={homeStyles.addDangalButton} onPress={handleSubmit}>
          <Text style={homeStyles.addDangalButtonText}>Add Dangal</Text>
        </TouchableOpacity>
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

export default AddDangal;