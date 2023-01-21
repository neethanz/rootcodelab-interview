import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home_screen';
import ExploreScreen from './screens/explore_screen';
import DetailsScreen from './screens/details_screen';

function YourLibrary() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>YourLibrary!</Text>
    </View>
  );
}

const SettingsStack = createNativeStackNavigator();

function ExploreStackScreens() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="ExploreScreen" component={ExploreScreen} />
      <SettingsStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreStackScreens}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="YourLibrary"
          component={YourLibrary}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
