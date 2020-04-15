import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login/'
import Terms from '../pages/Terms'
import Pergunta1 from '../pages/Registers/Pergunta1'
import Maps from '../pages/Maps'
import Profile from '../pages/Profile'
import ConfirmRegister from '../pages/ConfirmRegister'
import UserData from '../pages/Registers/UserData/index'
import AlertScreen from '../pages/Registers/Alert'
import Dbg from '../pages/Dbg/index'

const Stack = createStackNavigator();


export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown:false}} name="Login"  component={Login} />
        <Stack.Screen options={{headerShown:false}}  name="Terms" component={Terms} />
        <Stack.Screen options={{headerShown:false}}  name="UserData" component={UserData} />
        <Stack.Screen options={{headerShown:false}}  name="AlertScreen" component={AlertScreen} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta1" component={Pergunta1} />
        <Stack.Screen options={{headerShown:false}}  name="Maps" component={Maps} />
        <Stack.Screen options={{headerShown:false}}  name="Profile" component={Profile} />
        <Stack.Screen options={{headerShown:false}}  name="ConfirmRegister" component={ConfirmRegister} />
        <Stack.Screen options={{headerShown:false}} name="Dbg"  component={Dbg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}