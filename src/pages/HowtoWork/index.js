import React from 'react';
import { ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles'


export default function HowToWork() {

  const nav = useNavigation();

  const navigationTo = (screen)=>{
    nav.navigate(screen)
  }

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.titles}> COMO FUNCIONA ? </Text>
      <Text style={styles.titles2}>•	ESTE APLICATIVO É UM SERVIÇO DE UTILIDADE PUBLICA.</Text>
      <Text style={styles.paragraphs}>
    
•	Neste app você preencherá uma pesquisa com alternativas fáceis de responder, que quando estiver completo, poderá lhe apresentar o possível grau de risco de estar contaminado pela Corona vírus. A pesquisa lhe dará respostas com o surgimento de um emoji    como em um jogo interativo.
•	Depois dos formulários preenchidos você receberá orientações e um símbolo    com a cor de seu risco de contaminação e sua localização será inserida no mapa referente a 1 km.
•	Fique em casa em isolamento social e tome os devidos cuidados com a higiene para evitar sua contaminação, de sua família e companhias, mas se “precisar” sair, mantenha o distanciamento mínimo de 2 metros de outras pessoas, não leve as mãos ao rosto, use álcool gel, se possível e evite aglomerações consultando nosso mapa de localização.
•	Grau de riscos em cores do símbolo:
1.	VERDE: Baixo risco de contágio;
2.	AMARELO: Médio risco de contágio, com sintomas leves ou esteve com alguém contaminado e deve estar de mascara facial. Deve ficar isolado;
3.	VERMELHO: Alto risco de contágio, com sintomas graves, uso necessário de mascara facial e deve procurar orientação médica. Deve ficar totalmente isolado;
4.	AZUL: Baixíssimo risco de contágio de outras pessoas, pois já foi testado positivo e foi liberado porque cumpriu toda a quarentena. 

•	Click nas respostas que correspondam a sua realidade no momento. É fácil e noa ajudará no controle de doentes, na redução de riscos de contágio pela Corona vírus e na consequente redução do número de mortes. Preencha corretamente, evitando alarmes falsos.
•	Ajude-nos compartilhando o link do aplicativo com seus amigos e conhecidos.
      
        </Text>
        <TouchableOpacity style={styles.button}onPress={()=>{navigationTo('UserData')}}>
             <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
