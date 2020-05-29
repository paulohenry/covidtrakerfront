import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login/";
import { AsyncStorage } from "react-native";
import HowtoWork from "../pages/HowtoWork";

import Terms from "../pages/Terms";
import Termos from "../pages/Termos/index";
import Pergunta1 from "../pages/Registers/Pergunta1";
import Pergunta2 from "../pages/Registers/Pergunta2";
import Pergunta3 from "../pages/Registers/Pergunta3";
import Pergunta4 from "../pages/Registers/Pergunta4";
import Pergunta5 from "../pages/Registers/Pergunta5";
import Pergunta5A from "../pages/Registers/Pergunta5A";
import Pergunta6 from "../pages/Registers/Pergunta6";
import Pergunta6A from "../pages/Registers/Pergunta6A";
import Pergunta7 from "../pages/Registers/Pergunta7";
import Pergunta8 from "../pages/Registers/Pergunta8";
import Pergunta9 from "../pages/Registers/Pergunta9";
import Pergunta10 from "../pages/Registers/Pergunta10";
import Pergunta11 from "../pages/Registers/Pergunta11";
import Pergunta12 from "../pages/Registers/Pergunta12";
import Pergunta13 from "../pages/Registers/Pergunta13";
import Pergunta14 from "../pages/Registers/Pergunta14";
import Pergunta15 from "../pages/Registers/Pergunta15";
import Pergunta16 from "../pages/Registers/Pergunta16";
import Pergunta17 from "../pages/Registers/Pergunta17";
import Pergunta18 from "../pages/Registers/Pergunta18";
import Pergunta19 from "../pages/Registers/Pergunta19";
import Pergunta20 from "../pages/Registers/Pergunta20";

import Maps from "../pages/Maps";
import Profile from "../pages/Profile";
import Politicas from "../pages/Politicas";
import ConfirmRegister from "../pages/ConfirmRegister";
import UserData from "../pages/Registers/UserData/index";
import AlertScreen from "../pages/Registers/Alert";

import keys from "../temporaryStorage/keys";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true, headerTitle: "" }}
        initialRouteName='Maps'
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="ConfirmRegister"
          component={ConfirmRegister}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Terms"
          component={Terms}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Termos"
          component={Termos}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Politicas"
          component={Politicas}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HowToWork"
          component={HowtoWork}
        />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="Pergunta1" component={Pergunta1} />
        <Stack.Screen name="Pergunta2" component={Pergunta2} />
        <Stack.Screen name="Pergunta3" component={Pergunta3} />
        <Stack.Screen name="Pergunta4" component={Pergunta4} />
        <Stack.Screen name="Pergunta5" component={Pergunta5} />
        <Stack.Screen name="Pergunta5A" component={Pergunta5A} />
        <Stack.Screen name="Pergunta6" component={Pergunta6} />
        <Stack.Screen name="Pergunta6A" component={Pergunta6A} />
        <Stack.Screen name="Pergunta7" component={Pergunta7} />
        <Stack.Screen name="Pergunta8" component={Pergunta8} />
        <Stack.Screen name="Pergunta9" component={Pergunta9} />
        <Stack.Screen name="Pergunta10" component={Pergunta10} />
        <Stack.Screen name="Pergunta11" component={Pergunta11} />
        <Stack.Screen name="Pergunta12" component={Pergunta12} />
        <Stack.Screen name="Pergunta13" component={Pergunta13} />
        <Stack.Screen name="Pergunta14" component={Pergunta14} />
        <Stack.Screen name="Pergunta15" component={Pergunta15} />
        <Stack.Screen name="Pergunta16" component={Pergunta16} />
        <Stack.Screen name="Pergunta17" component={Pergunta17} />
        <Stack.Screen name="Pergunta18" component={Pergunta18} />
        <Stack.Screen name="Pergunta19" component={Pergunta19} />
        <Stack.Screen name="Pergunta20" component={Pergunta20} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Maps"
          component={Maps}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
