import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/Login/loginPage';
import SingUpPage from '../screens/Login/SingUpPage';
import Navigator from './navigationTabMenu';
import AddFarmForm from '../screens/addFarmForm';





const Stack = createStackNavigator();

export default NavigationMain = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="SingUp" component={SingUpPage} options={{ headerShown: false }} />

                {/* After Login pass */}
                <Stack.Screen name="Add" component={AddFarmForm} options={{ headerShown: true }} />
                <Stack.Screen name="Menu" component={Navigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};