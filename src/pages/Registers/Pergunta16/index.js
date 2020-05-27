import React, {useState, useEffect}from 'react';
import { View, Text, Platform, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/formStyles';
import keys from '../../../temporaryStorage/keys';
import CheckBoxIOS from '../../../components/CheckBoxIOS';
// import { Container } from './styles';

const os = Platform.OS

export default function Pergunta16() {
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

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
    

      setResposta1('') 

    }else if(isSelected1 == true  && isSelected2 ==false && isSelected3 ==false  ){
        
        setIsDisable1(false)
        setIsDisable2(true)
        setIsDisable3(true)
        
        
        setResposta1('Masculino') 
        
       
    }else if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false ){
        setIsDisable1(true)
        setIsDisable2(false)
        setIsDisable3(true)
       

        setResposta1('Feminino') 
    }else if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      

      setResposta1('Outros') 
    }
  },[isSelected1, isSelected2, isSelected3])
 

_storeData = async () => {
   
   try{
  await AsyncStorage.setItem(keys.questionario.Q16, resposta1)
  const save = await AsyncStorage.getItem(keys.questionario.Q16)
  if(!save){
    Alert.alert('Cadastro 1', 'Você precisa responder a pergunta prara continuar')
  }else{    
    if(isSelected1|| isSelected2|| isSelected3){
      nav.navigate('Pergunta17')
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
   
     <Text style={styles.titles} >Qual o seu sexo ? </Text>
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
        <Text >Masculino</Text>
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
        <Text >Feminino</Text>
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
        <Text >Outros</Text>
      </View>

      <Text style={{paddingTop:20}}>sua resposta nesta etapa foi: {resposta1} </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>

    </View>
  );
}
