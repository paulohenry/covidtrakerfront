import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login/'
import Terms from '../pages/Terms'
import Register from '../pages/Registers'
import Maps from '../pages/Maps'
import Profile from '../pages/Profile'

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}