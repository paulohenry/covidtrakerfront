import React,{useEffect, useState} from 'react';
import { ScrollView, Text,TouchableOpacity, AsyncStorage,Alert, View} from 'react-native';
import styles from '../../styles/formStyles'
import keys from '../../temporaryStorage/keys'
// import { Container } from './styles';

export default function ConfirmRegister() {
 
 const [resposta1, setResposta1]=useState(null)
 const [resposta2, setResposta2]=useState(null)
 const [resposta3, setResposta3]=useState(null)
 const [resposta4, setResposta4]=useState(null)
 const [resposta5, setResposta5]=useState(null)
 const [resposta6, setResposta6]=useState(null)
 const [resposta7, setResposta7]=useState(null)
 const [resposta8, setResposta8]=useState(null)
 const [resposta9, setResposta9]=useState(null)
 const [resposta10, setResposta10]=useState(null)
 const [resposta11, setResposta11]=useState(null)
 const [resposta12, setResposta12]=useState(null)
 const [resposta13, setResposta13]=useState(null)
 const [resposta14, setResposta14]=useState(null)
 const [resposta15, setResposta15]=useState(null)
 const [resposta16, setResposta16]=useState(null)
 const [resposta17, setResposta17]=useState(null)
 const [resposta18, setResposta18]=useState(null)
 const [resposta19, setResposta19]=useState(null)
 const [resposta20, setResposta20]=useState(null)
 const [resposta21, setResposta21]=useState(null)

 const [primeiroNome,setPrimeiroNome]=useState(null)
 const [segundoNome,setSegundoNome]=useState(null)
 const [telefone,setTelefone]=useState(null)
 const [cep,setCep]=useState(null)
 const [rua,setRua]=useState(null)
 const [numero,setNumero]=useState(null)
 const [bairro,setbairro]=useState(null)
 const [cidade,setCidade]=useState(null)
 const [estado,setEstado]=useState(null)
 

 

 async function  _storeData (){   
  try{

 setPrimeiroNome(await AsyncStorage.getItem(keys.user.primeiroNome))
 setSegundoNome(await AsyncStorage.getItem(keys.user.segundoNome))
 setTelefone(await AsyncStorage.getItem(keys.user.telefone))
 setCep(await AsyncStorage.getItem(keys.user.cep))
 setRua(await AsyncStorage.getItem(keys.user.rua))
 setNumero(await AsyncStorage.getItem(keys.user.numero))
 setbairro(await AsyncStorage.getItem(keys.user.bairro))
 setSenha(await AsyncStorage.getItem(keys.user.senha))
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
         rua:rua ,
         numero:numero ,
         bairro:bairro ,
         cidade:cidade,
         estado:estado,
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
 const save = await AsyncStorage.getItem(keys.confirmScreen.CONFIRM)
 if(!save){
   Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
 }else{
      //chama o axios e depois manda pra tela de mapas

 } 
}

useEffect(() => {
  _storeData()
  
},[])


const _conditionalRender = (res)=>{
  if(!res){
    return(
    <Text>você não respondeu essa pergunta</Text>
    )
  }else {
    return(
    <Text>{res}</Text>
    )
  }
}

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.titles}>Confirme suas respostas antes de  finalizar o seu cadastro: </Text>

        <View style={styles.containerConfirm}>
            <Text style={styles.titles2}>Dados pessoais</Text>

            <Text style={styles.ph}>Primeiro nome:</Text>
            <Text>{primeiroNome}</Text>

            <Text>Último nome:</Text>
            <Text>{segundoNome}</Text>

            <Text>Celular: :</Text>
            <Text>{telefone}</Text>

            <Text>Cep:</Text>
            <Text>{cep}</Text>

            <Text>Endereço:</Text>
            <Text>{rua}</Text>

            <Text>Número:</Text>
            <Text>{numero}</Text>

            <Text>Bairro:</Text>
            <Text>{bairro}</Text>

            <Text>Cidade:</Text>
            <Text>{cidade}</Text>
          
            <Text>Estado:</Text>
            <Text>{estado}</Text>
        
          
        </View>
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta1)}</Text>

        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta2)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta3)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta4)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta5)}</Text>
        

        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta6)}</Text>
        

        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta7)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta8)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta9)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta10)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta11)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta12)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta13)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta14)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta15)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta16)}</Text>
        
        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta17)}</Text>

        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta18)}</Text>
        

        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta19)}</Text>
        

        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta20)}</Text>

        <Text>pergunta</Text>
        <Text>{_conditionalRender(resposta21)}</Text>
        
      
        <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Confirmar e finalizar</Text>
      </TouchableOpacity>

      
        
     
    </ScrollView>
  );
}
