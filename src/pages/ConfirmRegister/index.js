import React,{useEffect, useState} from 'react';
import { ScrollView, Text,TouchableOpacity, AsyncStorage,Alert, View} from 'react-native';
import styles from '../../styles/formStyles'
import { useNavigation } from '@react-navigation/native'
import keys from '../../temporaryStorage/keys'
import {Ionicons} from '@expo/vector-icons'
// import { Container } from './styles';

export default function ConfirmRegister() {
 const nav = useNavigation();

 const [resposta1, setResposta1]=useState('')
 const [resposta2, setResposta2]=useState('')
 const [resposta3, setResposta3]=useState('')
 const [resposta4, setResposta4]=useState('')
 const [resposta5, setResposta5]=useState('')
 const [resposta6, setResposta6]=useState('')
 const [resposta7, setResposta7]=useState('')
 const [resposta8, setResposta8]=useState('')
 const [resposta9, setResposta9]=useState('')
 const [resposta10, setResposta10]=useState('')
 const [resposta11, setResposta11]=useState('')
 const [resposta12, setResposta12]=useState('')
 const [resposta13, setResposta13]=useState('')
 const [resposta14, setResposta14]=useState('')
 const [resposta15, setResposta15]=useState('')
 const [resposta16, setResposta16]=useState('')
 const [resposta17, setResposta17]=useState('')
 const [resposta18, setResposta18]=useState('')
 const [resposta19, setResposta19]=useState('')
 const [resposta20, setResposta20]=useState('')
 const [resposta21, setResposta21]=useState('')

 const [primeiroNome,setPrimeiroNome]=useState('')
 const [segundoNome,setSegundoNome]=useState('')
 const [telefone,setTelefone]=useState('')
 const [cep,setCep]=useState('')

 const [senha,setSenha]=useState('')
 const [confirmSenha,setConfirmSenha]=useState('')
 

 
   
 
 

 async function  _storeData (){   
  try{

 setPrimeiroNome(await AsyncStorage.getItem(keys.user.primeiroNome))
 setSegundoNome(await AsyncStorage.getItem(keys.user.segundoNome))
 setTelefone(await AsyncStorage.getItem(keys.user.telefone))
 setCep(await AsyncStorage.getItem(keys.user.cep))
 setSenha(await AsyncStorage.getItem(keys.user.senha))
 setConfirmSenha(await AsyncStorage.getItem(keys.user.confirmSenha))

 setResposta1(await AsyncStorage.getItem(keys.questionario.Q1))
 setResposta2(await AsyncStorage.getItem(keys.questionario.Q2))
 setResposta3(await AsyncStorage.getItem(keys.questionario.Q3))
 setResposta4(await AsyncStorage.getItem(keys.questionario.Q4))
 setResposta5(await AsyncStorage.getItem(keys.questionario.Q5))
 setResposta6(await AsyncStorage.getItem(keys.questionario.Q6))
 setResposta7(await AsyncStorage.getItem(keys.questionario.Q7))
 setResposta8(await AsyncStorage.getItem(keys.questionario.Q8))
 setResposta9(await AsyncStorage.getItem(keys.questionario.Q9))
 setResposta10(await AsyncStorage.getItem(keys.questionario.Q10))
 setResposta11(await AsyncStorage.getItem(keys.questionario.Q11))
 setResposta12(await AsyncStorage.getItem(keys.questionario.Q12))
 setResposta13(await AsyncStorage.getItem(keys.questionario.Q13))
 setResposta14(await AsyncStorage.getItem(keys.questionario.Q14))
 setResposta15(await AsyncStorage.getItem(keys.questionario.Q15))
 setResposta16(await AsyncStorage.getItem(keys.questionario.Q16))
 setResposta17(await AsyncStorage.getItem(keys.questionario.Q17))
 setResposta18(await AsyncStorage.getItem(keys.questionario.Q18))
 setResposta19(await AsyncStorage.getItem(keys.questionario.Q19))
 setResposta20(await AsyncStorage.getItem(keys.questionario.Q20))
 setResposta21(await AsyncStorage.getItem(keys.questionario.Q6A))

 
   
   }catch(erro){
     Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
   }   
  
};
const res = {
  confirmScreen:{
      user_data:{
         primeiroNome:primeiroNome ,
         segundoNome:segundoNome ,
         telefone:telefone ,
         cep:cep ,
         senha:senha ,
         confirmSenha:confirmSenha,
      },
      questionario:{
         resposta1:resposta1 ,
         resposta2:resposta2 ,
         resposta3:resposta3 ,
         resposta4:resposta4 ,
         resposta5 :resposta5,
         resposta6 :resposta6,
         resposta7 :resposta7,
         resposta8 :resposta8,
         resposta9 :resposta9,
         resposta10 :resposta10,
         resposta11 :resposta11,
         resposta12 :resposta12,
         resposta13 :resposta13,
         resposta14 :resposta14,
         resposta15 :resposta15,
         resposta16 :resposta16,
         resposta17 :resposta17,
         resposta18 :resposta18,
         resposta19 :resposta19,
         resposta20 :resposta20,
         resposta21:resposta21,
      }
  }



  
}
async function _save(){
      
    
  await AsyncStorage.setItem(keys.confirmScreen.CONFIRM, JSON.stringify(res))
  //// manda pro backend
 const save = await AsyncStorage.getItem(keys.confirmScreen.CONFIRM)
 if(!save){
   Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
 }else{
      //chama o axios e depois manda pra tela de mapas
      
      console.log(res)
      nav.navigate('Login')

 } 
}

useEffect(() => { 
    _storeData()  
},[])


  return (
    <ScrollView style={[styles.container,{backgroundColor:'#FFF'}]}>
      <View style={{alignItems:'center', marginVertical:100}}>

        <Ionicons  name="ios-checkmark-circle"size={200} color="#33733F" />
      </View>
        
        <TouchableOpacity style={styles.buttonEntrar}onPress={_save}>
       <Text style={styles.textButton}>Concluir cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonEntrar,{marginBottom:50}]}onPress={()=>{nav.navigate('HowToWork')}}>
       <Text style={styles.textButton}>Refazer cadastro</Text>
      </TouchableOpacity>

      
        
     
    </ScrollView>
  );
}
