import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { View, Text, Modal, Pressable, Alert, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import { MYPACE_API } from '@env';

// import style
import styles from '../styles';

// import components
import SettingCard from '../components/setting/SettingCard';
import LogoutButton from '../components/setting/LogoutButton';
import UserInfoCard from '../components/setting/UserInfoCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import token context
import TokenContext from "../contexts/TokenContext";
import UserContext from '../contexts/UserContext';

export default function SettingScreen({ navigation }) {
  // const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  
  // context
  const token = useContext(TokenContext).token;
  const {user, setUser} = useContext(UserContext);
  
  /*
  async function fetchUserDetails() {
    setUser(JSON.parse(await AsyncStorage.getItem('UserDetails')));
    setIsLoaded(true);
  }
  */

  useEffect(() => {
    if(user) {
      setIsLoaded(true);
    }
  }, []);

  const useCard = () => {
    if(isLoaded) {
      return <UserInfoCard user={user} />;
    } else {
      return(
        <View style={customStyles.card}>
          <ActivityIndicator />
        </View>
      );
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
      {
        useCard()
      }
      <SettingCard label='Edit Health Information' icon='account-edit' onPress={() => {navigation.navigate('EditInformationScreen')}} />
      <SettingCard label='Following' icon='account-group' onPress={() => {navigation.navigate('FollowingScreen')}} />
      <SettingCard label='Badges' icon='trophy-award' onPress={() => {navigation.navigate('BadgesScreen')}} />
      <SettingCard label='About' icon='progress-question' onPress={() => {navigation.navigate('AboutScreen')}} />
      <LogoutButton />
    </View>
  );
}

const customStyles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#3D3D3D',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  key: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 18
  },
  value: {
    color: '#D1D1D1',
    fontWeight: '800',
    fontSize: 18
  }
});