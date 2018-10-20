//this screen == data -> stackNav(async) -> card ->
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class deals extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        title: params.title + " deals!"
      }
    };



  render() {

      const { params } = this.props.navigation.state;
      const title = params.title;
    return (
      <View style={styles.container}>
          <Text>welcome to the { title }</Text>
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
