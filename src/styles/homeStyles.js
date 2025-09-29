import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D2D92",
  },
  container: {
    backgroundColor: "#2D2D92",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#2D2D92",
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
  icon: {
    marginRight: 10,
  },
  bannerWrapper: {
    height: 250,
//    width: 100,
    backgroundColor: "#2D2D92",
  },
  swiperContainer: {
    height: 180,
  },
  banner: {
    width: width - 20,
    height: "100%",
    borderRadius: 10,
    alignSelf: "center",
  },
  dot: {
    backgroundColor: "rgba(255,255,255,.3)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#FD721D",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  categoryContainer: {
    paddingHorizontal: 5,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  categoryItem: {
    width: width / 5,
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  congratsBanner: {
    width: width - 30,
    height: 230,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 25,
  },
  newsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  viewAll: {
    color: "#FD721D",
    fontSize: 14,
  },
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
  navLive: {
    backgroundColor: "#FD721D",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    borderWidth: 4,
    borderColor: "#2D2D92",
  },
  navTextLive: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },


  welcomeContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingTop: 50,
      paddingBottom: 15,
    },
    welcomeText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
    },
    userName: {
      fontSize: 14,
      color: "#aaa",
    },
    profileBtn: {
      backgroundColor: "#FD721D",
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    profileBtnText: {
      color: "#fff",
      fontSize: 12,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#1E1E70",
      borderRadius: 5,
      marginHorizontal: 15,
      paddingHorizontal: 15,
      height: 40,
      marginTop: 10,
      marginBottom:20,
      justifyContent: "space-between",
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      color: "#fff",
    },
     adBannerContainer: {
     marginBottom:20,
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#FD721D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 150,
  },
  adTextContent: {
    flex: 1,
    marginRight: 10,
  },
  adHeadline: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 2,
  },
  adTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  adShopButton: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  adShopButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  adShoeImage: {
    width: width * 0.4,
    height: 100,
    transform: [{ rotate: '-35deg' }],

  },

    newsList: {
      paddingHorizontal: 15,
      marginBottom: 20,
    },
    newsCard: {
      width: 250,
      marginRight: 15,
      backgroundColor: "#1E1E70",
      borderRadius: 5,
      padding: 10,
    },
    newsImages: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
    },
    newsImage: {
      width: 70,
      height: 90,
//      borderRadius: 5,
    },
    fullNewsImage: {
      width: "100%",
      height: 100,
      borderRadius: 5,
      marginBottom: 10,
    },
    newsTitle: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
    },
    newsMeta: {
      flexDirection: "row",
      alignItems: "center",
    },
    newsMetaText: {
      color: "#aaa",
      fontSize: 12,
      marginLeft: 5,
    },
    bottomNav: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#1E1E70",
      height: 60,
      borderTopColor: "rgba(255,255,255,0.1)",
      borderTopWidth: 1,
      paddingHorizontal: 10,
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
    latestUpdateContainer: {
      paddingHorizontal: 15,
      flexGrow: 1,
      paddingBottom: 70, // To prevent bottom nav from covering content
    },
    latestUpdateTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 15,
      marginBottom: 20,
      textAlign: 'left',
    },
    latestUpdateDropdowns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    latestUpdateDropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      paddingHorizontal: 15,
      paddingVertical: 10,
      width: (width - 45) / 2, // 15*3 padding
      justifyContent: 'space-between',
    },
    latestUpdateDropdownText: {
      color: '#fff',
      fontSize: 14,
    },
    latestUpdateNewsCard: {
      marginBottom: 15,
      borderRadius: 8,
      overflow: 'hidden',
      position: 'relative',
    },
    latestUpdateNewsImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    latestUpdateNewsOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      justifyContent: 'flex-end',
      padding: 15,
    },
    latestUpdateNewsTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    latestUpdateNewsMeta: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    latestUpdateMetaText: {
      color: '#FD721D',
      fontSize: 12,
      marginHorizontal: 5,
    },
    dangalContainer: {
      paddingHorizontal: 15,
      flexGrow: 1,
      paddingBottom: 80, // Space for the bottom nav
    },
    dangalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    dangalDropdowns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    dangalDropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 10,
      width: (width - 60) / 3, // 15*4 padding for space
      justifyContent: 'space-between',
    },
    dangalDropdownText: {
      color: '#fff',
      fontSize: 12,
    },
    dangalMatchCard: {
      backgroundColor: '#4C4CC2',
      borderRadius: 5,
      marginBottom: 20,
      padding: 15, // Padding for the image and text
    },
    dangalMatchImage: {
      width: '100%',
      height: width * 0.5, // Adjust height based on aspect ratio
      borderRadius: 10,
      marginBottom: 15, // Space between image and location text
    },
    dangalLocationSection: {
      flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'left',
    },
    locationText: {
      color: '#fff',
      fontSize: 14,
      marginLeft: 5,
    },
    // Add these new styles to your existing homeStyles.js file

    floatingActionButton: {
      position: 'absolute',
      bottom: 80, // Adjust this value to control distance from the bottom nav
      right: 25,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FD721D', // Use the orange accent color
      elevation: 5, // Adds a shadow on Android
      shadowColor: '#000', // Adds a shadow on iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
    },
    floatingActionButtonImage: {
      width: 28,
      height: 28,
      tintColor: '#fff', // Use tintColor to make the plus sign white
    },
    addDangalHeaderTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1, // Allow title to take up available space
      textAlign: 'center',
      marginLeft: -30, // Adjust this if the logo pushes it too far
    },
    addDangalContainer: {
      padding: 15,
      flexGrow: 1,
      paddingBottom: 80, // Space for the bottom nav
    },
    addDangalDropdownsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    addDangalDropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      paddingHorizontal: 15,
      paddingVertical: 12,
      width: (width - 45) / 2, // 15*3 padding, for two items
      justifyContent: 'space-between',
    },
    addDangalDateDropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      paddingHorizontal: 15,
      paddingVertical: 12,
      marginBottom: 20,
      justifyContent: 'space-between',
    },
    addDangalDropdownText: {
      color: '#fff',
      fontSize: 14,
    },
    addDangalLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    addDangalImageUploadBox: {
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#FD721D', // Orange border
      borderStyle: 'dashed', // Dashed border
    },
    addDangalUploadedImage: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
      resizeMode: 'cover',
    },
    addDangalUploadText: {
      color: '#FD721D',
      fontSize: 14,
      marginTop: 10,
    },
    addDangalTextInput: {
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      color: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 12,
      fontSize: 14,
      marginBottom: 20,
    },
    addDangalDescriptionInput: {
      height: 120, // Increased height for description
      textAlignVertical: 'top', // Aligns text to the top for multiline input
    },
    addDangalButton: {
      backgroundColor: '#FD721D',
      borderRadius: 8,
      paddingVertical: 15,
      alignItems: 'center',
      marginTop: 20,
    },
    addDangalButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    photosContainer: {
      paddingHorizontal: 15,
      flexGrow: 1,
      paddingBottom: 80, // Space for the bottom nav
    },
    photosGalleryTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 15,
      marginBottom: 20,
    },
    photoCard: {
      flexDirection: 'row',
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      marginBottom: 15,
      overflow: 'hidden',
    },
    photoImage: {
      width: 120, // Fixed width for the image
      height: 120, // Fixed height for the image
      resizeMode: 'cover',
    },
    photoTextContainer: {
      flex: 1, // Takes up the remaining space
      padding: 10,
      justifyContent: 'center', // Center text vertically
    },
    photoTitleText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 20, // Ensures proper spacing for multi-line text
    },
    // Add these new styles to your existing homeStyles.js file

    homeScrollView: {
      paddingVertical: 15,
      flexGrow: 1,
      paddingBottom: 80,
    },
    homeSection: {
      marginBottom: 20,
    },
    homeSectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    homeSectionTitleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    horizontalScrollView: {
      paddingHorizontal: 15,
    },
    homeVideoCard: {
      backgroundColor: '#1E1E70',
      borderRadius: 8,
      width: width * 0.85, // Adjust width to show a portion of the next card
      marginRight: 15,
      overflow: 'hidden',
    },
    homeVideoThumbnailContainer: {
      position: 'relative',
      height: 200,
      width: '100%',
    },
    homeVideoThumbnail: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    homePlayIconContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#FD721D',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -25 }, { translateY: -25 }],
    },
    homeVideoContent: {
      padding: 15,
    },
    homeVideoTitle: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    homeVideoMetaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    homeVideoMetaText: {
      color: '#fff',
      fontSize: 12,
      marginLeft: 5,
    },
    homeShareButton: {
      marginLeft: 'auto',
    },
    teamsScrollView: {
        paddingHorizontal: 15,
        flexGrow: 1,
        paddingBottom: 80, // Space for the bottom nav
      },
      teamDropdownsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      teamDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E70',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: (width - 45) / 2, // 15*3 padding
        justifyContent: 'space-between',
      },
      teamDropdownText: {
        color: '#fff',
        fontSize: 14,
      },
      teamCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E70',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
      },
      teamCardLogo: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        marginRight: 15,
      },
      teamCardTextContainer: {
        flex: 1,
      },
      teamCardTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      teamCardSubtitle: {
        color: '#aaa',
        fontSize: 12,
        marginTop: 2,
      },
      // Add these new styles to your existing homeStyles.js file
      liveScrollView: {
        paddingHorizontal: 15,
        flexGrow: 1,
        paddingBottom: 80, // Space for the bottom nav
      },
      liveTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
        marginBottom: 20,
      },
      liveVideoCard: {
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
      },
      liveVideoThumbnail: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      },
      liveBadgeContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'row',
      },
      liveBadge: {
        backgroundColor: '#D10000',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 5,
      },
      liveBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
      },
      liveViewersBadge: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
      },
      liveViewersText: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 5,
      },
      // ShopScreen Styles (Add to homeStyles.js)
        shopScrollView: {
          paddingBottom: 80, // Space for the bottom nav
        },
        shopBannerContainer: {
          backgroundColor: '#FD721D',
          marginHorizontal: 15,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 15,
          marginBottom: 20,
          height: 150,
          overflow: 'hidden',
        },
        shopBannerTextContent: {
          flex: 1,
          marginRight: 10,
        },
        shopBannerHeadline: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        shopBannerTitle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        shopBannerSubtitle: {
          color: '#fff',
          fontSize: 14,
          marginBottom: 10,
        },
        shopShopButton: {
          backgroundColor: 'white',
          paddingVertical: 8,
          paddingHorizontal: 15,
          borderRadius: 5,
          alignSelf: 'flex-start',
        },
        shopShopButtonText: {
          color: '#FD721D',
          fontSize: 14,
          fontWeight: 'bold',
        },
        shopBannerImage: {
          width: width * 0.35, // Adjust width based on screen size
          height: 140,
        },
        shopSection: {
          paddingHorizontal: 15,
          marginBottom: 20,
        },
        shopSectionHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        },
        shopSectionTitleText: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
        },
        shopProductsRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        shopProductCard: {
          width: (width - 45) / 2, // 15*3 padding
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 10,
          alignItems: 'center',
        },
        shopProductImage: {
          width: '90%',
          height: 100,
          marginBottom: 10,
        },
        shopProductTitle: {
          color: '#fff',
          fontSize: 12,
          textAlign: 'center',
          marginBottom: 5,
          height: 30, // Ensures consistent height for text
        },
        shopProductPrice: {
          color: '#FD721D',
          fontSize: 16,
          fontWeight: 'bold',
        },
        // Add these new styles to your existing homeStyles.js file
          academiesScrollView: {
            paddingHorizontal: 15,
            flexGrow: 1,
            paddingBottom: 80,
          },
          academiesFiltersContainer: {
            marginBottom: 20,
          },
          academiesDropdownsTop: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          },
          academiesDropdownsBottom: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          academiesSearchInputContainer: {
            flex: 1,
            backgroundColor: '#1E1E70',
            borderRadius: 8,
            paddingHorizontal: 15,
            marginRight: 10,
            justifyContent: 'center',
          },
          academiesSearchInput: {
            color: '#fff',
          },
          academiesDropdown: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#1E1E70',
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 12,
            width: (width - 45) / 2,
            justifyContent: 'space-between',
          },
          academiesDropdownText: {
            color: '#fff',
            fontSize: 14,
          },
          academiesApplyButton: {
            flex: 1,
            backgroundColor: '#FD721D',
            borderRadius: 8,
            paddingVertical: 12,
            alignItems: 'center',
            marginLeft: 10,
          },
          academiesApplyButtonText: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold',
          },
          academyCard: {
            backgroundColor: '#1E1E70',
            borderRadius: 8,
            marginBottom: 15,
            overflow: 'hidden',
          },
          academyImage: {
            width: '100%',
            height: 200,
            resizeMode: 'cover',
          },
          academyLocationBadge: {
            position: 'absolute',
            top: 10,
            left: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#1E1E70',
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 5,
          },
          academyLocationText: {
            color: '#fff',
            fontSize: 12,
            marginLeft: 5,
          },
          academyName: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            padding: 15,
          },


});

export default homeStyles;