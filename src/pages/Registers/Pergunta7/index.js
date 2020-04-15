import React, {useState, useEffect}from 'react';
import { View, Text,Button, CheckBox, AsyncStorage,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'

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

        setResposta1('sim, negativo') 
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

    setResposta1('sim, positivo') 
}},[isSelected1, isSelected2, isSelected3, isSelected4])
 

_storeData = async () => {
 
try{
  await AsyncStorage.setItem('USER_REPORT_1', resposta1)
  const save = await AsyncStorage.getItem('USER_REPORT_1')
  if(!save){
    Alert.alert('Cadastro', 'erro ao cadastrar')
  }else{
    Alert.alert('Cadastro', 'cadastrado com sucesso')
    switch(save){
      case 'não':
       nav.navigate('')
      break
       case 'sim, negativo':
       nav.navigate('')
      break
       case 'sim, sem resultado':
       nav.navigate('')
      break
       case 'sim, positivo':
       nav.navigate('')
      break
       case '':
       alert.alert('Pergunta 1', 'você precisa responder a pergunta para continuar')
      break
}
    console.log(save)
  }
}catch(erro){
   Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
}   

};

   
  return (
    <View>
      
     <Text>forneça algumas informações: </Text>
     <Text>Foi testado para covid-19? </Text>

     <View style={{flexDirection:'row'}}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >não</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
        <Text >sim, negativo</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
        />
        <Text >sim, sem resultado</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}
        />
        <Text >sim, positivo</Text>
      </View>

  
      <Text>sua resposta nesta etapa foi: {resposta1} </Text>
      
       
       <Button title="Proximo" onPress={_storeData}/>
    
    </View>
  );
}
