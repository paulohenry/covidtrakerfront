import React from 'react';
import { View, Text,TextInput, Button, Image, TouchableOpacity, ImageBackground} from 'react-native';
import logo from '../../assets/covidtracker.png'
import cristo from '../../assets/cristo.png'
import {useNavigation} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
// import { Container } from './styles';

export default function Login() {
  const nav = useNavigation();
 
  const navigationTo = (screen)=>{
    nav.navigate(screen)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={cristo} style={styles.background}>
      <LinearGradient colors={['rgba(2,157,100, 1)', 'transparent']} style={styles.background}>
     <View style={styles.imgContainer}>
       <Text style={styles.textlogo}>COVIDTRACKER</Text>
       <Ionicons style={styles.icon}name="md-pin" size={82} color="white" />
     </View>
     <View style={styles.loginContainer}>
       <TextInput style={styles.inputs}  placeholder="Login de acesso"/>
       <TextInput style={styles.inputs}secureTextEntry={true} placeholder="Senha de acesso"/>
       <TouchableOpacity style={styles.buttonEntrar}onPress={()=>{navigationTo('Maps')}}>
       <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      
     </View>
     <TouchableOpacity style={styles.containerRegister}onPress={()=>{navigationTo('Terms')}}>
       <Text style={styles.registerText}>Ainda nao tenho cadastro</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{marginTop:40}}onPress={()=>{navigationTo('Dbg')}}>
       <Text>Ver dados do banco (debug)</Text>
     </TouchableOpacity>
     </LinearGradient>
     </ImageBackground>
    </View>
  );
}
