import React, {useState, useEffect}from 'react';
import { View, Text, Platform, TouchableOpacity, CheckBox, AsyncStorage,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/formStyles';
import keys from '../../../temporaryStorage/keys';
import CheckBoxIOS from '../../../components/CheckBoxIOS';

// import { Container } from './styles';

const os = Platform.OS

export default function Pergunta5A() {
  const nav = useNavigation()

  const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);
  const [isDisable2, setIsDisable2] = useState(false);

  const [isSelected3, setSelection3] = useState(false);
  const [isDisable3, setIsDisable3] = useState(false);

  //Ios disable Check
  const [disable1, setDisable1] = useState(true)
  const [disable2, setDisable2] = useState(true)
  const [disable3, setDisable3] = useState(true)

  const [resposta1, setResposta1] = useState('')
  

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 == false ){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
     
      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 == false && isSelected3 == false ){
        
        setIsDisable1(false)
        setIsDisable2(true)
        setIsDisable3(true)
     
        
        setResposta1('Sempre, cobrindo o nariz e a boca') 
        
    }else if (isSelected1 == false  && isSelected2 ==true && isSelected3 == false ){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
        
        setResposta1('Sempre, mas as vezes relaxo no uso') 

    }else if(isSelected1 == false && isSelected2 ==false && isSelected3 == true){
        setIsDisable1(true)
        setIsDisable2(true)
        setIsDisable3(false)

        setResposta1('Nem sempre')
        
    }
  },[isSelected1, isSelected2, isSelected3])
 

_storeData = async () => {
 
try{
 
  await AsyncStorage.setItem(keys.questionario.Q5A, JSON.stringify(resposta1))
  const save = await AsyncStorage.getItem(keys.questionario.Q5A)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }
  if(isSelected1==false && isSelected2==false && isSelected3==false){
  Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')

  }
    if(isSelected1){
      nav.navigate('Pergunta6')
    }else if(isSelected2){
      nav.navigate('Pergunta6')
    }else if(isSelected3){
        nav.navigate('Pergunta6')
    }
        console.log(save)
      
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

  return (
    <View style={styles.container}>
      
     <Text style={styles.titles}>Você usa máscara?</Text>
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

            setDisable1(false)
            setDisable2(true)
            setDisable3(true)
            
         }}
         />
        : 
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
      }
        <Text>Sempre, cobrindo o nariz e a boca</Text>
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

            setDisable1(true)
            setDisable2(false)
            setDisable3(true)

            
         }}
         />
        : 
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
      }
        <Text>Sempre, mas as vezes relaxo no uso</Text>
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

            setDisable1(true)
            setDisable2(true)
            setDisable3(false)
            
         }}
         />
        : 
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
        />
      }
        <Text>Nem sempre</Text>
      </View>

      <Text style={{paddingTop:20}}>sua resposta nesta etapa foi: {resposta1 == '' ? 'Nenhuma resposta selecionada' : resposta1} </Text>
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
       
    
    </View>
  );
}
