import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  AsyncStorage,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "react-native-elements";
import cristo from "../../assets/cristo.png";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import styles from "./styles";
// import { Container } from './styles';

import keys from '../../temporaryStorage/keys'
import * as Device from 'expo-device'
import api from '../../services/api'

export default function Login() {
  
  const[celular, setCelular] = useState('')
  const[senha, setSenha] = useState('')
  const[errorMsg, setErrorMsg] = useState(null)

  //quando tiver o backend lembre de limpar todas as chaves ao entrar em lo0gin

  useEffect(() => {
    setCelular(celular);
    setSenha(senha);
  }, [celular, senha]);

  const nav = useNavigation();

  const signIn = async()=>{
    
    try{
    const response = await api.post('/session/', {
      celular:celular,
      senha:senha
     })
        console.log(response.data.token,response.data.user.id)
         await AsyncStorage.setItem(keys.token, JSON.stringify(response.data.token))
         await AsyncStorage.setItem(keys.user_id,  JSON.stringify(response.data.user.id))        
         
        nav.navigate('Maps')
         Alert.alert('Covidtracker', 'Logado com sucesso')
        
    }catch(error){
       
      Alert.alert('CovidTracker', error.response.data.message)  
    }
   }    
  

  const navigationTo = async (screen) => {
    nav.navigate(screen);
  };

   return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={-150}
      behavior="position"
      enabled
    >
      <ImageBackground source={cristo} style={styles.background}>
        <LinearGradient
          colors={["rgba(2,157,100, 1)", "transparent"]}
          style={styles.background}
        >
          <View style={styles.imgContainer}>
            <Text style={styles.textlogo}>COVIDTRACKER</Text>

            <Ionicons
              style={styles.icon}
              name="md-pin"
              size={82}
              color="white"
            />
          </View>

          <View style={styles.loginContainer}>
            {/* {<Input
              style={styles.inputs}
              value={celular}
              onChangeText={setCelular}
              placeholder="Insira o celular cadastrado"
            />} */}
            {/* <TextInputMask
              type={"cel-phone"}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              value={celular}
              placeholder='Insira o celular cadastrado'
              onChangeText={text => setCelular(text)  }
              style={styles.inputMasked}
            /> */}
            <Input
              style={styles.inputs}
              value={celular}
              onChangeText={setCelular}
             
              keyboardType="number-pad"
              placeholder="Celular usado no cadastro"
            />
            <Input
              style={styles.inputs}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
              keyboardType="number-pad"
              placeholder="Senha de acesso cadastrada"
            />
            <TouchableOpacity
              style={styles.buttonEntrar}
              onPress={()=>{signIn()}}
            >
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.containerRegister}
            onPress={() => {
              navigationTo("HowToWork");
            }}
          >
            <Text style={styles.registerText}>Ainda nao tenho cadastro</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
