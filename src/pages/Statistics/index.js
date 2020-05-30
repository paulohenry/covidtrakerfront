import React, { useState, useEffect, useRef } from "react";
import {
  MaterialIcons,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Badge } from "react-native-elements";
import { Modalize } from "react-native-modalize";

import {
  Wrapper,
  Header,
  TextHeader,
  ActionNotification,
  TextAtualization,
  CountryName,
  StatisticsContainer,
  CardRecuperados,
  TitleRecovered,
  NumberCasesRecovered,
  TitleAcompanhamento,
  NumberCasesAcompanhamento,
  CardConfirmados,
  HeaderConfirmados,
  TitleConfirmados,
  InfoConfirmadosContainer,
  DadosContainer,
  NumberAcumulados,
  TitleAcumulados,
  NumberCasosNovos,
  TitleCasosNovos,
} from "./styles";

import CurrentDate from "../../components/CurrentDate";
import Modal from "../../components/Modal";

import apiCovid from "../../services/apiCovid";

export default function Newsletter() {
  const [covidData, setCovidData] = useState([]);
  const [notifications, setNotifications] = useState(2);

  useEffect(() => {
    async function getStatus() {
      const response = await apiCovid.get("report/v1");
      const data = response.data;
      setCovidData(data);
    }
    getStatus();
    console.log(covidData);
    //Nao to conseguindo utilizar esses malditos dados;
  }, []);

  //Open Modal
  const modalizeRef = useRef(null);
  function onOpen() {
    modalizeRef.current?.open();
  }

  StatusBar.setHidden(false)
  return (
    <Wrapper>
      <Header>
        <TextHeader>Situação atual</TextHeader>
        <ActionNotification onPress={onOpen}>
          <MaterialCommunityIcons
            name="notification-clear-all"
            size={40}
            color="#fff"
          />
          <Badge
            status="error"
            containerStyle={{
              position: "absolute",
              top: -4,
              right: -4,
              opacity: notifications === 0 ? 0 : 9,
            }}
            value={notifications}
          />
        </ActionNotification>
      </Header>
        <TextAtualization>Atualizado em: 23/23/23</TextAtualization>
        <CountryName>Brasil</CountryName>
        <CurrentDate style={{ paddingLeft: 15, color: "#fff" }} />
        <StatisticsContainer>
          <CardRecuperados style={styles.cardShadow}>
            <TitleRecovered>Casos recuperados</TitleRecovered>
            <NumberCasesRecovered>300.000</NumberCasesRecovered>
            <TitleAcompanhamento>Em acompanhamento</TitleAcompanhamento>
            <NumberCasesAcompanhamento>234.222</NumberCasesAcompanhamento>
          </CardRecuperados>
          <CardConfirmados>
            <HeaderConfirmados>
              <TitleConfirmados>CASOS CONFIRMADOS</TitleConfirmados>
              <MaterialIcons name="arrow-downward" size={24} color="#5CBEA6" />
            </HeaderConfirmados>
            <InfoConfirmadosContainer>
              <DadosContainer>
                <NumberAcumulados>123.123</NumberAcumulados>
                <TitleAcumulados>Acumulado</TitleAcumulados>
              </DadosContainer>
              <DadosContainer>
                <NumberCasosNovos>12.111</NumberCasosNovos>
                <TitleCasosNovos>Casos novos</TitleCasosNovos>
              </DadosContainer>
            </InfoConfirmadosContainer>
          </CardConfirmados>
        </StatisticsContainer>
      <Modalize ref={modalizeRef}>
        <Modal />
      </Modalize>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  iconCard: {
    marginTop: 5,
  },
});
