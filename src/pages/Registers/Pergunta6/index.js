import React, {useState, useEffect}from 'react';
import { View, Text, Platform, CheckBox, AsyncStorage,Alert, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import keys from '../../../temporaryStorage/keys';
import styles from '../../../styles/formStyles';
import CheckBoxIOS from '../../../components/CheckBoxIOS';

// import { Container } from './styles';

const os = Platform.OS

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

  const [isSelected16, setSelection16] = useState(false);
  const [isDisable16, setIsDisable16] = useState(false);

  //Ios disable Check
  const [disable1, setDisable1] = useState(true)
  const [disable2, setDisable2] = useState(true)
  const [disable3, setDisable3] = useState(true)
  const [disable4, setDisable4] = useState(true)
  const [disable5, setDisable5] = useState(true)
  const [disable6, setDisable6] = useState(true)
  const [disable7, setDisable7] = useState(true)
  const [disable8, setDisable8] = useState(true)
  const [disable9, setDisable9] = useState(true)
  const [disable10, setDisable10] = useState(true)
  const [disable11, setDisable11] = useState(true)
  const [disable12, setDisable12] = useState(true)
  const [disable13, setDisable13] = useState(true)
  const [disable14, setDisable14] = useState(true)
  const [disable15, setDisable15] = useState(true)
  const [disable16, setDisable16] = useState(true)

  
 
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
  const [resposta16, setResposta16] = useState('')
 

  

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
    if(isSelected16){
      setResposta16('Dedos inchados com pontas rocheadas')
    }else{ setResposta16('')}

  
 
},[isSelected1, isSelected2, isSelected3, isSelected4,isSelected5,
  isSelected6, isSelected7, isSelected8, isSelected9,isSelected10,
  isSelected11, isSelected12, isSelected13, isSelected14,isSelected15, isSelected16
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
        resposta16,
     ]

   try{
  await AsyncStorage.setItem(keys.questionario.Q6, JSON.stringify(res))
  const save = await AsyncStorage.getItem(keys.questionario.Q6)
  if(!save){
    Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
  }else if(isSelected1||isSelected2||isSelected3||isSelected4|| isSelected5 ||
    isSelected6||isSelected7||isSelected8||isSelected9|| isSelected10||
    isSelected11||isSelected12||isSelected13||isSelected14|| isSelected15||isSelected16){ 
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
     {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected1}
          disable={disable1}
          onPress={() => {
             isSelected1 ? setSelection1(false) : setSelection1(true)
 
             disable1 ? setDisable1(false) : setDisable1(true)

          }}
          />
        :
        <CheckBox
        disabled={isDisable1}
          value={isSelected1}
          onValueChange={setSelection1}
        />
      }
        <Text >Espirros frequentes</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected2}
          disable={disable2}
          onPress={() => {
             isSelected2 ? setSelection2(false) : setSelection2(true)
 
             disable2 ? setDisable2(false) : setDisable2(true)

          }}
          />
        :
        <CheckBox
        disabled={isDisable2}
          value={isSelected2}
          onValueChange={setSelection2}
        />
      }
       <Text >Coriza</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected3}
          disable={disable3}
          onPress={() => {
             isSelected3 ? setSelection3(false) : setSelection3(true)
 
             disable3 ? setDisable3(false) : setDisable3(true)

          }}
          />
        :
        <CheckBox
        disabled={isDisable3}
          value={isSelected3}
          onValueChange={setSelection3}
        />
      }
       <Text >Nariz entupido</Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected4}
          disable={disable4}
          onPress={() => {
             isSelected4 ? setSelection4(false) : setSelection4(true)
 
             disable4 ? setDisable4(false) : setDisable4(true)
          }}
          />
        :
        <CheckBox
           disabled={isDisable4}
          value={isSelected4}
          onValueChange={setSelection4}          
        />
      }
       <Text >Tosse seca frequente</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected5}
          disable={disable5}
          onPress={() => {
             isSelected5 ? setSelection5(false) : setSelection5(true)
 
             disable5 ? setDisable5(false) : setDisable5(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable5}
          value={isSelected5}
          onValueChange={setSelection5}          
        />
      }
       <Text >Tosse com secreção </Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected6}
          disable={disable6}
          onPress={() => {
             isSelected6 ? setSelection6(false) : setSelection6(true)
 
             disable6 ? setDisable6(false) : setDisable6(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable6}
          value={isSelected6}
          onValueChange={setSelection6}          
        />
      }
       <Text >Dor de garganta </Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected7}
          disable={disable7}
          onPress={() => {
             isSelected7 ? setSelection7(false) : setSelection7(true)
 
             disable7 ? setDisable7(false) : setDisable7(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable7}
          value={isSelected7}
          onValueChange={setSelection7}          
        />
      }
       <Text >Dor de cabeça </Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected8}
          disable={disable8}
          onPress={() => {
             isSelected8 ? setSelection8(false) : setSelection8(true)
 
             disable8 ? setDisable8(false) : setDisable8(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable8}
          value={isSelected8}
          onValueChange={setSelection8}          
        />
      }
       <Text >Dores musculares (sem ter feito esforço extra) </Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected9}
          disable={disable9}
          onPress={() => {
             isSelected9 ? setSelection9(false) : setSelection9(true)
 
             disable9 ? setDisable9(false) : setDisable9(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable9}
          value={isSelected9}
          onValueChange={setSelection9}          
        />
      }
       <Text >Falta de energia, cansaço, forte sensação de desgaste</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected10}
          disable={disable10}
          onPress={() => {
             isSelected10 ? setSelection10(false) : setSelection10(true)
 
             disable10 ? setDisable10(false) : setDisable10(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable10}
          value={isSelected10}
          onValueChange={setSelection10}          
        />
      }
       <Text >Febre maior que 38°C  (duradoura)</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected11}
          disable={disable11}
          onPress={() => {
             isSelected11 ? setSelection11(false) : setSelection11(true)
 
             disable11 ? setDisable11(false) : setDisable11(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable11}
          value={isSelected11}
          onValueChange={setSelection11}          
        />
      }
       <Text >Falta de paladar ou olfato </Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected12}
          disable={disable12}
          onPress={() => {
             isSelected12 ? setSelection12(false) : setSelection12(true)
 
             disable12 ? setDisable12(false) : setDisable12(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable12}
          value={isSelected12}
          onValueChange={setSelection12}          
        />
      }
       <Text >Falta de ar ou desconforto para respirar fora do comum </Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected13}
          disable={disable13}
          onPress={() => {
             isSelected13 ? setSelection13(false) : setSelection13(true)
 
             disable13 ? setDisable13(false) : setDisable13(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable13}
          value={isSelected13}
          onValueChange={setSelection13}          
        />
      }
       <Text >Dor no peito</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected14}
          disable={disable14}
          onPress={() => {
             isSelected14 ? setSelection14(false) : setSelection14(true)
 
             disable14 ? setDisable14(false) : setDisable14(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable14}
          value={isSelected14}
          onValueChange={setSelection14}          
        />
      }
       <Text >Problemas intestinais(diarreia) </Text>
      </View>

      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected15}
          disable={disable15}
          onPress={() => {
             isSelected15 ? setSelection15(false) : setSelection15(true)
 
             disable15 ? setDisable15(false) : setDisable15(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable15}
          value={isSelected15}
          onValueChange={setSelection15}          
        />
      }
       <Text >Dores nas articulações ou nos olhos</Text>
      </View>
      <View style={styles.alternatives}>
      {os == 'ios' ?
          <CheckBoxIOS
          value={isSelected16}
          disable={disable16}
          onPress={() => {
             isSelected16 ? setSelection16(false) : setSelection16(true)
 
             disable16 ? setDisable16(false) : setDisable16(true)

          }}
          />
        :
        <CheckBox
           disabled={isDisable16}
          value={isSelected16}
          onValueChange={setSelection16}          
        />
      }
       <Text >Dedos inchados com pontas rocheadas</Text>
      </View>
  
    {
    //***.Analisar se este trexo realmente é necessario pois atrapalha na vizualização do botão
    /* {<Text style={{paddingTop:20}}> {`Sua resposta nesta etapa: ${resposta1 != '' ? '' : resposta1} ${resposta2} ${resposta3} ${resposta4} ${resposta5}
        ${resposta6} ${resposta7} ${resposta8} ${resposta9} ${resposta10}${resposta11} ${resposta12} ${resposta13} ${resposta14}
         ${resposta15}  ${resposta16}
        ` } </Text>} */}
      
      </View>
      <TouchableOpacity style={[styles.buttonEntrar, {marginBottom:100}]}onPress={_storeData}>
        <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
      
    
    </ScrollView>
  );
}