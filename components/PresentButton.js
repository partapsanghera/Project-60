import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import db from '../Config';

class PresentButton extends React.Component{

  componentDidMount() {}

  isStudent1Present=(roll)=>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var year = today.getFullYear();
    if(dd < 10){
      dd = '0' + dd;
    }
    if(mm < 10){
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + year;
    db.ref("Class/"+roll+"/").update({
      [today]: "Present"
    });
  }

  

  render(){
    return(
      <View>
        <TouchableOpacity style={styles.presentStyles} onPress={()=>{
          this.isStudent1Present(this.props.roll)
          }}>
          <Text style={styles.buttonText}>PRESENT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  presentStyles:{
    justifyContent: 'center',
    alignSelf:'center',
    marginLeft: 10,
    borderWidth: 2,
    borderRadius: 8,
    marginTop:-40,
    width:80,
    height: 40,
   backgroundColor: "green"
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})

export default PresentButton;