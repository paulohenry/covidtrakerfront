import React,{useState} from 'react';
import { View, Text, Button,AsyncStorage } from 'react-native';
import styles from '../../styles/styles'
import storage from '../../temporaryStorage/keys'
// import { Container } from './styles';

export default function Dbg() {

 const verifyAll =async ()=>{
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
  await AsyncStorage.getAllKeys((err, save) => {
    AsyncStorage.multiGet(save, (err, stores) => {
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = store[i][1];
       
        console.log('keys:',key)
        console.log('results',result)
        console.log('value',value)

      });
    });
  });       
 }

  return (
    <View style={styles.container}>
            
        {/* <Text>dados usuario nome 1 :{storage.user.primeiroNome} </Text>
        <Text>dados usuario nome 2 :{storage.user.segundoNome} </Text>
        <Text>dados usuario celular  :{storage.user.telefone} </Text>
        <Text>dados usuario cep :{storage.user.cep} </Text>
        <Text>dados usuario senha :{storage.user.senha} </Text>
        <Text>dados usuario confirmação de senha:{storage.user.confirmSenha} </Text>
        <Text>dados usuario sexo:{storage.user.sexo} </Text>
        <Text>dados usuario idade :{storage.user.idade} </Text> */}
        <Button onPress={verifyAll} title="Finalizar"/>     
    </View>
  );
}
