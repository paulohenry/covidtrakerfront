import React from 'react';
import { View, Text,TextInput, Button, Image, TouchableOpacity} from 'react-native';
import logo from '../../assets/covidtracker.png'
import {useNavigation} from '@react-navigation/native'
// import { Container } from './styles';

export default function Login() {
  const nav = useNavigation();

  const navigationTo = (screen)=>{
    nav.navigate(screen)
  }

  return (
    <View>
     <View>
       <Image source={logo}/>
     </View>
     <View>
       <TextInput  placeholder="Login de acesso"/>
       <TextInput secureTextEntry={true} placeholder="Senha de acesso"/>
       <Button title="Entrar" onPress={()=>{navigationTo('Maps')}}/>
     </View>
     <TouchableOpacity style={{marginTop:40}}onPress={()=>{navigationTo('Terms')}}>
       <Text>Ainda nao tenho cadastro</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{marginTop:40}}onPress={()=>{navigationTo('Dbg')}}>
       <Text>Ver dados do banco (debug)</Text>
     </TouchableOpacity>
    </View>
  );
}
