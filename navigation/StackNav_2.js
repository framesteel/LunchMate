import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Nearme from '../screens/Nearme';
import deals from '../screens/deals';
//import testpage from '../screens/testpage'

import TabNavigator from '../navigation/MainTabNavigator'

const Navigation = StackNavigator({
    home: {screen: Nearme},
    deals: {screen: deals}
//    testpage: {screen: testpage}
});

export default Navigation;
