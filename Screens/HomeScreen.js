import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import AbsentButton from '../components/AbsentButton';
import PresentButton from '../components/PresentButton';
import SummaryScreen from './SummaryScreen'
import db from '../Config';

export default class HomeScreen extends React.Component{

  goToSummaryScreen=(count)=> {
      // db.ref("teams/"+count).update({
      //   enabled:true
      // });
      this.sortAttedence();
  }


  componentDidMount = async () => {
    var class_ref = await db.ref('/').on('value', (data) => {
      var all_students = [];
      var class_a = data.val();
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ all_students: all_students });
      console.log(all_students);
    });
  };

  updateAttendence(roll_no, status) {
    var id = '';
    if (roll_no <= 9) {
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    });
  }

  



   todayDate=()=>{
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
    return today = dd + '-' + mm + '-' + year;
   }

  sortAttedence=()=>{
    var rolls = [];
    var allAttendence = [];
    db.ref("Class").on("value",(data)=>{
      rolls = data.val();
      for( var i in rolls ){
        console.log(rolls[i][this.todayDate()],rolls[i]["name"],this.todayDate())
        allAttendence.push([rolls[i][this.todayDate()],rolls[i]["name"]]);
      }
      console.log(allAttendence);
      this.props.navigation.navigate('SummaryScreen',{allAttendenceList:allAttendence})
    })
  }

  render(){
    return(
      <View>
        <AppHeader/>

        <Text style={styles.studentText}>Devraj Gill</Text>
        <AbsentButton roll="01"/>
        <PresentButton roll="01"/>

        <Text style={styles.studentText}>Aryan Jhaj</Text>
        <AbsentButton roll="02"/>
        <PresentButton roll="02"/>

 <Text style={styles.studentText}>Armaan Sidhu</Text>
        <AbsentButton roll="03"/>
        <PresentButton roll="03"/>

<Text style={styles.studentText}>Hassan Toor</Text>
        <AbsentButton roll="04"/>
        <PresentButton roll="04"/>
      
        <Text style={styles.studentText}>Arnav Sekhri</Text>
        <AbsentButton roll="05"/>
        <PresentButton roll="05"/>

        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          this.goToSummaryScreen('count')
          }}>
        <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyles:{
   width: 200,backgroundColor:'teal', marginTop:80, marginLeft:80, textAlign:'center', height:40,                           justifyContent:'center',
       borderRadius:20,
       borderWidth:2,
       margin:'center'
  },
  submitText : {
    textAlign:'center',
    color : 'black',
    marginTop:0,
    marginLeft:0,
  },studentText : {
    color : 'white',
    marginTop: 45,
    marginBottom:-25,
    marginLeft:30,
    alignItems: 'center'
  }
})