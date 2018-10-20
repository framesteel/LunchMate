import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import RestuarantCard from '../components/RestuarantCard';

export default class Subscriptions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Subscriptions page!</Text>
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
});
