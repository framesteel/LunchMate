import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import deals from '../screens/deals';
//import testpage from '../screens/testpage'

import TabNavigator from '../navigation/MainTabNavigator'

const Navigation = StackNavigator({
    home: {screen: HomeScreen},
    deals: {screen: deals}
//    testpage: {screen: testpage}
});

export default Navigation;
