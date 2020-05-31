import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Modalize } from "react-native-modalize";
import { Text } from 'react-native';

import { Container, NotificationsContainer, Header, Title } from "./styles";

export default function Modal({notifications}) {

  return (
    <Container>
      <NotificationsContainer>
        <Header>
          <Title>Notificações</Title>
          <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
          <Text>{notifications == 0 ? 'Nao ha notificacoes' : `Voce tem ${notifications} notificacoes`}</Text>
        </Header>
      </NotificationsContainer>
    </Container>
  );
}
