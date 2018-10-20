//this screen == data -> stackNav(async) -> card ->
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import RestuarantCard from '../components/RestuarantCard';
export default class deals extends React.Component {
  static navigationOptions = {
      title: 'deals',
  };


  render() {
    //const { navigate } = this.props.navigation;
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <RestuarantCard title="Placeholder 1" navigation={this.props.navigation}/>
          <TouchableOpacity onPress= {this._onPressButton}
            onPress={() => navigate('testpage', {
                title:'some shit'
            })}

          >
           <Text style={styles.fontStuff}>welcome to the deals page</Text>
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
    justifyContent: 'center'
  },
  fontStuff: {
      fontSize: 24
  },
});
