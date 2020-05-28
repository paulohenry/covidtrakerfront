import React,{useEffect, useState} from 'react';
import { ScrollView, Text,TouchableOpacity, AsyncStorage,Alert, View,Platform,CheckBox} from 'react-native';
import styles from '../../styles/formStyles'
import { useNavigation } from '@react-navigation/native'
import keys from '../../temporaryStorage/keys'
import {Ionicons} from '@expo/vector-icons'
import CheckBoxIOS from '../../components/CheckBoxIOS/';
import api from '../../services/api'

export default function ConfirmRegister() {
 const nav = useNavigation();
 const os = Platform.OS
 const [isSelected1, setSelection1] = useState(false);
  const [isDisable1, setIsDisable1] = useState(false);

  const [token,setToken]=useState(null)
  const [ID, setID]=useState(null)
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


 const [arrayq6, setq6]=useState([''])
 const [arrayq7, setq7]=useState([''])
 const [arrayq8, setq8]=useState([''])
 const [arrayq11, setq11]=useState([''])
 const [arrayq12, setq12]=useState([''])
 const [arrayq14, setq14]=useState([''])
 const [arrayq15, setq15]=useState([''])
 
 async function  _storeData (){   
  try{


 setID(await AsyncStorage.getItem(keys.user_id))
setToken(await AsyncStorage.getItem(keys.token))

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
     Alert.alert('Cadastro', {erro:'erro ao recuperar informações do cache'})
   }   
  
}; 
  useEffect(() => { 
  _storeData()

},[])

function transforArray (){
     
    
      if(resposta6!= null){
       setq6(JSON.parse(resposta6))
      }
      
      if(resposta7!= null){
      setq7(JSON.parse(resposta7))
      }
      if(resposta8!= null){
      setq8(JSON.parse(resposta8))
      }
     
      if(resposta11!= null){
      setq11(JSON.parse(resposta11))
      }
      if(resposta12!= null){
      setq12(JSON.parse(resposta12))
      }
     
      if(resposta14!= null){
      setq14(JSON.parse(resposta14))
      }
      if(resposta15!= null){
      setq15(JSON.parse(resposta15))
      }
     
     }
 
async function _save(){
  transforArray()
  const obj = {
    id:ID,
    resposta1:resposta1,
    resposta2:resposta2,
    resposta3:resposta3,
    resposta4:resposta4,
    resposta5:resposta5,
    resposta5_a:resposta5A,
    resposta6:arrayq6,
    resposta6_a:resposta6A,
    resposta7:arrayq7,
    resposta8:arrayq8,
    resposta9:resposta9,
    resposta10:resposta10,
    resposta11:arrayq11,
    resposta12:arrayq12,
    resposta13:resposta13,
    resposta14:arrayq14,
    resposta15:arrayq15,
    resposta16:resposta16,
    resposta17:resposta17,
    resposta18:resposta18,
    resposta19:resposta19,
    resposta20:resposta20,
  }
          // console.log(obj)
        if(isSelected1==false){
          Alert.alert("Covidtracker", "voce precisa aceitar os termos para continuar")
        }else{          
               if(token == null){ 
                  try{
                     const response = await api.put('/form/', obj)
                     console.log(response.data)
                        Alert.alert("Covidtracker", "Cadastrado com sucesso, faça o login para acessar o mapa de contágio")
                        nav.navigate('Login')
                    }catch(error){
                        Alert.alert("covidtracker", error.response.data.error || error.response.data.message)
                    }
                  
                }else if(token!= null){
                  try{
                    const response = await api.put('/form/', obj)
                    console.log(response.data)
                        Alert.alert("Covidtracker", "formulário salvo com sucesso")
                        nav.navigate('Maps')
                }catch(error){
                        Alert.alert("covidtracker", error.response.data.error || error.response.data.message)
                }
                
               }
        }
 
}
async function _politicas(){    
  nav.navigate('Politicas')
}
async function _termos(){    
  nav.navigate('Termos')
}



  return (
    <ScrollView style={[styles.container,{backgroundColor:'#FFF'}]}>
      <View style={{alignItems:'center', marginVertical:80}}>
        <Ionicons  name="ios-checkmark-circle"size={200} color="rgba(0,150,64,1)" />
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
      <TouchableOpacity style={[styles.buttonEntrar,{marginBottom:50}]}onPress={()=>{nav.navigate('Pergunta1')}}>
       <Text style={styles.textButton}>Refazer cadastro</Text>
      </TouchableOpacity>

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
        <Text style={{marginBottom:10}}>Concordo com os termos de uso e políticas de privacidade</Text>
      </View>
        
     
    </ScrollView>
  );
}
