/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, StyleSheet, View, Pressable} from 'react-native';

import CustomSearchBar from '../components/search_bar';
import SongTile from '../components/song_tile';

function ExploreScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <CustomSearchBar />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          renderItem={({item, index}) => {
            return (
              <Pressable onPress={() => navigation.navigate('DetailsScreen')}>
                <SongTile
                  thumbnailUrl={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU'
                  }
                  artist={'AR Rahuman'}
                  colletion={'Roja'}
                  track={'Enna vilai Alake'}
                />
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {},
  brandLogo: {
    width: 200,
    height: 200,
  },
  brandLogoContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    // borderRadius: 12,
  },
});
