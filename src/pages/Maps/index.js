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
              coordinate = {{
                latitude:this.state.latitude,
                longitude:this.state.longitude
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