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
    backgroundColor: "orange",
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
    color: "orange",
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
    color: "orange",
    fontSize: 10,
  },
  navLive: {
    backgroundColor: "orange",
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
      backgroundColor: "orange",
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
    backgroundColor: "orange",
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
      color: "orange",
      fontSize: 10,
    },
});

export default homeStyles;