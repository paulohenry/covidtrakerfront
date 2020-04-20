import React from 'react';
import {StatusBar, Platform} from 'react-native'
import Router from './src/routes/router'
import  {AsyncStorage} from 'react-native'
export default function App() {

    async function i(){
      const a = await AsyncStorage.getItem('ID-DEVICE')
      console.log(a)
    }
    i()
    
  StatusBar.setHidden(true)
  return (
   <Router/>
  );
}

