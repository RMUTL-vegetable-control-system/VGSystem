import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/Login/loginPage';
import SingUpPage from './navigationTabMenu';



const Stack = createStackNavigator();

export default navigationLogin = () => {

    return (

            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false}} />
                <Stack.Screen name="SingUp" component={SingUpPage} options={{ headerShown: false}}/>
            </Stack.Navigator>

    );
};