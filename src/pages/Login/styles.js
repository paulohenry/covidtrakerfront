import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  background:{
    width:'100%',
    height:'100%',
  },
  imgContainer:{
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       paddingVertical:70,
  },
  textlogo:{
        fontSize:35,
        color:'#FFF',
        fontWeight:'bold',
        fontStyle:'italic',
        shadowOpacity:0.3,
        textShadowColor:'#363636',
        textShadowRadius:10,
        textShadowOffset:{height:3,width:3}
      },
      icon:{
        textShadowColor:'#363636',
        textShadowRadius:10,
        textShadowOffset:{height:2,width:2},
        
      },
      loginContainer:{
        marginTop:80,
        marginHorizontal:25,
        backgroundColor:'#FFF',
        borderRadius:8,
        paddingHorizontal:10,
        paddingTop:40,
        paddingBottom:20
              
               
      },
      inputs:{
          fontSize:16,
          paddingTop:5,
          justifyContent:'center',
          alignContent:'center',
          alignItems:'center',
          
      },
      buttonEntrar:{
        marginTop:20,
        backgroundColor:'rgba(2,157,100, 0.7)',
        paddingVertical:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:20,
        elevation:3
      },
      textButton:{
        fontSize:20,
        color:'#FFF',
        fontWeight:'700',
        textShadowColor:'#363636',
        textShadowRadius:6,
        textShadowOffset:{height:1,width:1},
      },
      registerText:{
          color:'#FFF',
          fontSize:16,
          fontWeight:'300',
          textShadowColor:'#363636',
          textShadowRadius:6,
          textShadowOffset:{height:1,width:1},

      },containerRegister:{
        marginVertical:30,  
        alignItems:'center',
          

      }

})

export default styles