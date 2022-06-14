import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/Login/loginPage';
import Navigator from './navigationTabMenu';



const Stack = createStackNavigator();

export default NavigationMain = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false}} />
                <Stack.Screen name="Menu" component={Navigator} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};