import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

const SongTile = ({thumbnailUrl, track, artist, colletion}) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: thumbnailUrl,
      }}
      style={styles.searchIcon}
    />

    <View>
      <Text style={styles.text}>{track}</Text>
      <Text style={styles.text}>{`${artist}.${colletion}`}</Text>
    </View>
    <Image
      source={require('../../assets/icons/ic_meat_balls_dark_mode.png')}
      style={styles.meat_ball_icon}
    />
  </View>
);

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    marginHorizontal: 24,
    height: 80,
    marginVertical: 4,
    padding: 8,
  },
  text: {
    color: 'white',
  },
  searchIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  meat_ball_icon: {
    width: 25,
    height: 25,
    marginRight: 20,
    position: 'absolute',
    right: 0,
  },
  searchInput: {
    flex: 1,
    padding: 5,
  },
};

export default SongTile;
