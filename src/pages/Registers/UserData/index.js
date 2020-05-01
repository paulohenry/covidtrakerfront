import React,{useState,useEffect}from 'react';
import { View,TextInput,Text,AsyncStorage,Alert,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
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

      

     

      useEffect(() => {
     
                setPrimeiroNome(primeiroNome)
                setSegundoNome(segundoNome)
                setTelefone(telefone)
                setCep(cep)
                setSenha(senha)
                setSenhaConfirmacao(senhaConfirmacao)
                              

            }, [
         primeiroNome,
         segundoNome,
         telefone,
         cep,
         senha,
         senhaConfirmacao,
               
      ])

      const store = async()=>{
           
        
              try{
                await AsyncStorage.setItem(storage.user.primeiroNome,primeiroNome)
                await AsyncStorage.setItem(storage.user.segundoNome,segundoNome)
                await AsyncStorage.setItem(storage.user.telefone,telefone)
                await AsyncStorage.setItem(storage.user.cep, cep)
                await AsyncStorage.setItem(storage.user.senha,senha)
                await AsyncStorage.setItem(storage.user.confirmSenha,senhaConfirmacao)
                
             
                if(primeiroNome==''||segundoNome==''||telefone==''||cep==''||senha==''||senhaConfirmacao==''){
                  Alert.alert('Cadastro', 'Preencha o formulário por completo para continuar')
                  
                  
                }else{
                 
                  nav.navigate('Pergunta1')
                }
              }catch(erro){
                 Alert.alert('Cadastro', erro)
              }
      }
  return (   
    
      <KeyboardAvoidingView  style={styles.container} keyboardVerticalOffset={-50} behavior="position" enabled>
        <Text style={styles.titles}>Insira seus dados pessoais:</Text>
        <Input value={primeiroNome} onChangeText={setPrimeiroNome} autoCapitalize="characters" label="Primeiro nome"/>
        <Input value={segundoNome} onChangeText={setSegundoNome} autoCapitalize="characters" label="Último nome"/>
        <Input value={telefone} onChangeText={setTelefone} keyboardType="number-pad" label="Ex: (DDD)99999-99999"/>
        <Input value={cep} onChangeText={setCep} labelProps={styles.input} keyboardType="number-pad" label="CEP de onde está morando atualmente"/>
        <Input value={senha} onChangeText={setSenha} secureTextEntry={true} keyboardType="number-pad" label="Senha de 6 dígitos "/>
        <Input value={senhaConfirmacao} onChangeText={setSenhaConfirmacao} secureTextEntry={true} keyboardType="number-pad" label="Confirme sua senha"/>
     <TouchableOpacity style={styles.button}onPress={store}>
        <Text style={styles.textButton}>Iniciar cadastro</Text>
       </TouchableOpacity>
      </KeyboardAvoidingView>
    
  
  );
}
