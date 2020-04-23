import React, {useState, useEffect}from 'react';
import { View, Text, CheckBox, AsyncStorage,Alert, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import keys from '../../../temporaryStorage/keys'
import styles from '../../../styles/formStyles'
// import { Container } from './styles';

export default function Pergunta6() {

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

  const [isSelected9, setSelection9] = useState(false);
  const [isDisable9, setIsDisable9] = useState(false);

  const [isSelected10, setSelection10] = useState(false);
  const [isDisable10, setIsDisable10] = useState(false);

  const [isSelected11, setSelection11] = useState(false);
  const [isDisable11, setIsDisable11] = useState(false);

  const [isSelected12, setSelection12] = useState(false);
  const [isDisable12, setIsDisable12] = useState(false);

  const [isSelected13, setSelection13] = useState(false);
  const [isDisable13, setIsDisable13] = useState(false);

  const [isSelected14, setSelection14] = useState(false);
  const [isDisable14, setIsDisable14] = useState(false);

  const [isSelected15, setSelection15] = useState(false);
  const [isDisable15, setIsDisable15] = useState(false);


  
 
  const [resposta1, setResposta1] = useState('')
  const [resposta2, setResposta2] = useState('')
  const [resposta3, setResposta3] = useState('')
  const [resposta4, setResposta4] = useState('')
  const [resposta5, setResposta5] = useState('')
  const [resposta6, setResposta6] = useState('')
  const [resposta7, setResposta7] = useState('')
  const [resposta8, setResposta8] = useState('')
  const [resposta9, setResposta9] = useState('')
  const [resposta10, setResposta10] = useState('')
  const [resposta11, setResposta11] = useState('')
  const [resposta12, setResposta12] = useState('')
  const [resposta13, setResposta13] = useState('')
  const [resposta14, setResposta14] = useState('')
  const [resposta15, setResposta15] = useState('')
 

  

  useEffect(() => {

    if(isSelected1){
      setResposta1('Espirros frequentes')
    }else{ setResposta1('')}
    if(isSelected2){
      setResposta2('Coriza')
    }else{ setResposta2('')}
    if(isSelected3){
      setResposta3('Nariz entupido')
    }else{ setResposta3('')}
    if(isSelected4){
      setResposta4('Tosse seca frequente')
    }else{ setResposta4('')}
    if(isSelected5){
      setResposta5('Tosse com secreção')
    }else{ setResposta5('')}
    if(isSelected6){
      setResposta6('Dor de garganta')
    }else{ setResposta6('')}
    if(isSelected7){
      setResposta7('Dor de cabeça')
    }else{ setResposta7('')}
    if(isSelected8){
      setResposta8('Dores musculares ')
    }else{ setResposta8('')}
    if(isSelected9){
      setResposta9('Falta de energia, cansaço, forte sensação de desgaste')
    }else{ setResposta9('')}
    if(isSelected10){
      setResposta10('Febre maior que 38°C')
    }else{ setResposta10('')}
    if(isSelected11){
      setResposta11('Falta de paladar ou olfato')
    }else{ setResposta11('')}
    if(isSelected12){
      setResposta12('Falta de ar ou desconforto para respirar anormal')
    }else{ setResposta12('')}
    if(isSelected13){
      setResposta13('Dor no peito')
    }else{ setResposta13('')}
    if(isSelected14){
      setResposta14('Problemas intestinais (diarreia)')
    }else{ setResposta14('')}
    if(isSelected15){
      setResposta15('Dores nas articulações ou nos olhos')
    }else{ setResposta15('')}
 

  
 
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5,
  isSelected6, isSelected7, isSelected8, isSelected9,isSelected10,
  isSelected11, isSelected12, isSelected13, isSelected14,isSelected15
  ])
 

_storeData = async () => {
     
     const res = [
        resposta1,
        resposta2,
        resposta3,
        resposta4,
        resposta5,
        resposta6,
        resposta7,
        resposta8,
        resposta9,
        resposta10,
        resposta11,
        resposta12,
        resposta13,
        resposta14,
        resposta15,
     ]

   try{
  await AsyncStorage.setItem(keys.questionario.Q6, JSON.stringify(res))
  const save = await AsyncStorage.getItem(keys.questionario.Q6)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }else if(isSelected1||isSelected2||isSelected3||isSelected4|| isSelected5 ||
    isSelected6||isSelected7||isSelected8||isSelected9|| isSelected10||
    isSelected11||isSelected12||isSelected13||isSelected14|| isSelected15){ 
        nav.navigate('Pergunta6A')    
        console.log(save)
      }else{
        Alert.alert('cadastro', 'Você precisa responder a pergunta para continuar')
      }
    }catch(erro){
      Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
    }   
   
};

   
  return (
    <ScrollView style={styles.container}>
      
   
     <Text style={styles.titles} >Quais destes sintomas você teve nos últimos 07 dias? </Text>
     <Text style={{color:'#FE0000', fontSize:17}} >Responda quantas alternativas quiser </Text>
     <View  style={{paddingVertical:20, paddingHorizontal:20}}>
     <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text >Espirros frequentes</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
       <Text >Coriza</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
          
        />
       <Text >nariz entupido</Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}          
        />
       <Text >Tosse seca frequente</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}          
        />
       <Text >Tosse com secreção </Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable6}
          value={isSelected6}
          onValueChange={setSelection6}          
        />
       <Text >Dor de garganta </Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable7}
          value={isSelected7}
          onValueChange={setSelection7}          
        />
       <Text >Dor de cabeça </Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable8}
          value={isSelected8}
          onValueChange={setSelection8}          
        />
       <Text >Dores musculares (sem ter feito esforço extra) </Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable9}
          value={isSelected9}
          onValueChange={setSelection9}          
        />
       <Text >falta de energia, cansaço, forte sensação de desgaste </Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable10}
          value={isSelected10}
          onValueChange={setSelection10}          
        />
       <Text >Febre maior que 38°C  (duradoura)</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable11}
          value={isSelected11}
          onValueChange={setSelection11}          
        />
       <Text >Falta de paladar ou olfato </Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable12}
          value={isSelected12}
          onValueChange={setSelection12}          
        />
       <Text >Falta de ar ou desconforto para respirar fora do comum </Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable13}
          value={isSelected13}
          onValueChange={setSelection13}          
        />
       <Text >Dor no peito</Text>
      </View>
      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable14}
          value={isSelected14}
          onValueChange={setSelection14}          
        />
       <Text >Problemas intestinais(diarreia) </Text>
      </View>

      <View style={styles.alternatives}>
        <CheckBox
           disabled={isDisable15}
          value={isSelected15}
          onValueChange={setSelection15}          
        />
       <Text >Dores nas articulações ou nos olhos</Text>
      </View>


  
    <Text style={{paddingTop:20}}> {`Sua resposta nesta etapa: ${resposta1} ${resposta2} ${resposta3} ${resposta4} ${resposta5}
        ${resposta6} ${resposta7} ${resposta8} ${resposta9} ${resposta10}${resposta11} ${resposta12} ${resposta13} ${resposta14} ${resposta15}
        ` } </Text>
      
      </View>
      <TouchableOpacity style={[styles.buttonEntrar, {marginBottom:100}]}onPress={_storeData}>
       <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </ScrollView>
  );
}
