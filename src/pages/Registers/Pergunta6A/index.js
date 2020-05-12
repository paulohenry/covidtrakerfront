import React, {useState, useEffect}from 'react';
import { View, Text, Platform, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import keys from '../../../temporaryStorage/keys';
import styles from '../../../styles/formStyles';
import CheckBoxIOS from '../../../components/CheckBoxIOS';

// import { Container } from './styles';

const os = Platform.OS

export default function Pergunta6A() {

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
  
  //Ios disable Check
  const [disable1, setDisable1] = useState(true)
  const [disable2, setDisable2] = useState(true)
  const [disable3, setDisable3] = useState(true)
  const [disable4, setDisable4] = useState(true)
  const [disable5, setDisable5] = useState(true)
  const [disable6, setDisable6] = useState(true)
  const [disable7, setDisable7] = useState(true)
 
  const [resposta1, setResposta1] = useState('')


  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==true){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(false)
    
      setResposta1('Não estou nesta lista')

    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==true && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(false)
      setIsDisable7(true)
     
      setResposta1('Serviços funerários em geral')
     
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==true && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(false)
      setIsDisable6(true)
      setIsDisable7(true)
   
      setResposta1('Atendente') 
     
    }
    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==true && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(false)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
     
      setResposta1('Enfermeiro(a)') 
     
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
       
      setResposta1('Remoção de doentes') 
     
    }if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(false)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('Clínica Médica') 
     
    }if (isSelected1 == true  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(false)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('Médico intensivista') 
     
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(false)
      setIsDisable6(false)
      setIsDisable7(false)
      setResposta1('') 
     
    }
  
 
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5,isSelected6,isSelected7])
 

_storeData = async () => {
    
   try{
  await AsyncStorage.setItem(keys.questionario.Q6A, JSON.stringify(resposta1))
  const save = await AsyncStorage.getItem(keys.questionario.Q6A)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }else if(isSelected1||isSelected2||isSelected3||isSelected4|| isSelected5||isSelected6|| isSelected7){ 
        nav.navigate('Pergunta7')    
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
      
     <Text style={styles.titles} >Você está trabalhando na linha de frente da saúde como:</Text>
     {/*
     Logica nao permite que sejam selecionada mais de uma alternativa, verificar utiliadade do codigo.
      <Text style={{color:'#FE0000', fontSize:17}} >Responda quantas alternativas quiser </Text> */}
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
     {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected1}
          disable={disable1}
          onPress={() => {
            setDisable1(false)
            setDisable2(true)
            setDisable3(true)
            setDisable4(true)
            setDisable5(true)
            setDisable7(true)
            setDisable6(true)

            setSelection1(true)
            setSelection2(false)
            setSelection3(false)
            setSelection4(false)
            setSelection5(false)
            setSelection6(false)
            setSelection7(false)
          }}
          />
        :
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
      }
        <Text >Médico intensivista</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected2}
          disable={disable2}
          onPress={() => {
            setDisable1(true)
            setDisable2(false)
            setDisable3(true)
            setDisable4(true)
            setDisable5(true)
            setDisable7(true)
            setDisable7(true)
            setDisable6(true)

            setSelection1(false)
            setSelection2(true)
            setSelection3(false)
            setSelection4(false)
            setSelection5(false)
            setSelection6(false)
            setSelection7(false)
          }}
          />
        :
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
      }
       <Text >Clinica Médica</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected3}
          disable={disable3}
          onPress={() => {
            setDisable1(true)
            setDisable2(true)
            setDisable3(false)
            setDisable4(true)
            setDisable5(true)
            setDisable6(true)
            setDisable7(true)

            setSelection1(false)
            setSelection2(false)
            setSelection3(true)
            setSelection4(false)
            setSelection5(false)
            setSelection6(false)
            setSelection7(false)

          }}
          />
        :
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
        />
      }
       <Text >Remoção de doentes</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected4}
          disable={disable4}
          onPress={() => {
            setDisable1(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(false)
            setDisable5(true)
            setDisable6(true)
            setDisable7(true)

            setSelection1(false)
            setSelection2(false)
            setSelection3(false)
            setSelection4(true)
            setSelection5(false)
            setSelection6(false)
            setSelection7(false)

          }}
          />
        :
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}          
        />
      }
       <Text >Enfermeiro(a)</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected5}
          disable={disable5}
          onPress={() => {
            setDisable1(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(true)
            setDisable5(false)
            setDisable6(true)
            setDisable7(true)

            setSelection1(false)
            setSelection2(false)
            setSelection3(false)
            setSelection4(false)
            setSelection5(true)
            setSelection6(false)
            setSelection7(false)
          }}
          />
        :
        <CheckBox
           disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}          
        />
      }
       <Text >Atendente</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected6}
          disable={disable6}
          onPress={() => {
            setDisable1(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(true)
            setDisable5(true)
            setDisable6(false)
            setDisable7(true)

            setSelection1(false)
            setSelection2(false)
            setSelection3(false)
            setSelection4(false)
            setSelection5(false)
            setSelection6(true)
            setSelection7(false)

          }}
          />
        :
        <CheckBox
           disabled={isDisable6}
          value={isSelected6}
          onValueChange={setSelection6}          
        />
      }
       <Text >Serviços funerários em geral</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected7}
          disable={disable7}
          onPress={() => {
            setDisable1(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(true)
            setDisable5(true)
            setDisable6(true)
            setDisable7(false)

            setSelection1(false)
            setSelection2(false)
            setSelection3(false)
            setSelection4(false)
            setSelection5(false)
            setSelection6(false)
            setSelection7(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable7}
          value={isSelected7}
          onValueChange={setSelection7}          
        />
      }
       <Text >Não estou nesta lista</Text>
      </View>

  
      <Text style={{paddingTop:20}}>Sua resposta nesta etapa: {resposta1} </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
