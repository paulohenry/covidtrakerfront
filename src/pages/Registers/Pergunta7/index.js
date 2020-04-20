import React, {useState, useEffect}from 'react';
import { View, Text, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import keys from '../../../temporaryStorage/keys'
import styles from '../../../styles/formStyles'
// import { Container } from './styles';

export default function Pergunta7() {

  const nav = useNavigation()

  const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);
  const [isDisable2, setIsDisable2] = useState(false);

  const [isSelected3, setSelection3] = useState(false);
 const [isDisable3, setIsDisable3] = useState(false);
  
  const [isSelected4, setSelection4] = useState(false);
  const [isDisable4, setIsDisable4] = useState(false);

  const [isSelected5, setSelection5] = useState(false);
  const [isDisable5, setIsDisable5] = useState(false);
  
 
  const [resposta1, setResposta1] = useState('')
  const [resposta2, setResposta2] = useState('')
  const [resposta3, setResposta3] = useState('')
  const [resposta4, setResposta4] = useState('')
  const [resposta5, setResposta5] = useState('')
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(false)
      setResposta1('') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 

    }else if(isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==true ){
        
        setIsDisable1(true)
        setIsDisable2(true)
        setIsDisable3(true)
        setIsDisable4(true)
        setIsDisable5(false)
        setResposta5 ('Evita os comportamentos acima e mantém o contato a distância de 2 metros')
         
        
       
    }else if(isSelected1 == false  || isSelected2 ==false || isSelected3 ==false || isSelected4 ==false && isSelected5 == false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(true)
      
    }
    if(isSelected1){
      setResposta1('Beija')
    }else{ setResposta1('')}
    if(isSelected2){
      setResposta2('Abraça')
    }else{ setResposta2('')}
    if(isSelected3){
      setResposta3('Aperta as mãos')
    }else{ setResposta3('')}
    if(isSelected4){
      setResposta4('Fica Próximo para conversar')
    }else{ setResposta4('')}
  
 
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5])
 

_storeData = async () => {
     const respostas = {
       questao7_encontra_conhecido:{
       a1:isSelected1,
       a2:isSelected2,
       a3:isSelected3,
       a4:isSelected4,
       a5:isSelected5,
       }
     }
   try{
  await AsyncStorage.setItem(keys.questionario.Q7, JSON.stringify(respostas))
  const save = await AsyncStorage.getItem(keys.questionario.Q7)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }else if(isSelected1||isSelected2||isSelected3||isSelected4|| isSelected5){ 
        nav.navigate('Pergunta8')    
        console.log(save)
      }else{
        Alert.alert('cadastro', 'Você precisa responder a pergunta para continuar')
      }
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

   
  return (
    <View style={styles.container}>
      
   
     <Text style={styles.titles} >Quando você encontra algum conhecido você: </Text>
     <Text style={{color:'#FE0000', fontSize:17}} >Responda quantas alternativas quiser </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >Beija</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
       <Text >Abraça</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
          
        />
       <Text >Aperta as mãos</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}          
        />
       <Text >Fica próximo para conversar</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}          
        />
       <Text >Evita os comportamentos acima e mantém o contato a distância de 2 metros </Text>
      </View>

  
    <Text style={{paddingTop:20}}> {`Sua resposta nesta etapa: ${resposta1} ${resposta2} ${resposta3} ${resposta4} ${resposta5}` } </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
