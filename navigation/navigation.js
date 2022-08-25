import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/Login/loginPage';
import SingUpPage from '../screens/Login/SingUpPage';
import Navigator from './navigationTabMenu';
import AddFarmForm from '../screens/addFarmForm';
import SetTimeLight from '../screens/LightControlPage/setTimeLight';
import ListLight from '../screens/LightControlPage/ListLight';
import SetTimeWater from '../screens/WaterControlPage/setTimeWater';
import ListWater from '../screens/WaterControlPage/ListWater';






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

                <Stack.Screen name="SetTimeLight" component={SetTimeLight } options={{ headerShown: true }} />
                <Stack.Screen name="ListLight" component={ListLight } options={{ headerShown: true }} />
                <Stack.Screen name="SetTimeWater" component={SetTimeWater } options={{ headerShown: true }} />
                <Stack.Screen name="ListWater" component={ListWater } options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};