import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// NOTE: In a real app, this function would use a navigation library (like React Navigation)
// to navigate to the LoginScreen. For simulation, we'll use a placeholder function.
const navigateToLoginScreen = () => {
    Alert.alert("Success", "Account deleted. Redirecting to LoginScreen.js...");
    console.log("--- Redirecting to LoginScreen.js ---");
    // Example: props.navigation.navigate('LoginScreen');
};

const DeleteConfirmationScreen = () => {

    const handleConfirmDelete = () => {
        // Here you would typically call an API to delete the account
        // and then navigate away.
        navigateToLoginScreen();
    };

    const handleCancel = () => {
        console.log("Deletion cancelled.");
        // In a real app, you would navigate back (e.g., props.navigation.goBack())
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* Header (Reusing common elements) */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleCancel}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Image
                    source={require('../assets/logo.png')} // Replace with your logo path
                    style={styles.logo}
                />
                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                        <Ionicons name="search" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="notifications" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Confirmation Modal Box */}
            <View style={styles.modalOverlay}>
                <View style={styles.confirmationBox}>
                    <MaterialCommunityIcons name="alert-circle-outline" size={50} color="#FD721D" style={styles.alertIcon} />

                    <Text style={styles.title}>
                        Are you sure you want to delete your account permanently?
                    </Text>

                    <Text style={styles.message}>
                        Press "Delete account" to remove it permanently or "Cancel" if you want to keep your benefits.
                    </Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleConfirmDelete}>
                            <Text style={styles.deleteButtonText}>Delete account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Bottom Navigation (Simplified structure) - Just for visual completeness */}
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

export default DeleteConfirmationScreen;

// --- CSS Styles for this page only ---
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2D2D92', // Dark blue background
    },

    // Header Styles
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

    // Modal Overlay and Positioning
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // Padding for the whole screen content
    },
    confirmationBox: {
        backgroundColor: '#1E1E70', // Slightly darker blue for the box
        borderRadius: 8,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },

    // Confirmation Content
    alertIcon: {
        marginBottom: 15,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    message: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 25,
        lineHeight: 20,
    },

    // Buttons Container
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    deleteButton: {
        flex: 1,
        backgroundColor: 'transparent', // Transparent background
        borderWidth: 1,
        borderColor: '#FD721D', // Orange border
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginRight: 10,
    },
    deleteButtonText: {
        color: '#FD721D',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#FD721D', // Solid orange background
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginLeft: 10,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
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