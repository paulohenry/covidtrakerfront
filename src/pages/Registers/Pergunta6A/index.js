import React, {useState, useEffect}from 'react';
import { View, Text, CheckBox, AsyncStorage,Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import keys from '../../../temporaryStorage/keys'
import styles from '../../../styles/formStyles'
// import { Container } from './styles';

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
  
 
  const [resposta1, setResposta1] = useState('')
  const [resposta2, setResposta2] = useState('')
  const [resposta3, setResposta3] = useState('')
  const [resposta4, setResposta4] = useState('')
  const [resposta5, setResposta5] = useState('')
  const [resposta6, setResposta6] = useState('')
  const [resposta7, setResposta7] = useState('')

  useEffect(() => {

    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==true){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(false)
      setResposta1('') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('')
      setResposta7('Não estou nesta lista')

    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==true && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(false)
      setIsDisable7(true)
      setResposta1('') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('Serviços funerários em geral')
      setResposta7('')
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==true && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(false)
      setIsDisable7(true)
      setResposta1('') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('Serviços funerários em geral')
      setResposta7('')
    }
    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==true && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(false)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('Atendente') 
      setResposta6('')
      setResposta7('')
    }
    if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==true && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(false)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('enfermeiro(a)') 
      setResposta5('') 
      setResposta6('')
      setResposta7('')
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('') 
      setResposta2('') 
      setResposta3('Remoção de doentes') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('')
      setResposta7('')
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==true && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(true)
      setIsDisable3(false)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('') 
      setResposta2('') 
      setResposta3('Remoção de doentes') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('')
      setResposta7('')
    }if (isSelected1 == false  && isSelected2 ==true && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(true)
      setIsDisable2(false)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('') 
      setResposta2('Clínica Médica') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('')
      setResposta7('')
    }if (isSelected1 == true  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(false)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('Médico intensivista') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('')
      setResposta7('')
    }if (isSelected1 == true  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(false)
      setIsDisable2(true)
      setIsDisable3(true)
      setIsDisable4(true)
      setIsDisable5(true)
      setIsDisable6(true)
      setIsDisable7(true)
      setResposta1('Médico intensivista') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('')
      setResposta7('')
    }if (isSelected1 == false  && isSelected2 ==false && isSelected3 ==false && isSelected4 ==false && isSelected5 ==false && isSelected6==false && isSelected7==false){
      setIsDisable1(false)
      setIsDisable2(false)
      setIsDisable3(false)
      setIsDisable4(false)
      setIsDisable5(false)
      setIsDisable6(false)
      setIsDisable7(false)
      setResposta1('') 
      setResposta2('') 
      setResposta3('') 
      setResposta4('') 
      setResposta5('') 
      setResposta6('')
      setResposta7('')
    }
  
 
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5,isSelected6,isSelected7])
 

_storeData = async () => {
     const res = [
       resposta1,
       resposta2,
       resposta3,
       resposta4,
       resposta5,
       resposta6,
       resposta7,
     ]
   try{
  await AsyncStorage.setItem(keys.questionario.Q6A, JSON.stringify(res))
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
     <Text style={{color:'#FE0000', fontSize:17}} >Responda quantas alternativas quiser </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >Médico intensivista</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
       <Text >Clinica Médica</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
          
        />
       <Text >Remoção de doentes</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}          
        />
       <Text >Enfermeiro</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}          
        />
       <Text >Atendente</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable6}
          value={isSelected6}
          onValueChange={setSelection6}          
        />
       <Text >Serviços funerários em geral</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable7}
          value={isSelected7}
          onValueChange={setSelection7}          
        />
       <Text >Não estou nesta lista</Text>
      </View>

  
    <Text style={{paddingTop:20}}> {`Sua resposta nesta etapa: ${resposta1} ${resposta2} ${resposta3} ${resposta4} ${resposta5} ${resposta6} ${resposta7}` } </Text>
      
      </View>
      <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
