import styled from "styled-components/native";
import { Platform } from "react-native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: rgba(2, 157, 100, 0.7);
`;

export const Header = styled.View`
  margin-top: ${Platform.OS == "android" ? "30px" : "0"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 60px;
  border-bottom-right-radius: 30px;
`;

export const TextHeader = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
`;

export const ActionNotification = styled.TouchableOpacity``;

export const TextAtualization = styled.Text`
  color: #fff;
  padding-left: 15px;
`;

export const CountryName = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: #fff;
  padding-left: 15px;
  padding-top: 15px;
`;

export const StatisticsContainer = styled.View`
  background: #fff;
  margin-top: 20px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  flex: 1;
  padding: 10px;
`;

export const CardRecuperados = styled.View`
  background: #5cbea6;
  margin-top: 40px;
  padding: 15px;
  border-radius: 15px;
`;

export const TitleRecovered = styled.Text`
  color: #bbe4da;
  font-size: 23px;
`;

export const NumberCasesRecovered = styled.Text`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
`;

export const TitleAcompanhamento = styled.Text`
  color: #bbe4da;
  font-size: 16px;
`;

export const NumberCasesAcompanhamento = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

export const CardConfirmados = styled.View`
  margin-top: 10px;
  padding: 15px;
  border-radius: 15px;
  border-color: #5cbea6;
  border-width: 1px;
`;

export const HeaderConfirmados = styled.View`
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleConfirmados = styled.Text`
  font-size: 18px;
  color: #5cbea6;
  font-weight: bold;
`;

export const Circle = styled.View`
  background: ${(props) => props.color};
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  align-items: center;
  justify-content: center;
`;

export const InfoConfirmadosContainer = styled.View`
  flex-direction: row;
`;

export const DadosContainer = styled.View`
  flex-direction: column;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NumberAcumulados = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const NumberCasosNovos = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const TitleCasosNovos = styled.Text`
  font-size: 15px;
  color: #969fa5;
`;

export const TitleBrasil = styled.Text`
  font-size: 32px;
  padding-left: 15px;
  padding-top: 15px;
`;

export const CityContainer = styled.View`
  padding: 15px;
  margin: 15px;
  flex: 1;
  background: #FBECE5;
  border-color: #6356B5;
  border-radius: 30px;
  border-width: 1px;
`;

export const CityNameContainer = styled.View``;

export const CityName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #6356B5;
`;

export const CityContainerDetails = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CityDetailsContainer = styled.View`
  align-items: center;
`;

export const CityCasesNumber = styled.Text`
  font-size: 20px;
  color: #6356B5;
  font-weight: bold;
`;

export const CityCases = styled.Text`
  font-size: 17px;
  color: #B090D8;

`;
