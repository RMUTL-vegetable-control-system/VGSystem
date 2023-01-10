import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Home from '../screens/HomePage/Home';
import Light from '../screens/LightControlPage/Light';
import Water from '../screens/WaterControlPage/Water';
import Video from '../screens/VideoPage/video';



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
            <MaterialCommunityIcons name="home" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Light"
        component={Light}
        options={{
          tabBarLabel: 'Light',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="light-bulb" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Water"
        component={Water}
        options={{
          tabBarLabel: 'Water',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="water" color={color} size={33} />
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
    </Tab.Navigator>
  );
}

export default function NavigationMenu() {
  return (

    <MyTabs />

  );
}
