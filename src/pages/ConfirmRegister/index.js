import React from 'react';
import { ScrollView, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function ConfirmRegister() {
 
  const [r1, setR1] = useState('')
  const [r2, setR2] = useState('')
  const [r3, setR3] = useState('')
  const [r4, setR4] = useState('')
  const [r5, setR5] = useState('')
  const [r6, setR6] = useState('')
  const [r7, setR7] = useState('')
  const [r8, setR8] = useState('')
  const [r9, setR9] = useState('')
  const [r10, setR10] = useState('')
  const [r11, setR11] = useState('')
  const [r12, setR12] = useState('')
  const [r13, setR13] = useState('')
  const [r14, setR14] = useState('')
  const [r15, setR15] = useState('')
  const [r16, setR16] = useState('')
  const [r17, setR17] = useState('')
  const [r18, setR18] = useState('')
  const [r19, setR19] = useState('')
  const [r20, setR20] = useState('')


  _storeData = async () => {
    
    
  try{

 const resposta1 = await AsyncStorage.getItem()




 const respostas = {
  confirmScreen:{
  r1,
  r2,
  r3,
  r4,
  r5,
  r6,
  r7,
  r8,
  r9,
  r10,
  r11,
  r12,
  r13,
  r14,
  r15,
  r16,
  r17,
  r18,
  r19,
  r20
  }
}



 await AsyncStorage.setItem(keys.confirmScreen.CONFIRM, JSON.stringify(respostas))
 const save = await AsyncStorage.getItem(keys.confirmScreen.CONFIRM)
 if(!save){
   Alert.alert('Cadastro', 'Você precisa responder a pergunta prara continuar')
 }else{
      //chama o axios e depois manda pra tela de mapas
 }    
  
   
   }catch(erro){
     Alert.alert('Cadastro', {erro:' erro ao cadastrar'})
   }   
  
};

  return (
    <ScrollView>
        <Text>Confirme suas respostas e finalize seu cadastro: </Text>

        <Text>pergunta</Text>
        <Text>resposta </Text>

        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        

        <Text>pergunta</Text>
        <Text>resposta </Text>
        

        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>
        
        <Text>pergunta</Text>
        <Text>resposta </Text>

        <Text>pergunta</Text>
        <Text>resposta </Text>
        

        <Text>pergunta</Text>
        <Text>resposta </Text>
        

        <Text>pergunta</Text>
        <Text>resposta </Text>
        
      
        <TouchableOpacity style={styles.buttonEntrar}onPress={_storeData}>
       <Text style={styles.textButton}>Confirmar e finalizar</Text>
      </TouchableOpacity>

      
        
     
    </ScrollView>
  );
}
