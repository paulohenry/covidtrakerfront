import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
     flex:1,
     paddingVertical:20,
     paddingHorizontal:20,
    
   },
   titles:{
     fontSize:30,
     marginVertical:20,
     fontWeight:'700',
     alignItems:'center',
     justifyContent:'center',
     alignContent:'center'
   },
   titles2:{
    fontSize:20,
    marginVertical:20,
    fontWeight:'700',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center'
  },
   paragraphs:{
    fontSize:15,
     justifyContent:'center',
     alignContent:'center',
     alignItems:'center',
     
   }, button:{
    marginTop:20,
    backgroundColor:'rgba(2,157,100, 0.7)',
    paddingVertical:10,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius:20,
    elevation:3,
    marginBottom:40
  },
  textButton:{
    fontSize:20,
    color:'#FFF',
    fontWeight:'700',
    textShadowColor:'#363636',
    textShadowRadius:6,
    textShadowOffset:{height:1,width:1},
  },
   
})

export default styles