import React, {useState, useEffect}from 'react';
import { View, Text,Button, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../../../styles/formStyles'
import keys from '../../../temporaryStorage/keys'
// import { Container } from './styles';

export default function Pergunta20() {





  const nav = useNavigation()

  const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);
  const [isDisable2, setIsDisable2] = useState(false);

  const [isSelected3, setSelection3] = useState(false);
 const [isDisable3, setIsDisable3] = useState(false);
  
  
  
 
  const [resposta1, setResposta1] = useState('')
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
    

      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 ==false && isSelected3 ==false  ){
        
        setIsDisable1(false)
        setIsDisable2(true)
        setIsDisable3(true)
        
        
        setResposta1('1 banheiro apenas') 
        
       
    }else if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false ){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
       

        setResposta1('2 banheiros') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      

      setResposta1('Acima de 2 banheiros') 
    }
  },[isSelected1, isSelected2, isSelected3])
 

_storeData = async () => {
 
   try{
  await AsyncStorage.setItem(keys.questionario.Q20, JSON.stringify(resposta1))
  const save = await AsyncStorage.getItem(keys.questionario.Q20)
  if(!save){
    Alert.alert('Cadastro 1', 'Você precisa responder a pergunta prara continuar')
  }else{    
    if(isSelected1|| isSelected2|| isSelected3){
      nav.navigate('Pergunta16')
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
      
   
     <Text style={styles.titles} >Quantos banheiros tem na casa em que você mora atualmente ?  </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >1 banheiro apenas</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
        <Text >2 banheiros</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
          
        />
        <Text >Acima de 2 banheiros</Text>
      </View>

      
  
      <Text style={{paddingTop:20}}>sua resposta nesta etapa foi: {resposta1} </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
