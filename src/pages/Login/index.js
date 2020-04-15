import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground,KeyboardAvoidingView} from 'react-native';
import { Input } from 'react-native-elements'
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
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={-100} behavior="position" enabled>
      <ImageBackground source={cristo} style={styles.background}>
      <LinearGradient colors={['rgba(2,157,100, 1)', 'transparent']} style={styles.background}>
     <View style={styles.imgContainer}>
       <Text style={styles.textlogo}>COVIDTRACKER</Text>
     
       <Ionicons style={styles.icon}name="md-pin" size={82} color="white" />
     </View>
     
     <View style={styles.loginContainer}>
       <Input style={styles.inputs}  placeholder="Login de acesso"/>
       <Input style={styles.inputs}secureTextEntry={true} placeholder="Senha de acesso"/>
       <TouchableOpacity style={styles.buttonEntrar}onPress={()=>{navigationTo('Maps')}}>
       <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      
     </View>
     <TouchableOpacity style={styles.containerRegister}onPress={()=>{navigationTo('HowToWork')}}>
       <Text style={styles.registerText}>Ainda nao tenho cadastro</Text>
     </TouchableOpacity>
     
     </LinearGradient>
     </ImageBackground>
      
    </KeyboardAvoidingView>
  );
}
