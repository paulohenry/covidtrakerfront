import React, {useState, useEffect}from 'react';
import { View, Text, Platform, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/formStyles';
import keys from '../../../temporaryStorage/keys';
import CheckBoxIOS from '../../../components/CheckBoxIOS';
// import { Container } from './styles';

const os = Platform.OS

export default function Pergunta13() {

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

   
    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==true ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(false)
     
      
      setResposta1('Não costumo fazer isso') 
     
    }
    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==true && isSelected5 ==false ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(false)
      setIsDisable5(true)
     
     
      setResposta1('Não me lembro') 
      
     
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true && isSelected4 ==false && isSelected5 ==false ){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setIsDisable4(true)
      setIsDisable5(true)
     
     
      setResposta1('Sim, mas lavo as mãos antes, quando sinto necessidade') 
      
     
    }if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false){
      setIsDisable1(true)
      setIsDisable2(false)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
     
    
      setResposta1('Sim, mas percebo e me controlo') 
      
     
    }if (isSelected1 == true  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false){
      setIsDisable1(false)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
     
      setResposta1('Sempre e sem controle') 
     
     
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false ){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(false)
     
     
     
    }
  
 
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5, resposta1])
 

_storeData = async () => {

   try{
  await AsyncStorage.setItem(keys.questionario.Q13, resposta1)
  const save = await AsyncStorage.getItem(keys.questionario.Q13)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }else if(isSelected1||isSelected2||isSelected3||isSelected4|| isSelected5){ 
        nav.navigate('Pergunta14')    
        console.log(save)
      }else{
        Alert.alert('cadastro', 'Você precisa responder a pergunta para continuar')
      }  
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

   
  return (
    <View style={styles.container}>
      
   
     <Text style={styles.titles} >Leva as mãos  ao rosto(olhos,nariz e boca)</Text>
    
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
             setSelection5(false)

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
        <Text >Sempre e sem controle</Text>
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
             setSelection5(false)

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
       <Text >Sim, mas percebo e me controlo</Text>
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
             setSelection5(false)

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
       <Text >Sim, mas lavo as mãos antes, quando sinto necessidade</Text>
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
             setSelection5(false)

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
       <Text >Não me lembro</Text>
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
       <Text >Não costumo fazer isso</Text>
      </View>
      

  
    <Text style={{paddingTop:20}}> {`Sua resposta nesta etapa: ${resposta1}` } </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
