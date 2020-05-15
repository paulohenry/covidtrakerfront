import React, {useState, useEffect}from 'react';
import { View, Text, CheckBox, Platform, AsyncStorage,Alert, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/formStyles';
import keys from '../../../temporaryStorage/keys';
import CheckBoxIOS from '../../../components/CheckBoxIOS';
// import { Container } from './styles';

const os = Platform.OS

export default function Pergunta12() {

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
  
  //Ios disable Check
  const [disable1, setDisable1] = useState(true)
  const [disable2, setDisable2] = useState(true)
  const [disable3, setDisable3] = useState(true)
  const [disable4, setDisable4] = useState(true)
  const [disable5, setDisable5] = useState(true)
 
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
        setResposta5 ('Não que eu saiba ou tenha percebido')
         
        
       
    }else if(isSelected1 == false  || isSelected2 ==false || isSelected3 ==false || isSelected4 ==false && isSelected5 == false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(true)

      setResposta5('')
      
    }
    if(isSelected1){
      setResposta1('Na rua')
    }else{ setResposta1('')}
    if(isSelected2){
      setResposta2('Em lugares fechados, pronto socorro ou hospitais')
    }else{ setResposta2('')}
    if(isSelected3){
      setResposta3('No trabalho')
    }else{ setResposta3('')}
    if(isSelected4){
      setResposta4('Em casa')
    }else{ setResposta4('')}
  
 
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5])
 

_storeData = async () => {
     const res = [
       resposta1,
       resposta2,
       resposta3,
       resposta4,
       resposta5,
     ]
   try{
  await AsyncStorage.setItem(keys.questionario.Q12, JSON.stringify(res))
  const save = await AsyncStorage.getItem(keys.questionario.Q12)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }else if(isSelected1||isSelected2||isSelected3||isSelected4|| isSelected5){ 
        nav.navigate('Pergunta13')    
        console.log(save)
      }else{
        Alert.alert('cadastro', 'Você precisa responder a pergunta para continuar')
      }  
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

   
  return (
    <ScrollView style={styles.container}>
      
     <Text style={styles.titles} >Você esteve em contato próximo com alguém com sintomas de gripe ou que está com
a Corona vírus, nos últimos 05 dias:</Text>
     <Text style={{color:'#FE0000', fontSize:17}} >Responda quantas alternativas quiser </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
     {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected1}
          disable={disable1}
          onPress={() => {
             isSelected1 ? setSelection1(false) : setSelection1(true)
 
             disable1 ? setDisable1(false) : setDisable1(true)
             setSelection5(false)
             setDisable5(true)
          }}
          />
        :
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
      }
        <Text >Na rua</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected2}
          disable={disable2}
          onPress={() => {
             isSelected2 ? setSelection2(false) : setSelection2(true)
 
             disable2 ? setDisable2(false) : setDisable2(true)
             setSelection5(false)
             setDisable5(true)
          }}
          />
        :
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
      }
       <Text >Em lugares fechados, pronto socorro ou hospitais</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected3}
          disable={disable3}
          onPress={() => {
             isSelected3 ? setSelection3(false) : setSelection3(true)
 
             disable3 ? setDisable3(false) : setDisable3(true)
             setSelection5(false)
             setDisable5(true)
          }}
          />
        :
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
        />
      }
       <Text >No trabalho</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected4}
          disable={disable4}
          onPress={() => {
             isSelected4 ? setSelection4(false) : setSelection4(true)
 
             disable4 ? setDisable4(false) : setDisable4(true)
             setSelection5(false)
             setDisable5(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}          
        />
      }
       <Text >Em casa</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected5}
          disable={disable5}
          onPress={() => {
             isSelected5 ? setSelection5(false) : setSelection5(true)
 
             disable5 ? setDisable5(false) : setDisable5(true)
             setDisable1(true)
             setDisable2(true)
             setDisable3(true)
             setDisable4(true)
             setDisable5(false)

             setSelection1(false)
             setSelection2(false)
             setSelection3(false)
             setSelection4(false)
             setSelection5(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}          
        />
      }
       <Text >Não que eu saiba ou tenha percebido</Text>
      </View>

  
    <Text style={{paddingTop:20}}> {`Sua resposta nesta etapa: ${resposta1} ${resposta2} ${resposta3} ${resposta4} ${resposta5}` } </Text>
      
      </View>
      <TouchableOpacity style={[styles.buttonEntrar,{marginBottom:100}]}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </ScrollView>
  );
}
