import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import db from '../Config';

class AbsentButton extends React.Component{

  isStudent1Absent=(roll)=>{
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
      [today]: "Absent"
    });
  }

  render(){
    return(
      <View>
        <TouchableOpacity style={styles.absentStyles} onPress={()=>{
          this.isStudent1Absent(this.props.roll)
        }}>
          <Text style={styles.buttonText}>ABSENT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  absentStyles:{
    justifyContent: 'center',
    alignSelf:'center',
    marginLeft: 200,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "red",
    width:80,
    height: 40
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})

export default AbsentButton;