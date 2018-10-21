//this screen == data -> stackNav(async) -> card ->
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import DealsCard from '../components/DealsCard';

export default class deals extends React.Component {

    state = {
      deals: []
    }

    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        title: params.title + " deals!"
      }
    };
  getDeals(){
    console.log('test');
    var deals = [];
    const db = firebase.firestore();
    var dealsRef = db.collection('deals');
    var allDeals = dealsRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        var ele = doc.data();
        if (ele.restuarant == this.props.navigation.state.params.title){
            deals.push(doc.data());
        }
        console.log(doc.id, '=>', doc.data());
      });
      this.setState({deals: deals});
      console.log(this.state.deals);
    })
  }
  componentWillMount() {
    this.getDeals();
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.deals.map((deal, index) => (
              <DealsCard info={deal.info} key={index}/>
          ))}
          </ScrollView>
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
    fontSize: 12
  },
});
