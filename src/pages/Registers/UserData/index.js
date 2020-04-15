import React,{useState,useEffect,createRef}from 'react';
import { View,TextInput,Text,Button, KeyboardAvoidingView,AsyncStorage,Alert,CheckBox } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import styles from '../../../styles/styles'
import storage from '../../../temporaryStorage/keys'

// import { Container } from './styles';

export default function UserData() {
      
  const nav= useNavigation()

      const [primeiroNome, setPrimeiroNome ] =useState('')
      const [segundoNome, setSegundoNome ] =useState('')
      const [telefone, setTelefone ] =useState('')
      const [cep, setCep ] =useState('')
      const [senha, setSenha ] =useState('')
      const [senhaConfirmacao, setSenhaConfirmacao ] =useState('')

      const [sexoM, setSexoM ] =useState('')
      const [sexoMisDisable, setMisDisable ] =useState(false)

      const [sexoF, setSexoF ] =useState('')
      const [sexoFisDisable, setFisDisable ] =useState(false)

      const [sexoT, setSexoT ] =useState('')
      const [sexoTisDisable, setTisDisable ] =useState(false)

      const [idade, setIdade ] =useState('')
      const [sexoEscolhido, setSexoEscolhido] = useState('')

      useEffect(() => {
        if (sexoM == true  && sexoF ==false && sexoT ==false){
          setMisDisable(false)
          setTisDisable(true)
          setFisDisable(true)
          setSexoEscolhido('masculino')
         }else if(sexoM == false  && sexoF ==true && sexoT ==false) {
          setMisDisable(true)
          setTisDisable(true)
          setFisDisable(false)
          setSexoEscolhido('feminino')
         }else if(sexoM == false  && sexoF ==true && sexoT ==false) {
          setMisDisable(true)
          setTisDisable(false)
          setFisDisable(true)
          setSexoEscolhido('transsexual')
         }

                setPrimeiroNome(primeiroNome)
                setSegundoNome(segundoNome)
                setTelefone(telefone)
                setCep(cep)
                setSenha(senha)
                setSenhaConfirmacao(senhaConfirmacao)
                setSexoEscolhido(sexoEscolhido)
                setIdade(idade)

               

            }, [
         primeiroNome,
         segundoNome,
         telefone,
         cep,
         senha,
         senhaConfirmacao,
         sexoEscolhido,
         sexoM,
         sexoF,
         sexoT,
         idade
      ])

      const store = async()=>{
           
        
              try{
                await AsyncStorage.setItem(storage.user.primeiroNome,primeiroNome)
                await AsyncStorage.setItem(storage.user.segundoNome,segundoNome)
                await AsyncStorage.setItem(storage.user.telefone,telefone)
                await AsyncStorage.setItem(storage.user.cep, cep)
                await AsyncStorage.setItem(storage.user.senha,senha)
                await AsyncStorage.setItem(storage.user.confirmSenha,senhaConfirmacao)
                await AsyncStorage.setItem(storage.user.sexo,sexoEscolhido)
                await AsyncStorage.setItem(storage.user.idade,idade)
                const save = [
                  storage.user.primeiroNome,
                  storage.user.segundoNome,
                  storage.user.telefone,
                  storage.user.cep,
                  storage.user.senha,
                  storage.user.confirmSenha,
                  storage.user.sexo,
                  storage.user.idade
                 ]  
                     
                if(!save){
                  Alert.alert('Cadastro', 'erro ao cadastrar')
                }else{
                  Alert.alert('Cadastro', 'cadastrado com sucesso')
                  nav.navigate('Pergunta1')
                  console.log(save)
                }
              }catch(erro){
                 Alert.alert('Cadastro', erro)
              }
      }
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
    <View style={styles.container}>
        
        <TextInput value={primeiroNome} onChangeText={setPrimeiroNome} autoCapitalize="characters" placeholder="Primeiro nome"/>
        <TextInput value={segundoNome} onChangeText={setSegundoNome} autoCapitalize="characters" placeholder="Último nome"/>
        <TextInput value={telefone} onChangeText={setTelefone} keyboardType="number-pad" placeholder="Ex: (DDD)99999-99999"/>
        <TextInput value={cep} onChangeText={setCep} keyboardType="number-pad" placeholder="CEP de sua residência"/>
        <TextInput value={senha} onChangeText={setSenha} secureTextEntry={true} keyboardType="number-pad" placeholder="Senha de 6 dígitos "/>
        <TextInput value={senhaConfirmacao} onChangeText={setSenhaConfirmacao} secureTextEntry={true} keyboardType="number-pad" placeholder="Confirme sua senha"/>
        <TextInput value={idade} onChangeText={setIdade}  keyboardType="number-pad" placeholder="Sua idade"/>
       
       <Button title="Iniciar Cadastro"onPress={store}/>
    </View>
    </KeyboardAvoidingView>
  );
}
