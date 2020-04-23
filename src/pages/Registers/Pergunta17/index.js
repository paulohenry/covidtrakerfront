import React, {useState, useEffect}from 'react';
import { View, Text,Button, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../../../styles/formStyles'
import keys from '../../../temporaryStorage/keys'
// import { Container } from './styles';

export default function Pergunta17() {





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
 
 const [isSelected6, setSelection6] = useState(false);
 const [isDisable6, setIsDisable6] = useState(false);
 
 const [isSelected7, setSelection7] = useState(false);
 const [isDisable7, setIsDisable7] = useState(false);

 const [isSelected8, setSelection8] = useState(false);
 const [isDisable8, setIsDisable8] = useState(false);
  
  
 
  const [resposta1, setResposta1] = useState('')
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false
      && isSelected5 ==false && isSelected6 ==false && isSelected7 ==false && isSelected8 ==false){

      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(false)
      setIsDisable6(false)
      setIsDisable7(false)
      setIsDisable8(false)

    

      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false 
      && isSelected5 ==false && isSelected6 ==false && isSelected7 ==false && isSelected8 ==false ){
        
        setIsDisable1(false)
        setIsDisable2(true)
        setIsDisable3(true)
        setIsDisable4(true)
        setIsDisable5(true)
        setIsDisable6(true)
        setIsDisable7(true)
        setIsDisable8(true)

        
        
        setResposta1('Entre 10 e 19 anos') 
        
       
    }else if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false && isSelected4 ==false 
      && isSelected5 ==false && isSelected6 ==false && isSelected7 ==false && isSelected8 ==false){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
        setIsDisable4(true)
        setIsDisable5(true)
        setIsDisable6(true)
        setIsDisable7(true)
        setIsDisable8(true)

        setResposta1('Entre 20 e 29 anos') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true  && isSelected4 ==false 
      && isSelected5 ==false && isSelected6 ==false && isSelected7 ==false && isSelected8 ==false ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setIsDisable8(true) 

      setResposta1('Entre 30 e 39 anos') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==true 
      && isSelected5 ==false && isSelected6 ==false && isSelected7 ==false && isSelected8 ==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(false)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setIsDisable8(true) 

      setResposta1('Entre 40 e 49 anos') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false 
      && isSelected5 ==true && isSelected6 ==false && isSelected7 ==false && isSelected8 ==false  ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(false)
      setIsDisable6(true)
      setIsDisable7(true)
      setIsDisable8(true) 
      

      setResposta1('Entre 50 e 59 anos') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false 
      && isSelected5 ==false && isSelected6 ==true && isSelected7 ==false && isSelected8 ==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(false)
      setIsDisable7(true)
      setIsDisable8(true) 
      

      setResposta1('Entre 60 e 69 anos') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false
      && isSelected5 ==false && isSelected6 ==false && isSelected7 ==true && isSelected8 ==false ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(false)
      setIsDisable8(true) 
      

      setResposta1('Entre 70 e 79 anos') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false 
      && isSelected5 ==false && isSelected6 ==false && isSelected7 ==false && isSelected8 ==true ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setIsDisable8(false) 

      setResposta1('Acima de 80 anos') 
    }
    
  },[
    isSelected1, 
    isSelected2, 
    isSelected3, 
    isSelected4,
    isSelected5,
    isSelected6,
    isSelected7,
    isSelected8,])
 

_storeData = async () => {
   
   try{
  await AsyncStorage.setItem(keys.questionario.Q17, JSON.stringify(resposta1))
  const save = await AsyncStorage.getItem(keys.questionario.Q17)
  if(!save){
    Alert.alert('Cadastro 1', 'Você precisa responder a pergunta prara continuar')
  }else{    
    if(isSelected1|| isSelected2|| isSelected3|| isSelected4
      || isSelected5|| isSelected6|| isSelected7|| isSelected8){
      nav.navigate('Pergunta18')
        }else{
      Alert.alert('cadastro', 'Você precisa responder a pergunta para continuar')
    }   
        console.log(save)
      }
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

   
  return (
    <View style={styles.container}>
      
   
     <Text style={styles.titles} >Qual a sua idade ? </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >Entre 10 e 19 anos</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
        <Text >Entre 20 e 29 anos</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
          
        />
        <Text >Entre 30 e 39 anos</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}
          
        />
        <Text >Entre 40 e 49 anos</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}
          
        />
        <Text >Entre 50 e 59 anos</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable6}
          value={isSelected6}
          onValueChange={setSelection6}
          
        />
        <Text >Entre 60 e 69 anos</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable7}
          value={isSelected7}
          onValueChange={setSelection7}
          
        />
        <Text >Entre 70 e 79 anos</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable8}
          value={isSelected8}
          onValueChange={setSelection8}
          
        />
        <Text >Acima de 80 anos</Text>
      </View>

      
  
      <Text style={{paddingTop:20}}>sua resposta nesta etapa foi: {resposta1} </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
