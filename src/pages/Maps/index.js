import React, { Component, useState } from "react";
import {
  View,
  BackHandler,
  SafeAreaView,
  Text,
  FlatList,
  Animated,
} from "react-native";
import { enableScreens } from "react-native-screens";
import { useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import MapView from "react-native-maps";
import Estatisticas from "../Statistics/index";
import Configuracoes from "../EditUser/index";
import Noticias from "../Newsletter/index";
import styles from "./styles";
import api from "../../services/api";
import Loading from "../../components/Loading";
import Pergunta1 from "../Registers/Pergunta1";

enableScreens();

const Tabs = createBottomTabNavigator();

function StackTabs() {

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <Tabs.Navigator 
    initialRouteName="Contágio" 
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName
        let routeName = route.name

        if(routeName === 'Contágio'){
          iconName = focused
          ? 'map-marker-radius'
          : 'map-marker'

          return <IconMaterialCommunity name={iconName} size={size} color={color} />
        }else if(routeName === 'Estatisticas'){
          iconName = focused
          ? 'chart-bar'
          : 'chart-bar'

          return <IconMaterialCommunity name={iconName} size={size} color={color} />
        }else if(routeName === 'Notícias'){
          iconName = focused 
          ? 'newspaper'
          : 'newspaper'
          
          return <IconMaterialCommunity name={iconName} size={size} color={color} />
        }else if(routeName === 'Atualizar dados'){
          iconName = focused
          ? 'database-refresh'
          : 'database-refresh'

          return <IconMaterialCommunity name={iconName} size={size} color={color} />
          
        }
      }
    })}
    tabBarOptions={{
      activeTintColor: 'rgba(2,157,100, 0.7)',
      inactiveTintColor: 'gray',
    }}

    >
      <Tabs.Screen name="Contágio" component={Maps}/>
      <Tabs.Screen name="Estatisticas" component={Estatisticas} />
      <Tabs.Screen name="Notícias" component={Noticias} />
      <Tabs.Screen name="Atualizar dados" component={Pergunta1} />
    </Tabs.Navigator>
  );
}

class Maps extends Component {
  state = {
    latitude: -23.959807,
    longitude: -46.327998,
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get("/users");

    this.setState({ data: response.data });

    this.setState({ loading: false });
  }
 
  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <View style={styles.container}>
          <MapView
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
            style={styles.map}
            rotateEnabled={false}
            showPointsOfInterest={false}
            showsBuildings={false}
          >

            {this.state.data.map((item) => (
              
              <MapView.Marker
                key={item.id}
                pinColor={item.classify === null ? "#F8E71C" : item.classify}
                coordinate={{
                  latitude: item.lat,
                  longitude: item.long,
                }}
              />
            ))}
            
          </MapView>
        </View>
      );
    }
  }
}

export default StackTabs;
