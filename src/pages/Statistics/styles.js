import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: rgba(2, 157, 100, 0.7);
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 60px;

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
  background: #5CBEA6;
  margin-top: 40px;
  padding: 15px;
  border-radius: 15px;
`;

export const TitleRecovered = styled.Text`
  color: #BBE4DA;
  font-size: 23px;
  
`;

export const NumberCasesRecovered = styled.Text`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
`;

export const TitleAcompanhamento = styled.Text`
  color: #BBE4DA;
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
  border-color: #5CBEA6;
  border-width: 1;
`;

export const HeaderConfirmados =styled.View`
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleConfirmados =styled.Text`
  font-size: 18px;
  color: #5CBEA6;
`;

export const InfoConfirmadosContainer =styled.View`
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

export const NumberAcumulados =styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const TitleAcumulados =styled.Text`
  font-size: 15px;
  color: #969FA5;
`;

export const NumberCasosNovos =styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const TitleCasosNovos =styled.Text`
  font-size: 15px;
  color: #969FA5;
`;
