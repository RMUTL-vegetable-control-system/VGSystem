import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Switch from '../screens/switch';
import SetTimePage from '../screens/setTimePage';
import Humidity from '../screens/humidity';
import Video from '../screens/video';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Switch"
      screenOptions={{
        tabBarActiveTintColor: '#08823F',
      }}
     
      
    >
      <Tab.Screen
        name="Switch"
        component={Switch}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="toggle-switch-off" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SetTimePage"
        component={SetTimePage}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Humidity"
        component={Humidity}
        options={{
          tabBarLabel: 'Humidity',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="thermometer-lines" color={color} size={size} />

          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
