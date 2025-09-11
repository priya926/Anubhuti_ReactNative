import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const Bdata = [
  {
    id: '1',
    name: 'Bajrang Punia',
    weight: '57 Kg',
    location: 'Haryana',
    image: require('../assets/bp.jpg'),
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    weight: '70 Kg',
    location: 'Haryana',
    icon: '🥈',
  },
  {
    id: '3',
    name: 'Rajesh Kumar',
    weight: '65 Kg',
    location: 'Haryana',
    icon: '🏀',
  },
  {
    id: '4',
    name: 'Rajesh Kumar',
    weight: '78 Kg',
    location: 'Haryana',
    icon: '🏆',
  },
  {
    id: '5',
    name: 'Rajesh Kumar',
    weight: '45 Kg',
    location: 'Haryana',
  },
];

const App = () => {
  const renderItem = ({ item, index }) => (
  <View style={styles.fullCard}>
    <View style={styles.card}>
      <Text style={styles.rank}>{index + 1}</Text>


      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
          <Text style={styles.info}>{item.weight} </Text>
          <Image
           source={{
                    uri: "https://www.iconsdb.com/icons/preview/orange/map-marker-2-xxl.png",
                  }}
                  style={styles.locIcon} />
          <Text style={[styles.info, { marginLeft: 4 }]}>{item.location}</Text>
        </View>
      </View>


      <View style={styles.mediaWrap}>
        {item.image && (
          <Image source={item.image} style={styles.userImage} />
        )}
        {item.icon && (
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>{item.icon}</Text>
          </View>
        )}


        {item.badge && (
          <View style={styles.badge}>
            <Image source={item.badge} style={styles.badgeImg} />
          </View>
        )}
      </View>
    </View>
  </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Bdata}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E70', padding: 10 },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#2D2D92',
    borderRadius: 5,
    marginBottom: 12,
    padding: 16,
  },
  fullCard:{
  justifyContent: "center",
  backgroundColor: "1E1E70",
  flex: 1,
  },
  rank: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    width: 20,
  },

  name: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  info: { color: '#e0e0e0', fontSize: 14 },
  dot: { color: 'orange' },

  locIcon: {
    width: 16,
    height: 16,
    marginLeft: 6,
    tintColor: 'orange', // will colorize location.jpg if it's black/white PNG
  },

  mediaWrap: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#473590',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 28,
    color: '#ffe165',
  },

  badge: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2D2D92',
  },
  badgeImg: { width: 18, height: 18, resizeMode: 'contain' },
});

export default App;
