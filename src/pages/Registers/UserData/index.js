import React, { useState, useEffect } from "react";
import {
  Text,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import keys from "../../../temporaryStorage/keys";
import { TextInputMask } from "react-native-masked-text";
import Icon from "react-native-vector-icons/Entypo";

import api from "../../../services/api";

// import { Container } from './styles';

export default function UserData() {
  const nav = useNavigation();

  const [primeiro_nome, setprimeiro_nome] = useState("");
  const [ultimo_nome, setultimo_nome] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [senha_confirmacao, setsenha_confirmacao] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");

  const [confirmPasswordOpacity, setConfirmPasswordOpacity] = useState(0);
  const [inputConfirmPasswordDisable,setInputConfirmPasswordDisable,] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showIconPassword, setShowIconPassword] = useState("eye");

  useEffect(() => {
    if (senha !== '') {
      setInputConfirmPasswordDisable(false);
    }else{
      setInputConfirmPasswordDisable(true)
    }

    if(senha == senha_confirmacao && senha != ''){
      setConfirmPasswordOpacity(9)
    }else{
      setConfirmPasswordOpacity(0)
    }

  }, [senha_confirmacao, senha]);

  useEffect(() => {
    setprimeiro_nome(primeiro_nome);
    setultimo_nome(ultimo_nome);
    setCelular(celular);
    setCep(cep);
    setSenha(senha);
    setsenha_confirmacao(senha_confirmacao);
    setRua(rua);
    setNumero(numero);
    setComplemento(complemento);
  }, [
    primeiro_nome,
    ultimo_nome,
    celular,
    cep,
    senha,
    senha_confirmacao,
    rua,
    numero,
    complemento,
  ]);

  const store = async () => {
    if (senha != senha_confirmacao) {
      Alert.alert(
        "CovidTracker",
        "a confirmação de senha deve ser igual a senha"
      );
    } else {
      if (
        primeiro_nome == "" ||
        ultimo_nome == "" ||
        celular == "" ||
        cep == "" ||
        senha == "" ||
        senha_confirmacao == "" ||
        rua == "" ||
        numero == ""
      ) {
        Alert.alert(
          "CovidTracker",
          "Todos os campos são obrigatórios exceto o complemento"
        );
      } else {
        try {
          parseInt(numero);
          parseInt(cep);
          const data = {
            primeiro_nome,
            ultimo_nome,
            celular,
            cep,
            rua,
            numero,
            complemento,
            senha,
          };

          const response = await api.post("/users/", data);
         
          await AsyncStorage.setItem(keys.user_id, JSON.stringify(response.data.id))
          Alert.alert("CovidTracker", "cadastrado com sucesso");
          nav.navigate("Pergunta1");
         
        } catch (error) {
          Alert.alert("CovidTracker", error.response.data.error  );
        }
      }
    }
  };

  function handleShowPassword() {
    if (showIconPassword === "eye") {
      setShowPassword(false);
      setShowIconPassword("eye-with-line");
    } else {
      setShowPassword(true);
      setShowIconPassword("eye");
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={-50}
      behavior="position"
      enabled
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ß
      >
        <Text style={styles.titles}>Insira seus dados pessoais:</Text>
        <Input
          value={primeiro_nome}
          onChangeText={setprimeiro_nome}
          label="Primeiro nome"
          labelStyle={{
            color: "#607D8B",
            borderBottomColor: "#607D8B",
            fontWeight: "bold",
          }}
        />
        <Input
          value={ultimo_nome}
          onChangeText={setultimo_nome}
          label="Último nome"
          labelStyle={{
            color: "#607D8B",
            borderBottomColor: "#607D8B",
            fontWeight: "bold",
          }}
        />

        <Text style={styles.textMaskedInput}>Ex: {`(DDD)`} 99999-9999</Text>
        <TextInputMask
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          value={celular}
          onChangeText={(text) => {
            text = text.replace(/[^\d]+/g, "");
            setCelular(text);
          }}
          style={[
            styles.inputMasked,
            { borderBottomColor: "#607D8B", marginBottom: 20 },
          ]}
        />
        <Text style={styles.textMaskedInput}>
          CEP de onde está morando atualmente
        </Text>

        <TextInputMask
          type={"zip-code"}
          options={{
            maskType: "BRL",
          }}
          value={cep}
          onChangeText={(text) => {
            text = text.replace('-', '')
            setCep(text)
          }}
          style={[
            styles.inputMasked,
            { borderBottomColor: "#607D8B", marginBottom: 20 },
          ]}
        />
        <Input
          value={rua}
          onChangeText={setRua}
          label="Endereço ex: Rua ou Avenida"
          labelStyle={{ color: "#607D8B", borderBottomColor: "#607D8B" }}
        />
        <Input
          value={numero}
          onChangeText={setNumero}
          keyboardType="number-pad"
          label="Número da sua residência"
          labelStyle={{ color: "#607D8B", borderBottomColor: "#607D8B" }}
        />
        <Input
          value={complemento}
          onChangeText={setComplemento}
          keyboardType="number-pad"
          label="Complemento"
          labelStyle={{ color: "#607D8B", borderBottomColor: "#607D8B" }}
        />
        <Input
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={showPassword}
          keyboardType="number-pad"
          label="Senha de 6 dígitos "
          labelStyle={{ color: "#607D8B", borderBottomColor: "#607D8B" }}
          maxLength={6}
          rightIcon={
            <TouchableOpacity onPress={() => handleShowPassword()}>
              <Icon name={showIconPassword} size={25} color="#607D8B" />
            </TouchableOpacity>
          }
        />
        <Input
          value={senha_confirmacao}
          onChangeText={setsenha_confirmacao}
          secureTextEntry={true}
          keyboardType="number-pad"
          label="Confirme sua senha"
          labelStyle={{ color: "#607D8B", borderBottomColor: "#607D8B" }}
          disabled={inputConfirmPasswordDisable}
          maxLength={6}
          rightIcon={
              <Icon name="check" size={25} color='green' style={{ opacity: confirmPasswordOpacity }} />
          }
        />
        <TouchableOpacity style={styles.button} onPress={store}>
          <Text style={styles.textButton}>Iniciar Cadastro</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
