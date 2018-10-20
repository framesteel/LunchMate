import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import deals from './screens/deals';
import TabNavigator from './navigation/MainTabNavigator';
import Loading from './screens/Loading';
import signUp from './screens/signUp';
import Login from './screens/Login';
/*
const Navigation = StackNavigator({
    deals: {screen: deals},
    testpage: {screen: testpage}
});

export default Navigation;
*/

//Creating the navigation stack

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

/*
//subjext to change
const myscreens = StackNavigator({
    Home: (HomeScreen: App),
})

//AppRegistry.registerComponent('LunchMate', () => myscreens);
*/
