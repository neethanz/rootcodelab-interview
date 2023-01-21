/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
} from 'react-native';
import BrandLogo from '../../assets/images/brand_logo.png';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.brandLogoContainer}>
        <Image source={BrandLogo} style={styles.brandLogo} />
      </View>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Forgot your password?</Text>

      <Button title="Login" onPress={() => {}} />
      <Text>Continue with</Text>
      <View style={{height: 100, backgroundColor: 'red'}}></View>
      <Text>Continue with</Text>
      <Text>Not have a account yet? Join us</Text>
    </View>
  );
}

export default LoginScreen;

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
    borderRadius: 12,
    borderColor: 'black',
  },
});
