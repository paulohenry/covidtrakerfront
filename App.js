import React from 'react';
import {StatusBar} from 'react-native'
import Router from './src/routes/router'

export default function App() {
  StatusBar.setHidden(true)
  return (
   <Router/>
  );
}

