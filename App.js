import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './Screens/HomeScreen';
import SummaryScreen from './Screens/SummaryScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 

export default class App extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:"navy", flex:1}}>
        <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
})

const AppContainer = createAppContainer(AppNavigator)