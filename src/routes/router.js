import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login/'
import Terms from '../pages/Terms'

import Pergunta1 from '../pages/Registers/Pergunta1'
import Pergunta2 from '../pages/Registers/Pergunta2'
import Pergunta3 from '../pages/Registers/Pergunta3'
import Pergunta4 from '../pages/Registers/Pergunta4'
import Pergunta5 from '../pages/Registers/Pergunta5'
import Pergunta6 from '../pages/Registers/Pergunta6'
import Pergunta7 from '../pages/Registers/Pergunta7'
import Pergunta8 from '../pages/Registers/Pergunta8'
import Pergunta9 from '../pages/Registers/Pergunta9'
import Pergunta10 from '../pages/Registers/Pergunta10'
import Pergunta11 from '../pages/Registers/Pergunta11'
import Pergunta12 from '../pages/Registers/Pergunta12'
import Pergunta13 from '../pages/Registers/Pergunta13'
import Pergunta14 from '../pages/Registers/Pergunta14'
import Pergunta15 from '../pages/Registers/Pergunta15'
import Pergunta16 from '../pages/Registers/Pergunta16'
import Pergunta17 from '../pages/Registers/Pergunta17'
import Pergunta18 from '../pages/Registers/Pergunta18'
import Pergunta19 from '../pages/Registers/Pergunta19'
import Pergunta20 from '../pages/Registers/Pergunta20'


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
        <Stack.Screen options={{headerShown:false}}  name="Maps" component={Maps} />
        <Stack.Screen options={{headerShown:false}}  name="Profile" component={Profile} />
        <Stack.Screen options={{headerShown:false}}  name="ConfirmRegister" component={ConfirmRegister} />
        <Stack.Screen options={{headerShown:false}} name="Dbg"  component={Dbg} />

        <Stack.Screen options={{headerShown:false}}  name="Pergunta1" component={Pergunta1} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta2" component={Pergunta1} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta3" component={Pergunta1} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta4" component={Pergunta4} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta5" component={Pergunta5} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta6" component={Pergunta6} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta7" component={Pergunta7} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta8" component={Pergunta8} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta9" component={Pergunta9} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta10" component={Pergunta10} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta12" component={Pergunta12} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta13" component={Pergunta13} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta14" component={Pergunta14} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta15" component={Pergunta15} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta16" component={Pergunta16} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta17" component={Pergunta17} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta18" component={Pergunta18} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta19" component={Pergunta19} />
        <Stack.Screen options={{headerShown:false}}  name="Pergunta20" component={Pergunta20} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}