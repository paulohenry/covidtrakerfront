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
  const [globalData, setGlobalData] = useState([]);
  const [brasilData, setBrasilData] = useState([]);
  const {
    TotalRecovered,
    NewRecovered,
    TotalConfirmed,
    NewConfirmed,
    TotalDeaths,
    NewDeaths,
  } = globalData;
  const [notifications, setNotifications] = useState(12);

  useEffect(() => {
    async function getStatus() {
      const response = await apiCovid.get("/summary");
      const data = await response.data;
      setGlobalData(data.Global);
      console.log(globalData);
    }
    getStatus();
  }, []);

  //Open Modal
  const modalizeRef = useRef(null);
  function onOpen() {
    modalizeRef.current?.open();
  }

  function formatarNumero(n) {
    var n = n.toString();
    var r = "";
    var x = 0;

    for (var i = n.length; i > 0; i--) {
      r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? "." : "");
      x = x == 2 ? 0 : x + 1;
    }

    return r.split("").reverse().join("");
  }

  //Pega pega sempre a data de ontem para mostrar que esta atualizado
  // const updateData = new Date();
  // const updateApiData = `${updateData.getDate() - 1}/${
  //   updateData.getMonth() + 1 < 9
  //     ? `0${updateData.getMonth() + 1}`
  //     : `${updateData.getMonth() + 1}`
  // }/${updateData.getFullYear()}`;

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
          <MaterialIcons name="notifications" size={35} color="#fff" />
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
        <TextAtualization>Atualizado em:  </TextAtualization>
        <CountryName>Global</CountryName>
        <CurrentDate style={{ paddingLeft: 15, color: "#fff" }} />
        <StatisticsContainer>
          <CardRecuperados style={styles.cardShadow}>
            <TitleRecovered>Casos recuperados</TitleRecovered>
            <NumberCasesRecovered>{TotalRecovered}</NumberCasesRecovered>
            <TitleAcompanhamento>Novos recuperados</TitleAcompanhamento>
            <NumberCasesAcompanhamento>
              {NewRecovered}
            </NumberCasesAcompanhamento>
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
                <NumberAcumulados>{TotalConfirmed}</NumberAcumulados>
              </DadosContainer>
              <DadosContainer>
                <NumberCasosNovos>{NewConfirmed}</NumberCasosNovos>
                <TitleCasosNovos>Novos confirmados</TitleCasosNovos>
              </DadosContainer>
            </InfoConfirmadosContainer>
          </CardConfirmados>
          <CardConfirmados style={{ borderColor: "#D90909" }}>
            <HeaderConfirmados>
              <TitleConfirmados style={{ color: "#D90909" }}>
                ÓBITOS
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
                <NumberAcumulados>{TotalDeaths}</NumberAcumulados>
              </DadosContainer>
              <DadosContainer>
                <NumberCasosNovos>{NewDeaths}</NumberCasosNovos>
                <TitleCasosNovos>Óbitos recentes</TitleCasosNovos>
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
