import React,{Component } from 'react';
import { View,BackHandler } from 'react-native';
import { enableScreens } from 'react-native-screens';
import {useFocusEffect } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MapView from 'react-native-maps'
import Estatisticas from '../Statistics/index'
import Configuracoes from '../EditUser/index'
import Noticias from '../Newsletter/index'
import styles from './styles'


enableScreens();

const   Tabs = createBottomTabNavigator()


function StackTabs(){
   
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);

    }, [])
  );

     
    


  return(
      <Tabs.Navigator initialRouteName="Contágio">
        <Tabs.Screen name="Contágio" component={Maps}/>
        <Tabs.Screen name="Estatisticas" component={Estatisticas}/>
        <Tabs.Screen name="Notícias" component={Noticias}/>
        <Tabs.Screen name="Configurações" component={Configuracoes}/>
      </Tabs.Navigator>
  )
}

class Maps extends Component {
 state={
    latitude:-23.959807,
    longitude:-46.327998,
  }



  render(){
    try{  
      return (
      
        <View style={styles.container}>
         
         <MapView
          region={{
              latitude:this.state.latitude,
              longitude:this.state.longitude,
              latitudeDelta:0.2000,
              longitudeDelta:0.2000,
            }}
            style={styles.map}
            rotateEnabled={false}
            showPointsOfInterest={false}
            showsBuildings={false}>
           <MapView.Marker
              pinColor="red"
              coordinate = {{
                latitude:this.state.latitude,
                longitude:this.state.longitude
              }}/>
              <MapView.Marker
              pinColor="red"
              coordinate = {{
                latitude:-23.956783,
                longitude:-46.343619,
              }}/>
              <MapView.Marker
              pinColor="green"
              coordinate = {{
                latitude:-23.956673,
               longitude:-46.343669,
              }}/>
              <MapView.Marker
              
              coordinate = {{
                latitude:-23.956603,
                longitude:-46.243669,
              }}/>
              <MapView.Marker
              pinColor="yellow"
              coordinate = {{
                latitude:-23.935650,
                longitude:-46.335520,
              }}/>
              <MapView.Marker
              pinColor="red"
              coordinate = {{
                latitude:-23.951623,
                longitude:-46.398743,
              }}/>
              <MapView.Marker
              
              coordinate = {{
                latitude:-23.956681,
                longitude:-46.343624,
              }}/>
              <MapView.Marker
              pinColor="yellow"
              coordinate = {{
                latitude:-23.965411,
                longitude:-46.315187,
              }}/>
              <MapView.Marker
              pinColor="green"
              coordinate = {{
                latitude:-23.96617587,
                longitude:-46.33483887,
              }}/>
              
              
              <MapView.Marker
              pinColor="red"
              coordinate = {{
                latitude:-23.983550,
                longitude:-46.305909,
              }}/>

              <MapView.Marker
              pinColor="yellow"
              coordinate = {{
                latitude:-23.986823,
                longitude:-46.303046,
              }}/>

              <MapView.Marker
              pinColor="green"
              coordinate = {{
                latitude:-23.983922,
                longitude:-46.308945,
              }}/>        

          </MapView>
            
        </View>
         
      );
  }catch(err){

  }
 }
}


export default StackTabs