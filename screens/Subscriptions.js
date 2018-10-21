import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import RestuarantCard from '../components/RestuarantCard';

export default class Subscriptions extends React.Component {

    _logout(){
        firebase.auth().signOut().then(function() {
  // Sign-out successful.
    }, function(error) {
  // An error happened.
});
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Subscriptions page!</Text>
        <TouchableOpacity>
            <Text style={styles.Logout} onPress={this._logout()}>Logout</Text>
        </TouchableOpacity>
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
