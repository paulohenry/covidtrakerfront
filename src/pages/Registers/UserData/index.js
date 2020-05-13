import React,{useState,useEffect}from 'react';
import { View,ScrollView,TextInput,Text,AsyncStorage,Alert,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import storage from '../../../temporaryStorage/keys'

import api from '../../../services/api'

// import { Container } from './styles';

export default function UserData() {
      
  const nav= useNavigation()

      const [primeiroNome, setPrimeiroNome ] =useState('')
      const [ultimoNome, setultimoNome ] =useState('')
      const [celular, setcelular ] =useState('')
      const [cep, setCep ] =useState('')
      const [rua, setRua ] =useState('')
      const [numero, setNum ] =useState('')
      const [complemento, setComp ] =useState('')
      const [senha, setSenha ] =useState('')
      const [senhaConfirmacao, setSenhaConfirmacao ] =useState('')

      

     

      useEffect(() => {
     
                setPrimeiroNome(primeiroNome)
                setultimoNome(ultimoNome)
                setcelular(celular)
                setCep(cep)
                setRua(rua)
                setNum(numero)
                setComp(complemento)
                setSenha(senha)
                setSenhaConfirmacao(senhaConfirmacao)
                              

            }, [
         primeiroNome,
         ultimoNome,
         celular,
         cep,
         rua,
         numero,
         complemento,
         senha,
         senhaConfirmacao,
               
      ])

      const store = async()=>{
           
        
              try{
                

                const data = {

                  primeiro_nome:primeiroNome,
                  ultimo_nome:ultimoNome,
                  celular:celular,
                  cep:cep,
                  rua:rua,
                  numero:numero,
                  complemento:complemento,
                  senha:senha
                }

                console.log(JSON.parse(data))
                console.log(data)
               // api.post('users', data)
             
                if(primeiroNome==''||ultimoNome==''||celular==''||cep==''||senha==''||senhaConfirmacao==''
                ||rua==''||numero==''||complemento==''){
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
      <ScrollView>

        <Text style={styles.titles}>Insira seus dados pessoais:</Text>
        <Input value={primeiroNome} onChangeText={setPrimeiroNome} autoCapitalize="characters" label="Primeiro nome"/>
        <Input value={ultimoNome} onChangeText={setultimoNome} autoCapitalize="characters" label="Último nome"/>
        <Input value={celular} onChangeText={setcelular} keyboardType="number-pad" label="Ex: (DDD)99999-99999"/>
        <Input value={rua} onChangeText={setRua}  label="Logradouro ex: (rua ou avenida)"/>
        <Input value={numero} onChangeText={setNum} keyboardType="number-pad" label="número da sua casa"/>
        <Input value={complemento} onChangeText={setComp}  label="complemento ex: (apt 02, fundos 03)"/>
        <Input value={cep} onChangeText={setCep} labelProps={styles.input} keyboardType="number-pad" label="CEP de onde está morando atualmente"/>
        <Input value={senha} onChangeText={setSenha} secureTextEntry={true} keyboardType="number-pad" label="Senha de 6 dígitos "/>
        <Input value={senhaConfirmacao} onChangeText={setSenhaConfirmacao} secureTextEntry={true} keyboardType="number-pad" label="Confirme sua senha"/>
     <TouchableOpacity style={styles.button}onPress={store}>
        <Text style={styles.textButton}>Iniciar cadastro</Text>
       </TouchableOpacity>
      </ScrollView>
      </KeyboardAvoidingView>
    
  
  );
}
