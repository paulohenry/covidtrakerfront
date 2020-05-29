import React, { useState, useEffect, useRef } from "react";
import { MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, ScrollView, Text, FlatList, View, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import { Modalize } from "react-native-modalize";

import {
  Wrapper,
  Header,
  HeaderTitle,
  HeaderTitleCountry,
  CountryContainer,
  NotificationsButton,
  InfoContainer,
  HeaderInfo,
  InforTitle,
  DetailsContainer,
  CardContainer,
  Card,
  CardTitle,
  CardDetails,
  LongCardContainer,
  LongCard,
  LongCardTitle,
  World,
  WorldDetails,
  TitleDetailsWorld,
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
    console.log(covidData)
    //Nao to conseguindo utilizar esses malditos dados;
  }, []);

  //Open Modal
  const modalizeRef = useRef(null);
  function onOpen() {
    modalizeRef.current?.open();
  }

  return (
    <Wrapper>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Header>
          <HeaderTitle>Situação Atual</HeaderTitle>
          <NotificationsButton onPress={onOpen}>
            <MaterialIcons
              name="notifications"
              size={30}
              color="#eee"
              style={{ marginRight: 5 }}
            />
            <Badge
              status="error"
              containerStyle={{
                position: "absolute",
                top: -4,
                right: -4,
                marginRight: 5,
                opacity: notifications < 1 ? 0 : 9,
              }}
              value={notifications}
            />
          </NotificationsButton>
        </Header>
        <CountryContainer>
          <HeaderTitleCountry>Brasil</HeaderTitleCountry>
          <CurrentDate style={{ fontSize: 16, color: "#fff" }} />
        </CountryContainer>
        <InfoContainer>
          <HeaderInfo>
            <InforTitle>Últimas Atualizações</InforTitle>
            <MaterialIcons
              name="update"
              size={24}
              color="rgba(2, 157, 100, 0.7)"
            />
          </HeaderInfo>

          <DetailsContainer>
            <CardContainer>
              <Card style={[styles.cardShadow, { backgroundColor: "#FEBF50" }]}>
                <Entypo
                  name="users"
                  size={24}
                  color="#fff"
                  style={styles.iconCard}
                />
                <CardTitle>Contaminados</CardTitle>
                <CardDetails>300</CardDetails>
              </Card>
              <Card style={[styles.cardShadow, { backgroundColor: "#F44336" }]}>
                <MaterialIcons
                  name="cancel"
                  size={24}
                  color="#fff"
                  style={styles.iconCard}
                />
                <CardTitle>Fatalidades</CardTitle>
                <CardDetails>230</CardDetails>
              </Card>
            </CardContainer>
            <LongCardContainer>
              <LongCard style={styles.cardShadow}>
                <FontAwesome5 name="user-shield" size={24} color="#fff" />
                <LongCardTitle>Recuperados</LongCardTitle>
                <CardDetails>230</CardDetails>
              </LongCard>
            </LongCardContainer>
            <World>
              <WorldDetails>
                <TitleDetailsWorld>Em todo o Brasil</TitleDetailsWorld>
                <FlatList
                  data={covidData}
                  keyExtractor={(item) => item.uid}
                  renderItem={({ item }) => {
                    <TouchableOpacity key={item.uid}>
                      <Text>estados</Text>
                    </TouchableOpacity>;
                  }}
                />
              </WorldDetails>
            </World>
          </DetailsContainer>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
        </InfoContainer>
        <Modalize ref={modalizeRef}>
          <Modal />
        </Modalize>
      </ScrollView>
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
