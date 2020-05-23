import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  Image,
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
import Icon from "react-native-vector-icons/Entypo";
import styles from "./styles";
// import { Container } from './styles';
import Logo from '../../assets/covidtrackerLogo.png'
import keys from "../../temporaryStorage/keys";
import * as Device from "expo-device";
import api from "../../services/api";

export default function Login() {
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showIconPassword, setShowIconPassword] = useState('eye')
  const [errorMsg, setErrorMsg] = useState(null);

  //quando tiver o backend lembre de limpar todas as chaves ao entrar em lo0gin

  useEffect(() => {
    setCelular(celular);
    setSenha(senha);
  }, [celular, senha]);

  const nav = useNavigation();

  const signIn = async () => {
    try {
      const response = await api.post("/session/", {
        celular: celular,
        senha: senha,
      });
      console.log(response.data.token, response.data.user.id);
      await AsyncStorage.setItem(
        keys.token,
        JSON.stringify(response.data.token)
      );
      await AsyncStorage.setItem(
        keys.user_id,
        JSON.stringify(response.data.user.id)
      );

      nav.navigate("Maps");
      Alert.alert("Covidtracker", "Logado com sucesso");
    } catch (error) {
      Alert.alert("CovidTracker", error.response.data.message);
    }
  };

  const navigationTo = async (screen) => {
    nav.navigate(screen);
  };

  function handleShowPassword(){
    if(showIconPassword === 'eye'){
      setShowPassword(false)
      setShowIconPassword('eye-with-line')
    }else{
      setShowPassword(true)
      setShowIconPassword('eye')
    }
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={-150}
      behavior="position"
      enabled
    >
       <Image style={styles.imageLogo} source={Logo} />
         

          <View style={styles.loginContainer}>
            <TextInputMask
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "(99) ",
              }}
              value={celular}
              placeholder="  Celular cadastrado"
              onChangeText={(text) => {
                text = text.replace(/[^\d]+/g, "");
                setCelular(text);
              }}
            
              style={styles.inputMasked}
            />

            <Input
              style={styles.inputs}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={showPassword}
              keyboardType="number-pad"
              placeholder="  Senha cadastrada"
              maxLength={6}
              rightIcon={
                <TouchableOpacity onPress={() => handleShowPassword()}>
                  <Icon name={showIconPassword} size={25} />
                </TouchableOpacity>
              }
            />

            <TouchableOpacity
              style={styles.buttonEntrar}
              onPress={() => {
                signIn();
              }}
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
    
    </KeyboardAvoidingView>
  );
}
