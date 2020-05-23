import React from 'react';
import { ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles'



export default function Politicas() {

  const nav = useNavigation();

  

  const navigationTo = (screen)=>{
   
    nav.navigate(screen)
  }

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.titles}> POLÍTICA DE PRIVACIDADE </Text>
     
      <Text style={styles.paragraphs}>
    
•	Esta é a política de privacidade (POLÍTICA) do aplicativo Covid Tracker gerido por MAGIC STAR ESCOLA DE CRIATIVIDADE E INOVAÇÃO (MAGIC STAR).

De acordo com este compromisso, cumpriremos os seguintes princípios: respeito à privacidade; autodeterminação informativa; liberdade de expressão, de informação, de comunicação e de opinião; inviolabilidade da intimidade, da honra e da imagem; respeito aos direitos do consumidor; e o livre desenvolvimento da personalidade, da dignidade e do exercício da cidadania pelas pessoas naturais.

A MAGIC STAR se compromete a proteger seus dados pessoais e privacidade, além de ser transparente a respeito da coleta e processamento deles.

A MAGIC STAR declara sob todas as penas da lei, que não faz uso de web scrapers, robôs crawler, ou qualquer outra ferramenta de extração de dados. 

      
        </Text>

        <Text style={styles.titles2}>OS DADOS QUE A MAGIC OBETERÁ DE VOCÊS SERÃO APENAS AQUELES QUE VOCÊ VOLUNTARIAMENTE NOS FORNECER</Text>

        <Text style={styles.paragraphs}>
    
    Toda a nossa política de privacidade tem o objetivo de lhe fornecer o mais amplo entendimento dos tipos de dados pessoais coletados por nós e da maneira com a qual os processamos. 

A MAGIC STAR irá processar seus dados pessoais apenas para os seguintes propósitos: fornecimento dos nossos produtos e serviços; o aprimoramento da experiência do usuário com nossos produtos e serviços; para melhoria de nossos produtos e serviços; para realizar atividades comerciais e administrativas compatíveis com o fornecimento dos nossos produtos e serviços. Nós processaremos seus dados pessoais para entendermos suas necessidades pessoais e preferências e, assim, fornecermos ofertas personalizadas. 

Fique tranquilo, a MAGIC jamais irá fazer a comercialização de seus dados pessoais para terceiros.
 

          
            </Text>

            <Text style={styles.titles2}>A qualquer momento, é possível solicitar que as ofertas personalizadas não sejam mais enviadas, e agiremos de acordo com tal solicitação.</Text>

            <Text style={styles.paragraphs}>
    
            Nós aplicamos recursos significativos para permitir o exercício dos seus direitos como titular dos dados. No entanto, você pode entrar em contato conosco sempre que quiser rever seus dados pessoais, solicitar alterações, apagá-los, solicitar que paremos de usá-lo para propósitos específicos ou no geral, ou para solicitar a transferência para você ou a um terceiro, e cumpriremos sua ordem de acordo com a lei.

Também responderemos a quaisquer perguntas e forneceremos os esclarecimentos exigidos por você, dentro dos limites legais. Para esse fim, entre em contato conosco pelo e-mail: 
contato.covidtracker@gmail.com 

          
            </Text>

           

      <TouchableOpacity style={styles.button}onPress={()=>{navigationTo('ConfirmRegister')}}>
             <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
