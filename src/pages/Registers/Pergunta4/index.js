import React, {useState, useEffect}from 'react';
import { View, Text,TouchableOpacity, CheckBox, AsyncStorage,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../../../styles/formStyles'
import keys from '../../../temporaryStorage/keys'
// import { Container } from './styles';

export default function Pergunta4() {





  const nav = useNavigation()

  const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);
  const [isDisable2, setIsDisable2] = useState(false);

 
  const [resposta1, setResposta1] = useState('')
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false ){
      setIsDisable1(false)
      setIsDisable2(false)
     
      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 ==false ){
        
        setIsDisable1(false)
        setIsDisable2(true)
     
        
        setResposta1('Estou de quarentena obrigatória') 
        
       
    }else if (isSelected1 == false  && isSelected2 ==true ){
        setIsDisable1(true)
        setIsDisable2(false)
        
        setResposta1('Tive alta médica da quarentena') 
    }
  },[isSelected1, isSelected2])
 

_storeData = async () => {
 
try{
 
  await AsyncStorage.setItem(keys.questionario.Q4, JSON.stringify(resposta1))
  const save = await AsyncStorage.getItem(keys.questionario.Q4)
  if(!save){
    Alert.alert('Cadastro', 'erro ao cadastrar')
  }else{
    if(isSelected1){
      nav.navigate('Pergunta6')
    }else if(isSelected2){
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
      
    
     <Text style={styles.titles}>Estado de saúde: Está ou esteve de quarentena ? </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >Estou de quarentena obrigatória</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
        <Text >Tive alta médica da quarentena</Text>
      </View>

 
      <Text style={{paddingTop:20}}>sua resposta nesta etapa foi: {resposta1} </Text>
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
       
    
    </View>
  );
}
