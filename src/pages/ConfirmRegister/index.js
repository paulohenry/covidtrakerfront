import React,{useEffect, useState} from 'react';
import { ScrollView, Text,TouchableOpacity, AsyncStorage,Alert, View,Platform,CheckBox} from 'react-native';
import styles from '../../styles/formStyles'
import { useNavigation } from '@react-navigation/native'
import keys from '../../temporaryStorage/keys'
import {Ionicons} from '@expo/vector-icons'
import CheckBoxIOS from '../../components/CheckBoxIOS/';
// import { Container } from './styles';



export default function ConfirmRegister() {
 const nav = useNavigation();
 const os = Platform.OS
 const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);
 
 const [resposta1, setResposta1]=useState('')
 const [resposta2, setResposta2]=useState('')
 const [resposta3, setResposta3]=useState('')
 const [resposta4, setResposta4]=useState('')
 const [resposta5, setResposta5]=useState('')
 const [resposta6, setResposta6]=useState('')
 const [resposta6A, setResposta6A]=useState('')
 const [resposta5A, setResposta5A]=useState('')
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
 setResposta6A(await AsyncStorage.getItem(keys.questionario.Q6A))
 setResposta5A(await AsyncStorage.getItem(keys.questionario.Q5A))
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


async function _save(){
        if(isSelected1==false){
          Alert.alert('Covidtracker', 'voce precisa aceitar os termos para continuar')
        }else{
          Alert.alert('Covidtracker', 'Cadastrado com sucesso, faça o login para acessar o mapa de contágio')
              nav.navigate('Login')
        }
 
}
async function _politicas(){
    
  nav.navigate('Politicas')


}
async function _termos(){
    
  nav.navigate('Termos')


}

useEffect(() => { 
    _storeData()  
},[])

  return (
    <ScrollView style={[styles.container,{backgroundColor:'#FFF'}]}>
      <View style={{alignItems:'center', marginVertical:80}}>
        <Ionicons  name="ios-checkmark-circle"size={200} color="rgba(0,150,64,1)" />
      </View>
      <View style={styles.alternatives}>
       {os == 'ios' ? 
         <CheckBoxIOS
         value={isSelected1}
         disable={disable1}
         onPress={() => {
            setSelection1(true) 
            setDisable1(false)
          
         }}
          />
        : 
         <CheckBox
         disabled={isDisable1}
         value={isSelected1}
         onValueChange={setSelection1}
       />
       }
        <Text style={{marginBottom:10}}>concordo com os termos de uso e políticas de privacidade</Text>
      </View>
      
      <TouchableOpacity onPress={_politicas}>
       <Text style={{color:'blue',textAlign:'center'}}>Ver políticas de privacidade de uso</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_termos}>
       <Text style={{color:'blue',textAlign:'center'}}>Ver termos de uso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonEntrar,{marginBottom:5}]}onPress={_save}>
       <Text style={styles.textButton}>Concluir cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonEntrar,{marginBottom:50}]}onPress={()=>{nav.navigate('HowToWork')}}>
       <Text style={styles.textButton}>Refazer cadastro</Text>
      </TouchableOpacity>

      
        
     
    </ScrollView>
  );
}
