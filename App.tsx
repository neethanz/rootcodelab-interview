/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HomeScreen from './lib/src/screens/home_screen';
import LoginScreen from './lib/src/screens/login_screen';
import TabNavigator from './lib/src/tab_navigator';

function App() {
  return <TabNavigator />;
  // <SafeAreaView>
  //   <View style={styles.container}></View>
  //   <HomeScreen />
  // </SafeAreaView>
}

export default App;

const styles = StyleSheet.create({
  container: {},
});
