import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Subscriptions from '../screens/Subscriptions';
import deals from '../screens/deals';
//import testpage from '../screens/testpage'

import TabNavigator from '../navigation/MainTabNavigator'

const Navigation = StackNavigator({
    home: {screen: Subscriptions},
    deals: {screen: deals}
//    testpage: {screen: testpage}
});

export default Navigation;
