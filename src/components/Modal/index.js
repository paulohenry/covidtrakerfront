import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Modalize } from "react-native-modalize";

import { Container, NotificationsContainer, Header, Title } from "./styles";

export default function Modal() {

  return (
    <Container>
      <NotificationsContainer>
        <Header>
          <Title>Notificações</Title>
          <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
        </Header>
      </NotificationsContainer>
    </Container>
  );
}
