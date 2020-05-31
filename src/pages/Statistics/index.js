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
  StatusBar,
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
  Circle,
  InfoConfirmadosContainer,
  DadosContainer,
  NumberAcumulados,
  NumberCasosNovos,
  TitleCasosNovos,
} from "./styles";

import CurrentDate from "../../components/CurrentDate";
import Modal from "../../components/Modal";

import apiCovid from "../../services/apiCovid";

export default function Statistics() {
  const [covidData, setCovidData] = useState([]);

  const [notifications, setNotifications] = useState(12);

  useEffect(() => {
    async function getStatus() {
      const response = await apiCovid.get("report/v1/brazil");
      const data = await response.data;
      setCovidData(data);
      console.log(covidData)
    }
    getStatus();
    //Nao to conseguindo utilizar esses malditos dados;
  }, []);

  //Open Modal
  const modalizeRef = useRef(null);
  function onOpen() {
    modalizeRef.current?.open();
  }

  StatusBar.setHidden(false);
  return (
    <Wrapper>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
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
      <ScrollView>
        <TextAtualization>Atualizado em: </TextAtualization>
        <CountryName>Brasil</CountryName>
        <CurrentDate style={{ paddingLeft: 15, color: "#fff" }} />
        <StatisticsContainer>
          <CardRecuperados style={styles.cardShadow}>
            <TitleRecovered>Casos recuperados</TitleRecovered>
            <NumberCasesRecovered>22222</NumberCasesRecovered>
            <TitleAcompanhamento>Em acompanhamento</TitleAcompanhamento>
            <NumberCasesAcompanhamento>234.222</NumberCasesAcompanhamento>
          </CardRecuperados>
          <CardConfirmados>
            <HeaderConfirmados>
              <TitleConfirmados>CASOS CONFIRMADOS</TitleConfirmados>
              <Circle color="#D1EDE6">
                <MaterialIcons
                  name="arrow-downward"
                  size={24}
                  color="#5CBEA6"
                />
              </Circle>
            </HeaderConfirmados>
            <InfoConfirmadosContainer>
              <DadosContainer>
                <NumberAcumulados>{covidData.data.confirmed}</NumberAcumulados>
              </DadosContainer>
              <DadosContainer>
                <NumberCasosNovos>12.111</NumberCasosNovos>
                <TitleCasosNovos>Novos casos</TitleCasosNovos>
              </DadosContainer>
            </InfoConfirmadosContainer>
          </CardConfirmados>
          <CardConfirmados style={{ borderColor: "#D90909" }}>
            <HeaderConfirmados>
              <TitleConfirmados style={{ color: "#D90909" }}>
                ÓBITOS CONFIRMADOS
              </TitleConfirmados>
              <Circle color="#FC9B9B">
                <MaterialIcons
                  name="arrow-downward"
                  size={24}
                  color="#D90909"
                />
              </Circle>
            </HeaderConfirmados>
            <InfoConfirmadosContainer>
              <DadosContainer>
                <NumberAcumulados>123123</NumberAcumulados>
              </DadosContainer>
              <DadosContainer>
                <NumberCasosNovos>12.111</NumberCasosNovos>
                <TitleCasosNovos>Casos novos</TitleCasosNovos>
              </DadosContainer>
            </InfoConfirmadosContainer>
          </CardConfirmados>
        </StatisticsContainer>
      </ScrollView>
      <Modalize ref={modalizeRef}>
        <Modal notifications={notifications} />
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
