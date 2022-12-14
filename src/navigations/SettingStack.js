import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import pages 
import AboutScreen from "../screens/AboutScreen";
import SettingScreen from "../screens/SettingScreen";
import BadgesScreen from "../screens/BadgesScreen";
import EditInformation from "../screens/EditInformation";
import FollowingScreen from "../screens/FollowingScreen";

const Stack = createStackNavigator();

const SettingStack = () => {
  return(
    <Stack.Navigator
      initialRouteName="MainSettingScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1B1B1B',
          height: 100,
        },
        headerTintColor: '#FFF',
        headerTintColor: '#A9A9A9',
        headerMode: 'screen',
        headerTitleStyle: {
          textTransform: 'capitalize'
        }
      }}
    >
      <Stack.Screen
        name="MainSettingScreen"
        component={SettingScreen}
        options={{
          headerShown: false
      }} />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerLeftLabelVisible: false,
          title: 'About the Application'
        }}
      />
      <Stack.Screen
        name="BadgesScreen"
        component={BadgesScreen}
        options={{
          headerLeftLabelVisible: false,
          title: 'Your Badges'
        }}
      />
      <Stack.Screen
        name="EditInformationScreen"
        component={EditInformation}
        options={{
          headerLeftLabelVisible: false,
          title: 'Edit Information'
        }}
      />
      <Stack.Screen
        name="FollowingScreen"
        component={FollowingScreen}
        options={{
          headerLeftLabelVisible: false,
          title: 'Following'
        }}
      />
    </Stack.Navigator>
  );
}

module.exports = SettingStack;