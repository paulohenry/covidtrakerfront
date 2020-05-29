import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: rgba(2, 157, 100, 0.7);
`;

export const Header = styled.View`
  height: 50px;
  margin-top: 10px;
  padding: 15px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const CountryContainer = styled.View`
  height: 120px;
  padding-left: 12px;
  justify-content: center;
`;

export const HeaderTitleCountry = styled.Text`
  font-size: 42px;
  color: #fff;
  font-weight: bold;
`;

export const NotificationsButton = styled.TouchableOpacity``;

export const InfoContainer = styled.View`
  padding: 10px;
  background: #fff;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  height: 100%;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: center;
  border-bottom-width: 1;
  border-bottom-color: #eee
`;

export const InforTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
  color: rgba(2, 157, 100, 0.7);
`;

export const DetailsContainer = styled.View`
  height: 100px;
  flex: 1;
`;

export const CardContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Card = styled.View`
  width: 160px;
  align-items: center;
  height: 120px;
  justify-content: space-around;
  border-radius: 15px;
`;

export const CardTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #fff;
`;

export const CardDetails = styled.Text`
  font-size: 25px;
  color: #fff;
`;

export const LongCardContainer = styled.View`
  padding: 15px;
`;

export const LongCard = styled.View`
  background: #34c635;
  padding: 10px;
  align-items: center;
  height: 120px;
  border-radius: 10px;
  justify-content: space-around;
`;

export const LongCardTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
