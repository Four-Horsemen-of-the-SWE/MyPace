import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MYPACE_API } from "@env";

// import style
import styles from '../styles';
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const _storeData = async (data) => {
    try {
      await AsyncStorage.setItem('@Token', data);
      navigation.navigate('App');
    } catch(err) {
      console.log(err);
    }
  }

  const Login = ({ }) => {
    axios.post(`http://10.10.10.112:3000/login`, {
      username: username,
      password: password
    })
    .then((response) => {
      if(response.data.status === 'ok') {
        _storeData(response.data.token);
      } else {
        alert('failed to login');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={{display: 'flex', justifyContent: 'flex-start', height: '100%'}}>
      <Text style={styles.title}>Login</Text>
        <View>
          <TextInput 
            style={styles.textInput}
            onChangeText={setUsername}
            value={username}
            placeholderTextColor="#A9A9A9"
            placeholder="Username" />

          <TextInput 
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            placeholder="Password" />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={Login}
          >
            <Text style={styles.buttonLabel}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}