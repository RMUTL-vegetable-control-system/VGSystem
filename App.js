// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MAIN from './screens/Main/Main';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator>

//         </Stack.Navigator>
//       </NavigationContainer>
//     </>

//   );
// }
import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  const ref = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Empty">
          <Stack.Screen name="Empty" component={() => <View></View>} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Button
        onPress={() => ref.current && ref.current.navigate('Home')}
        title="Go home"
      />
    </View>
  );
}

export default App;
