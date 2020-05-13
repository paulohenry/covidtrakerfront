

import React, { useState, useEffect } from "react";
import {
  Text,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
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

  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setultimoNome] = useState("");
  const [celular, setcelular] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  const [numero, setNumero] = useState("")
  const [rua, setRua]= useState("")
  const [complemento, setComplemento]= useState("")

  useEffect(() => {
    setPrimeiroNome(primeiroNome);
    setultimoNome(ultimoNome);
    setcelular(celular);
    setCep(cep);
    setSenha(senha);
    setSenhaConfirmacao(senhaConfirmacao);
    setRua(rua)
    setNumero(numero)
    setComplemento(complemento)
  }, [primeiroNome, ultimoNome, celular, cep, senha, senhaConfirmacao,rua,numero,complemento]);

  const store = async () => {
    try {
      

      if (
        primeiroNome == "" ||
        ultimoNome == "" ||
        celular == "" ||
        cep == "" ||
        senha == "" ||
        senhaConfirmacao == ""||
        rua == ""||
        numero ==""
      ) {
        Alert.alert(
          "Cadastro",
          "Preencha o formulário por completo para continuar"
        );
      } else {
        nav.navigate("Pergunta1");
      }
    } catch (erro) {
      Alert.alert("Cadastro", erro);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={-50}
      behavior="position"
      enabled
    >
      <Text style={styles.titles}>Insira seus dados pessoais:</Text>
      <Input
        value={primeiroNome}
        onChangeText={setPrimeiroNome}
        autoCapitalize="characters"
        label="Primeiro nome"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B', fontWeight: 'bold'}}
      />
      <Input
        value={ultimoNome}
        onChangeText={setultimoNome}
        autoCapitalize="characters"
        label="Último nome"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B', fontWeight: 'bold'}}

      />
      <Text style={styles.textMaskedInput}>Ex: (DDD) 99999-9999</Text>
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
      /> 
      <Text style={styles.textMaskedInput}>CEP de onde está morando atualmente</Text>
      <TextInputMask
        type={'zip-code'}
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        value={cep}
        onChangeText={text => setCep(text)}
        style={[styles.inputMasked, {borderBottomColor: '#607D8B', marginBottom: 20}]}
      />
        <Input
        value={rua}
        onChangeText={setRua}
        secureTextEntry={true}
        label="Lougradouro ex: rua ou avenida"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
      />
        <Input
        value={numero}
        onChangeText={setNumero}
        secureTextEntry={true}
        keyboardType="number-pad"
        label="número da sua residência"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}
      />
      <Input
        value={complemento}
        onChangeText={setComplemento}
        secureTextEntry={true}
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
        value={senhaConfirmacao}
        onChangeText={setSenhaConfirmacao}
        secureTextEntry={true}
        keyboardType="number-pad"
        label="Confirme sua senha"
        labelStyle={{color: '#607D8B', borderBottomColor: '#607D8B'}}

      />
      <TouchableOpacity style={styles.button} onPress={store}>
        <Text style={styles.textButton}>Iniciar Cadastro</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>

  );
}
