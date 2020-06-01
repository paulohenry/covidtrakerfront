import React, { useState, useEffect, useRef } from "react";
import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
  ActivityIndicator,
  View
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
  TitleBrasil,
  CityContainer,
  CityNameContainer,
  CityContainerDetails,
  CityName,
  CityDetailsContainer,
  CityCasesNumber,
  CityCases,
} from "./styles";

import CurrentDate from "../../components/CurrentDate";
import Modal from "../../components/Modal";

import apiCovid from "../../services/apiCovid";
import apiCovidCity from "../../services/apiCovidCity";

export default function Statistics() {
  const [globalData, setGlobalData] = useState([]);
  const [cityData, setCityData] = useState([]);
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
    }
    getStatus();
  }, []);

  useEffect( () => {
    async function getCityStatus() {
      const response = await apiCovidCity.get("report/v1");
      const data = response.data;
      setCityData(data.data);
    }

    getCityStatus();
  }, []);

  //Open Modal
  const modalizeRef = useRef(null);
  function onOpen() {
    modalizeRef.current?.open();
  }

  //Funcao para converter os numeros;
  function formatarNumero(n) {
    var n = n + "";
    var r = "";
    var x = 0;

    for (var i = n.length; i > 0; i--) {
      r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? "." : "");
      x = x == 2 ? 0 : x + 1;
    }

    return r.split("").reverse().join("");
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
          <MaterialIcons name="notifications" size={30} color="#fff" />
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CountryName>Global</CountryName>
        <CurrentDate style={{ paddingLeft: 15, color: "#fff" }} />
        <StatisticsContainer>
          <CardRecuperados style={styles.cardShadow}>
            <TitleRecovered>Casos recuperados</TitleRecovered>
            <NumberCasesRecovered>
              {TotalRecovered === undefined ? '000...' : formatarNumero(TotalRecovered)}
            </NumberCasesRecovered>
            <TitleAcompanhamento>Novos recuperados</TitleAcompanhamento>
            <NumberCasesAcompanhamento>
              {formatarNumero(NewRecovered)}
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
                <NumberAcumulados>
                  {formatarNumero(TotalConfirmed)}
                </NumberAcumulados>
              </DadosContainer>
              <DadosContainer>
                <NumberCasosNovos>
                  {formatarNumero(NewConfirmed)}
                </NumberCasosNovos>
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
                <NumberAcumulados>
                  {formatarNumero(TotalDeaths)}
                </NumberAcumulados>
              </DadosContainer>
              <DadosContainer>
                <NumberCasosNovos>{formatarNumero(NewDeaths)}</NumberCasosNovos>
                <TitleCasosNovos>Óbitos recentes</TitleCasosNovos>
              </DadosContainer>
            </InfoConfirmadosContainer>
          </CardConfirmados>
          <TitleBrasil>Brasil</TitleBrasil>
          <FlatList
            keyExtractor={(item) => item.uid}
            extraData={cityData}
            data={cityData}
            renderItem={({ item }) => (
              <CityContainer key={item.id}>
                <CityNameContainer>
                  <CityName>
                    {item.state}/{item.uf}
                  </CityName>
                </CityNameContainer>
                <CityContainerDetails>
                  <CityDetailsContainer>
                  <FontAwesome name="users" size={24} color="#B090D8" />
                    <CityCases>Casos</CityCases>
                    <CityCasesNumber>
                      {formatarNumero(item.cases)}
                    </CityCasesNumber>
                  </CityDetailsContainer>
                  <CityDetailsContainer>
                  <MaterialIcons name="local-hospital" size={24} color="#B090D8" />
                    <CityCases>Suspeitos</CityCases>
                    <CityCasesNumber>
                      {formatarNumero(item.suspects)}
                    </CityCasesNumber>
                  </CityDetailsContainer>
                  <CityDetailsContainer>
                  <AntDesign name="closecircle" size={24} color="#B090D8" />
                    <CityCases>Óbitos</CityCases>
                    <CityCasesNumber>
                      {formatarNumero(item.deaths)}
                    </CityCasesNumber>
                  </CityDetailsContainer>
                </CityContainerDetails>
              </CityContainer>
            )}
          />
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
