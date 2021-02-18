import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity, Button} from 'react-native';
import AppHeader from '../components/AppHeader';
import HomeScreen from './HomeScreen'
import db from '../Config';

export default class SummaryScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <TouchableOpacity
  style={{ color:'white',
  borderRadius:100,
  marginBottom:-300,
  
  width:125,
  height:125,
  fontSize:24,
  alignSelf:'center',
  alignItems:"center",
  justifyContent:'center',
  borderWidth:2,
  borderColor:'black',
  marginTop:300,
  marginRight: '50',
  marginLeft: '30',
  backgroundColor:"red"
  
  
  }}
   
  onPress={()=>this.props.navigation.navigate('HomeScreen')}
  >
  
  <Text
  style={{fontSize:24,
  fontWeight:'bold',
  textAlign:'center',
  color:'black',
  fontFamily: 'fantasy',

  }}> Home Screen</Text></TouchableOpacity>


      {this.props.navigation.getParam("allAttendenceList").map((Class)=>(
        <View>
          <Text style={{fontSize:22, color: "white", marginLeft:85, fontFamily: 'fantasy'}}>Student{" :"+Class[0]} </Text>
         
          
        </View>
        
      ))}
      </View>
    )
  }
}
