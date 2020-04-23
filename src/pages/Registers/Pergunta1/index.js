import React, {useState, useEffect}from 'react';
import { View, Text, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../../../styles/formStyles'
import keys from '../../../temporaryStorage/keys'



// import { Container } from './styles';

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
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false){
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
        
        setResposta1('não') 
        
       
    }else if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false && isSelected4 ==false){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
        setIsDisable4(true)

        setResposta1('sim, com resultado negativo') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true && isSelected4 ==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setIsDisable4(true)

      setResposta1('sim, sem resultado') 
  }
  else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==true){
    setIsDisable1(true)
    setIsDisable2(true)
    setIsDisable3(true)
    setIsDisable4(false)

    setResposta1('sim, com resultado positivo') 
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
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >  não</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
        <Text >  sim, com resultado negativo</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
          
        />
        <Text >  sim, mas não tive resultado</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}
          
        />
        <Text >  sim, com resultado positivo</Text>
      </View>

  
      <Text style={{paddingTop:20}}>sua resposta nesta etapa foi: {resposta1} </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
