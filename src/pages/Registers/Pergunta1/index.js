import React, {useState, useEffect}from 'react';
import { View, Text, CheckBox, Platform, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/formStyles';
import keys from '../../../temporaryStorage/keys';
import CheckBoxIOS from '../../../components/CheckBoxIOS';
import api from '../../../services/api'
// import { Container } from './styles';

//Plataforma corrente.
const os = Platform.OS

export default function Pergunta1() {
  const nav = useNavigation()

  const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);
  
  const [isSelected2, setSelection2] = useState(false);
  const [isDisable2, setIsDisable2] = useState(false);
  
  const [isSelected3, setSelection3] = useState(false);
  const [isDisable3, setIsDisable3] = useState(false);
  
  const [isSelected4, setSelection4] = useState(false);
  const [isDisable4, setIsDisable4] = useState(false);
  
  const [resposta1, setResposta1] = useState('')
  
  //Ios disable Check
  const [disable1, setDisable1] = useState(true)
  const [disable2, setDisable2] = useState(true)
  const [disable3, setDisable3] = useState(true)
  const [disable4, setDisable4] = useState(true)
  

  
  useEffect(() => {
    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 == false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)

      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false ){
        
        setIsDisable1(false)
        setIsDisable2(true)
        setIsDisable3(true)
        setIsDisable4(true)
        
        setResposta1('Não') 
        
    }else if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false && isSelected4 ==false){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
        setIsDisable4(true)

        setResposta1('Sim, com resultado negativo') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true && isSelected4 ==false){
        setIsDisable1(true)
        setIsDisable2(true)
        setIsDisable3(false)
        setIsDisable4(true)

        setResposta1('Sim, mas sem resultado') 
  }
  else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==true){
        setIsDisable1(true)
        setIsDisable2(true)
        setIsDisable3(true)
        setIsDisable4(false)

    setResposta1('Sim, com resultado positivo') 
}},[isSelected1, isSelected2, isSelected3, isSelected4])
 
const _storeData = async () => {
   try{
    await AsyncStorage.setItem(keys.questionario.Q1, JSON.stringify(resposta1))
    const save = await AsyncStorage.getItem(keys.questionario.Q1)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }
  if(isSelected1==false && isSelected2==false && isSelected3==false && isSelected4==false){
  Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')

  }
    if(isSelected1){
      nav.navigate('Pergunta3')
    }else if(isSelected2){
      nav.navigate('Pergunta2')
    }else if(isSelected3){
      nav.navigate('Pergunta2')
    }else if(isSelected4){
      nav.navigate('Pergunta2')
    } 
        console.log(save)
      
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

  return (
    <View style={styles.container}>
   
     <Text style={styles.titles} >Foi testado para covid-19? </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
       {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected1}
         disable={disable1}
         onPress={() => {
            setSelection1(true) 
            setSelection2(false)
            setSelection3(false)
            setSelection4(false)

            setDisable1(false)
            setDisable2(true)
            setDisable3(true)
            setDisable4(true)
         }}
          />
        : 
         <CheckBox
         disabled={isDisable1}
         value={isSelected1}
         onValueChange={setSelection1}
       />
       }
        <Text>Não</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected2}
         disable={disable2}
         onPress={() => {
            setSelection2(true)
            setDisable1(true)
            setDisable2(false)
            setDisable3(true)
            setDisable4(true)

            setSelection1(false) 
            setSelection2(true)
            setSelection3(false)
            setSelection4(false)
         }}
          />
        : 
        <CheckBox
          disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
      }   
        <Text>Sim, com resultado negativo</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected3}
         disable={disable3}
         onPress={() => {
            setSelection3(true)
            setDisable1(true)
            setDisable2(true)
            setDisable3(false)
            setDisable4(true)

            setSelection1(false) 
            setSelection2(false)
            setSelection3(true)
            setSelection4(false)
         }}
          />
        : 
        <CheckBox
          disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
        />
      } 
        <Text>Sim, mas não tive resultado</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected4}
         disable={disable4}
         onPress={() => {
            setSelection4(true)
            setDisable1(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(false)

            setSelection1(false) 
            setSelection2(false)
            setSelection3(false)
            setSelection4(true)
         }}
          />
        : 
        <CheckBox
          disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}
        />
      }
        <Text>Sim, com resultado positivo</Text>
      </View>

      <Text style={{paddingTop:20}}>Sua resposta nesta etapa foi: {resposta1 == '' ? 'Nenhuma resposta selecionada.' : resposta1} </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    </View>
  );
}
