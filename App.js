import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import TabNavigator from './navigation/MainTabNavigator'


export default class App extends React.Component {

    //_componentWillMount(){
        //call to askfor user location permissions
    //}
  render() {
    return (
    <TabNavigator/>
    );
  }
}
