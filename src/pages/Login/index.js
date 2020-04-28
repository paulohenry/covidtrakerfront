import React,{useState,useEffect} from 'react';
import { View ,Platform,AsyncStorage,Alert, Text, TouchableOpacity, ImageBackground,KeyboardAvoidingView} from 'react-native';
import { Input } from 'react-native-elements'
import cristo from '../../assets/cristo.png'
import {useNavigation} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
// import { Container } from './styles';
import keys from '../../temporaryStorage/keys'
import * as Device from 'expo-device'

export default function Login() {
  
  const[celular, setCelular] = useState('')
  const[senha, setSenha] = useState('')

  //quando tiver o backend lembre de limpar todas as chaves ao entrar em lo0gin
  
  useEffect(()=>{
      setCelular(celular)
      setSenha(senha)

  },[celular,senha])

  const nav = useNavigation();
 
  const navigationTo = async (screen)=>{
       
        nav.navigate(screen)
  
  }

  const navigationToMap = async (screen)=>{
    const celularKey = await AsyncStorage.getItem(keys.user.telefone)
    const senhaKey = await AsyncStorage.getItem(keys.user.senha)
      

    if(celular==celularKey && senha==senhaKey){

        if(Device.isDevice){
        if(Platform=='android'){
            const deviceIDandroid= Device.designName
            try{
              await AsyncStorage.setItem(keys.device.id,deviceIDandroid)
           }catch(err){
             Alert.alert('Covidtracker', 'erro ao tentar logar, entre em contato com a equipe de suport')
           }
        }else if(Platform=='ios'){
            const deviceIDiOS = Device.modelId
            try{
              await AsyncStorage.setItem(keys.device.id,deviceIDiOS)
           }catch(err){
             Alert.alert('Covidtracker', 'erro ao tentar logar, entre em contato com a equipe de suport')
           }
        }
      }         
        nav.navigate(screen)
    }else{
      Alert.alert('CovidTracker', 'celular ou Senha incorretos')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={-150} behavior="position" enabled>
      <ImageBackground source={cristo} style={styles.background}>
      <LinearGradient colors={['rgba(2,157,100, 1)', 'transparent']} style={styles.background}>
     <View style={styles.imgContainer}>
       <Text style={styles.textlogo}>COVIDTRACKER</Text>
     
       <Ionicons style={styles.icon}name="md-pin" size={82} color="white" />
     </View>
     
     <View style={styles.loginContainer}>
       <Input style={styles.inputs} value={celular} onChangeText={setCelular} placeholder="Insira o celular cadastrado"/>
       <Input style={styles.inputs} value={senha} onChangeText={setSenha}   secureTextEntry={true} placeholder="Senha de acesso cadastrada"/>
       <TouchableOpacity style={styles.buttonEntrar}onPress={()=>{navigationToMap('Maps')}}>
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
