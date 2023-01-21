/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function DetailsScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  // const {uid} = useSelector((state: any) => state.user);
  return (
    <ScrollView>
      <View
        style={{
          height: 700,
          backgroundColor: 'black',
          zIndex: 0,
        }}>
        <View
          style={{
            height: 300,
            backgroundColor: 'red',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 150,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}></View>
      </View>
      <View
        style={{
          height: 200,
          width: '100%',
          backgroundColor: 'white',
          zIndex: 100,
          position: 'absolute',
        }}>
        <Text>Hello</Text>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/ic_meat_balls_dark_mode.png')}
          />
          <View style={{backgroundColor: 'yellow', flexDirection: 'row'}}>
            <View style={{marginRight: 24}}>
              <Text>Genre</Text>
              <Text>Hip Hop/ Rap</Text>
            </View>
            <View>
              <Text>Country</Text>
              <Text>USA</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'pink'}}>
          <Text>Artist Name</Text>
          <Text>Collection Name</Text>
          <Text>Track Price</Text>
          <Text>Release Date</Text>
          <Text>Description</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
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
    borderRadius: 12,
    borderColor: 'black',
  },
});
