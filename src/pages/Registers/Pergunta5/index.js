import React, {useState, useEffect}from 'react';
import { View, Text,TouchableOpacity, CheckBox, AsyncStorage,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../../../styles/formStyles'
import keys from '../../../temporaryStorage/keys'
// import { Container } from './styles';

export default function Pergunta5() {





  const nav = useNavigation()

  const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);
  const [isDisable2, setIsDisable2] = useState(false);

  const [isSelected3, setSelection3] = useState(false);
  const [isDisable3, setIsDisable3] = useState(false);

 
  const [resposta1, setResposta1] = useState('')
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false  ){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 ==false && isSelected3 ==false  ){
        
        setIsDisable1(false)
        setIsDisable2(true)
        setIsDisable3(true)
        
        setResposta1('Tive apenas sintomas') 
        
       
    }else if (isSelected1 == false  && isSelected2 ==true  && isSelected3 ==false ){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
        setResposta1('Estive internado(alta médica)') 
    }
    else if (isSelected1 == false  && isSelected2 ==false && isSelected3==true ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setResposta1('Estou internado agora') 
  }
  },[isSelected1, isSelected2, isSelected3])
 

_storeData = async () => {
 
try{
  
  await AsyncStorage.setItem(keys.questionario.Q5, JSON.stringify(resposta1))
  const save = await AsyncStorage.getItem(keys.questionario.Q5)
  if(!save){
    Alert.alert('Cadastro', 'erro ao cadastrar')
  }else{
    if(isSelected1|| isSelected2){
      nav.navigate('Pergunta6')
    }else if(isSelected3){
      nav.navigate('Pergunta6')
    }else{
      alert.alert('Cadastro', 'você precisa responder a pergunta para continuar')
    }         

    console.log(save)
  }
}catch(erro){
   Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
}   

};

   
  return (
    <View style={styles.container}>
      
    
     <Text style={styles.titles}>Estado de saúde: Está com sintomas ? </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >Tive apenas sintomas</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
        <Text >Estive internado(alta médica)</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
        />
        <Text >Estou internado agora</Text>
      </View>

 
      <Text style={{paddingTop:20}}>sua resposta nesta etapa foi: {resposta1} </Text>
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
       
    
    </View>
  );
}
