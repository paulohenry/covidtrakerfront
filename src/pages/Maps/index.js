import React,{Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { enableScreens } from 'react-native-screens';
import MapView from 'react-native-maps'
enableScreens();

export default class App extends Component {
 state={
    latitude:-23.956683,
    longitude:-46.343629,
  }

  render(){  
      return (
        <View style={styles.container}>
         <MapView
          region={{
              latitude:this.state.latitude,
              longitude:this.state.longitude,
              latitudeDelta:0.0042,
              longitudeDelta:0.0031,
            }}
            style={styles.map}
            rotateEnabled={false}
            showPointsOfInterest={false}
            showsBuildings={false}>
           <MapView.Marker
              pinColor="green"
              coordinate = {{
                latitude:this.state.latitude,
                longitude:this.state.longitude
              }}/>
              <MapView.Marker
              pinColor="yellow"
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
                longitude:-46.343669,
              }}/>
              <MapView.Marker
              pinColor="yellow"
              coordinate = {{
                latitude:-23.956680,
                longitude:-46.343620,
              }}/>
              <MapView.Marker
              pinColor="green"
              coordinate = {{
                latitude:-23.956684,
                longitude:-46.343623,
              }}/>
              <MapView.Marker
              
              coordinate = {{
                latitude:-23.956681,
                longitude:-46.343624,
              }}/>
              <MapView.Marker
              pinColor="yellow"
              coordinate = {{
                latitude:-23.96559744,
                longitude:-46.33558989,
              }}/>
              <MapView.Marker
              pinColor="green"
              coordinate = {{
                latitude:-23.96617587,
                longitude:-46.33483887,
              }}/>

          </MapView>
         
        </View>
         
      );
  }
}
// const {height,width}= Dimensions.get('window')

const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'flex-end'
   },
  //  citiesContainer:{
  //      width:'100%',
  //      maxHeight: 200,
  // },  
  //  cities:{
  //     width: width -40,
  //     maxHeight:200,
  //     backgroundColor:'#FFF',
  //     marginHorizontal:20,
  //  },  
  map: {
     position:'absolute',
     top:0,
     bottom:0,
     left:0,
     right:0
   }
})