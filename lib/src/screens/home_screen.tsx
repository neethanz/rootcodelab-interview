/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import api from '../services/api';
import {saveUser} from '../../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';

function HomeScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  // const {uid} = useSelector((state: any) => state.user);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 12}}>
          <Header
            greetings={'Good Afternoon'}
            avatarUrl={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU'
            }
          />
          <Text>Recently Played</Text>
        </View>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
          }}
          style={{width: '100%', height: 400}}
        />
        <View style={{height: 20}} />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <Image
                key={index}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
                }}
                style={{width: 100, height: 100}}
              />
            );
          }}
        />
        <View style={{height: 20}} />

        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <Image
                key={index}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
                }}
                style={{width: 100, height: 100}}
              />
            );
          }}
        />
        <View style={{height: 20}} />

        {/* <ScrollView horizontal={true}>
       

      {/* <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
          }}
          style={{width: 100, height: 100}}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
          }}
          style={{width: 100, height: 100}}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
          }}
          style={{width: 100, height: 100}}
        /> */}
        {/* </ScrollView> */}

        {/* <ScrollView contentContainerStyle={{flex: 1}}> */}
        {/* <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'red',
              marginBottom: 10,
            }}></View>
          <View
            style={{width: 200, height: 200, backgroundColor: 'red'}}></View>
          <View
            style={{width: 200, height: 200, backgroundColor: 'red'}}></View>
          <View
            style={{width: 200, height: 200, backgroundColor: 'red'}}></View> */}

        {/* <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
          }}
          style={{width: '100%', height: 200}}
        /> */}
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

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
