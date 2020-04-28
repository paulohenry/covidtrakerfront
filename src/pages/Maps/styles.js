import { StyleSheet,Dimensions} from 'react-native'

// const {height,width}= Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
     flex:1,
     justifyContent:'flex-end',
     alignItems:'flex-end',
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
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

export default styles