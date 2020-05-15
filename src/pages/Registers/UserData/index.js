

import React, { useState, useEffect } from "react";
import {
  Text,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import storage from "../../../temporaryStorage/keys";
import { TextInputMask } from 'react-native-masked-text';


import api from '../../../services/api'

// import { Container } from './styles';

export default function UserData() {
  const nav = useNavigation();

  const [primeiro_nome, setprimeiro_nome] = useState("");
  const [ultimo_nome, setultimo_nome] = useState("");
  const [celular, setcelular] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [senha_confirmacao, setsenha_confirmacao] = useState("");
  const [numero, setNumero] = useState("")
  const [rua, setRua]= useState("")
  const [complemento, setComplemento]= useState("")

  useEffect(() => {
    setprimeiro_nome(primeiro_nome);
    setultimo_nome(ultimo_nome);
    setcelular(celular);
    setCep(cep);
    setSenha(senha);
    setsenha_confirmacao(senha_confirmacao);
    setRua(rua)
    setNumero(numero)
    setComplemento(complemento)
  }, [primeiro_nome, ultimo_nome, celular, cep, senha, senha_confirmacao,rua,numero,complemento]);

  const store = async () => {
     
   
    if(senha != senha_confirmacao){
      Alert.alert('CovidTracker',  "a confirmação de senha deve ser igual a senha")
    }else{
    if(primeiro_nome=="" || ultimo_nome =="" || celular=="" || cep=="" || senha=="" || senha_confirmacao=="" ||rua=="" ||numero == ""){
      Alert.alert('CovidTracker',  "todos os campos são obrigatórios exceto o complemento")
    }else{

    try{
    parseInt(numero)
    parseInt(cep)
      const data = {
          primeiro_nome,
          ultimo_nome,
          celular,
          cep,
          rua,
          numero,
          complemento,
          senha
      }
     
        const response = await api.post('/users/', data)
        Alert.alert('CovidTracker', 'cadastrado com sucesso')
        nav.navigate("Pergunta1");
      
    }catch(response){
        Alert.alert('CovidTracker',  'celular já cadastrado')

    }
  }
}
  
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={-50}
      behavior="position"
      enabled
    >
    <ScrollView>
      <Text style={styles.titles}>Insira seus dados pessoais:</Text>
      <Input
        value={primeiro_nome}
        onChangeText={setprimeiro_nome}
       
        label="Primeiro nome"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B', fontWeight: 'bold'}}
      />
      <Input
        value={ultimo_nome}
        onChangeText={setultimo_nome}
       
        label="Último nome"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B', fontWeight: 'bold'}}
        
        />
        <Input
        value={celular}
        onChangeText={setcelular}
      
        keyboardType="number-pad"pm2
        label="Celular ex: 13 99999 9999 sem espaço"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
        />
      {/* <Text style={styles.textMaskedInput}>Ex: (DDD) 99999-9999</Text>
      <TextInputMask
        type={"cel-phone"}
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        value={celular}
        onChangeText={text => setcelular(text)}
        style={[styles.inputMasked, {borderBottomColor: '#607D8B', marginBottom: 20}]}
        />  */}
      {/* <Text style={styles.textMaskedInput}>CEP de onde está morando atualmente</Text> */}
      <Input
        value={cep}
        onChangeText={setCep}
      
        keyboardType="number-pad"
        label="CEP de onde está morando atualmente"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
        />
      {/* <TextInputMask
        type={'zip-code'}
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        value={cep}
        onChangeText={text => setCep(text)}
        style={[styles.inputMasked, {borderBottomColor: '#607D8B', marginBottom: 20}]}
        /> */}
        <Input
        value={rua}
        onChangeText={setRua}
        
        label="Lougradouro ex: rua ou avenida"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
        />
        <Input
        value={numero}
        onChangeText={setNumero}
        
        keyboardType="number-pad"
        label="número da sua residência"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
      />
      <Input
        value={complemento}
        onChangeText={setComplemento}
      
        keyboardType="number-pad"
        label="complemento"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
        />
      <Input
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        keyboardType="number-pad"
        label="Senha de 6 dígitos "
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
        />
      <Input
        value={senha_confirmacao}
        onChangeText={setsenha_confirmacao}
        secureTextEntry={true}
        keyboardType="number-pad"
        label="Confirme sua senha"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
        
        />
      <TouchableOpacity style={styles.button} onPress={store}>
        <Text style={styles.textButton}>Iniciar Cadastro</Text>
      </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>

  );
}
