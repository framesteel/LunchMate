import React from 'react';
import { StyleSheet, Text, View, ScrollView,  Dimensions, Card, AsyncStorage, RefreshControl } from 'react-native';
import store from 'react-native-simple-store';
import Header from '../components/Header';
import RestuarantCard from '../components/RestuarantCard';
var {height, width} = Dimensions.get('window');
export default class Subscriptions extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
        subscriptions: []
      };
    }
    static navigationOptions = {
        headerStyle: {
            height: 0
        },
    };

    _onRefresh = () => {
    this.setState({refreshing: true});
    this.getSubs().then(() => {
      this.setState({refreshing: false});
    });
  }
    getSubs = async () => {
      var favorites = await AsyncStorage.getAllKeys();

      console.log(favorites);
      this.setState({subscriptions: favorites});
    }
    componentDidMount() {
      this.getSubs();
    }
  render() {

    return (
      <View style={styles.container}>
        <Header title="Lunchmate Favorites"/>
        <View style={styles.scroll}>
            <ScrollView style={{minHeight: 40, minWidth: width*.8}} refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />}>
                {this.state.subscriptions.map((place, index) => (
                    <RestuarantCard key={index} title={place} navigation={this.props.navigation}/>
                ))}
                <Text style={{fontSize: 1}}>.</Text>
            </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    scroll: {
        flex: 7,
        minHeight: 40
    },
  container: {
    flex:1,
    //backgroundColor: '#757889',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
