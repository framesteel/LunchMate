import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import RestuarantCard from '../components/RestuarantCard';

export default class Subscriptions extends React.Component {

    
  render() {
    return (
        <View>
            <Text>Subscriptions</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logout:{
      backgroundColor: 'red',
      fontSize: 24
  }
});
