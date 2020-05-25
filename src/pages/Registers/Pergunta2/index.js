import React, {useState, useEffect}from 'react';
import { View, Text, Platform, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/formStyles';
import keys from '../../../temporaryStorage/keys';
import CheckBoxIOS from '../../../components/CheckBoxIOS';

// import { Container } from './styles';

const os = Platform.OS

export default function Pergunta2() {

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
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(false)

      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false ){
        
        setIsDisable1(false)
        setIsDisable2(true)
        setIsDisable3(true)
        setIsDisable4(true)
        setIsDisable5(true)
        
        setResposta1('De 1 a 5 dias') 
        
       
    }else if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
        setIsDisable4(true)
        setIsDisable5(true)

        setResposta1('De 6 a 10 dias') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true && isSelected4 ==false && isSelected5 ==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setIsDisable4(true)
      setIsDisable5(true)

      setResposta1('De 11 a 14 dias') 
  }
  else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==true && isSelected5 ==false){
    setIsDisable1(true)
    setIsDisable2(true)
    setIsDisable3(true)
    setIsDisable4(false)
    setIsDisable5(true)

    setResposta1('De 14 a 20 dias') 
    }
    else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==true){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(false)

      setResposta1('Acima de 20 dias') 
      }
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5])
 

_storeData = async () => {
    
     
   try{
  await AsyncStorage.setItem(keys.questionario.Q2, resposta1)
  const save = await AsyncStorage.getItem(keys.questionario.Q2)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }else{
   
    switch(save){
      case 'De 1 a 5 dias':
       nav.navigate('Pergunta5')
      break
       case 'De 6 a 10 dias':
       nav.navigate('Pergunta5')
      break
       case 'De 11 a 14 dias':
       nav.navigate('Pergunta5')
      break
       case 'De 14 a 20 dias':
       nav.navigate('Pergunta5')
      break
      case 'Acima de 20 dias':
       nav.navigate('Pergunta5')
      break
    }
        console.log(save)
      }
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

   
  return (
    <View style={styles.container}>
   
     <Text style={styles.titles} >Há quanto tempo você testou? </Text>
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
        <Text >De 1 a 5 dias</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected2}
         disable={disable2}
         onPress={() => {
            setSelection1(false) 
            setSelection2(true)
            setSelection3(false)
            setSelection4(false)

            setDisable1(true)
            setDisable2(false)
            setDisable3(true)
            setDisable4(true)
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
       <Text >De 6 a 10 dias</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected3}
         disable={disable3}
         onPress={() => {
            setSelection1(false) 
            setSelection2(false)
            setSelection3(true)
            setSelection4(false)

            setDisable1(true)
            setDisable2(true)
            setDisable3(false)
            setDisable4(true)
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
       <Text >De 11 a 14 dias</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected4}
         disable={disable4}
         onPress={() => {
            setSelection1(false) 
            setSelection2(false)
            setSelection3(false)
            setSelection4(true)

            setDisable1(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(false)
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
       <Text >De 14 a 20 dias</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected5}
         disable={disable5}
         onPress={() => {
            setSelection1(false) 
            setSelection2(false)
            setSelection3(false)
            setSelection4(false)
            setSelection5(true)

            setDisable1(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(true)
            setDisable5(false)

         }}
         />
        : 
        <CheckBox
           disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}          
        />
      }
       <Text >Acima de 20 dias</Text>
      </View>

  
      <Text style={{paddingTop:20}}>Sua resposta nesta etapa foi: {resposta1 == '' ? 'Nenhuma resposta selecionada.' : resposta1} </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    </View>
  );
}
