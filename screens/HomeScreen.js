import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from '../components/Header';
import RestuarantCard from '../components/RestuarantCard';

export default class HomeScreen extends React.Component {

    //_componentWillMount(){
        //call to askfor user location permissions
    //}
  render() {
    return (
      <View style={styles.container}>
        <Header title="Lunchmate"/>
        <View style={styles.scroll}>
            <ScrollView>
                <RestuarantCard title="1"/>
                <RestuarantCard title="2"/>
                <RestuarantCard title="3"/>
                <RestuarantCard title="4"/>
                <RestuarantCard title="5"/>
            </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    scroll: {
        flex: 7,
    },
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
