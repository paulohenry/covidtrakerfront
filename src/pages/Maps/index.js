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
import MapView from "react-native-maps";
import Estatisticas from "../Statistics/index";
import Configuracoes from "../EditUser/index";
import Noticias from "../Newsletter/index";
import styles from "./styles";
import api from "../../services/api";
import Loading from "../../components/Loading";

enableScreens();

const Tabs = createBottomTabNavigator();

function StackTabs() {
  const [loading, setLoading] = useState(true);

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
    <Tabs.Navigator initialRouteName="Contágio">
      <Tabs.Screen name="Contágio" component={Maps} />
      <Tabs.Screen name="Estatisticas" component={Estatisticas} />
      <Tabs.Screen name="Notícias" component={Noticias} />
      <Tabs.Screen name="Configurações" component={Configuracoes} />
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

            <MapView.Marker
              pinColor="red"
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
            />

            {this.state.data.map(item =>  
            <MapView.Marker  
              pinColor={item.classify === null ? 'red' : item.classify}
              coordinate={{
                latitude: item.lat,
                longitude: item.long
              }}
            />
            )}
            
          </MapView>
        </View>
      );
    }
  }
}

export default StackTabs;
