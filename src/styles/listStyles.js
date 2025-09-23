import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const listStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginTop: 20,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  card: {
    width: (width / 2) - 20, // 2 cards per row with margin
    backgroundColor: "#2D2D92",
    borderRadius: 5,
    borderColor:"#4C4CC2",
    borderWidth:0.5,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: 'none',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  role: {
    fontSize: 12,
    color: "#ccc",
    textAlign: "center",
    marginTop: 5,
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
  navLive: {
    backgroundColor: "#FD721D",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 15,
    borderWidth: 4,
    borderColor: "#1D1D57",
  },
  navTextLive: {
    color: "#fff",
    fontSize: 10,
    marginTop: 5,
  },
});

export default listStyles;