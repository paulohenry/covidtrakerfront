import React from 'react';
import { ScrollView, Text, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles'


export default function Terms() {

  const nav = useNavigation();

  const navigationTo = (screen)=>{
    nav.navigate(screen)
  }

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.titles}> Termos e condições </Text>
      <Text style={styles.paragraphs}>
              O que é Lorem Ipsum?
              Lorem Ipsum é simplesmente
              uma simulação de texto da indústria
              tipográfica e de impressos,
              e vem sendo utilizado desde o século XVI
              , quando um impressor desconhecido pegou 
              uma bandeja de tipos e os embaralhou para 
              fazer um livro de modelos de tipos. Lorem 
              Ipsum sobreviveu não só a cinco séculos, 
              como também ao salto para a editoração eletrônica
              , permanecendo essencialmente inalterado. 
              Se popularizou na década de 60, quando a 
              Letraset lançou decalques contendo passagens
              de Lorem Ipsum, e mais recentemente quando 
              passou a ser integrado a softwares de editoraçã
              o eletrônica como Aldus PageMaker.              
        </Text>
        <TouchableOpacity style={styles.buttonTermos}onPress={()=>{navigationTo('UserData')}}>
       <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
