import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/HomePage/Home';
import Light from '../screens/LightControlPage/Light';
import Humidity from '../screens/HumidityPage/humidity';
import Video from '../screens/VideoPage/video';
import Profile from '../screens/ProfilePage/profile';
import Light from '../screens/LightControlPage/Light';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Switch"
      screenOptions={{
        tabBarActiveTintColor: '#08823F',
        tabBarStyle: { height: 90, paddingBottom: 30 },
        headerShown: false
      }}


    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="toggle-switch-off" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Light"
        component={Light}
        options={{
          tabBarLabel: 'Light',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Humidity"
        component={Humidity}
        options={{
          tabBarLabel: 'Humidity',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="thermometer-lines" color={color} size={33} />

          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={33} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}

export default function NavigationMenu() {
  return (

    <MyTabs />

  );
}
