import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const dias = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];

const data = new Date();

export default function CurrentDate({ style }) {
  const [atualDate, setAtualDate] = useState("");
  
  const date = `${dias[data.getDay()]}, ${data.getDate() == 1 ? `${data.getDate()}˚` : `${data.getDate()}`} de ${
    meses[data.getMonth()]
  } ${data.getFullYear()}`;
  
  useEffect(() => {
    setAtualDate(date.charAt(0).toUpperCase() + date.replace(date[0], ""));
  }, []);

  return <Text style={style}>{atualDate}</Text>;
}
