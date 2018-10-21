import React from 'react';
import { StyleSheet, Text, View, PermissionsAndroid, ScrollView } from 'react-native';

import Header from '../components/Header';
import RestuarantCard from '../components/RestuarantCard';

const API_Key = "AIzaSyAelcE44NB-3d40mpX2UOq87ueXFhD8DgM";
export default class Nearme extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      position: {
        latitude: 0,
        longitude: 0
      },
      results: [],
    }
  }

  getRestuarants() {
    fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.state.position.latitude+','+this.state.position.longitude+'&radius=2000&type=restaurant&keyword=fast&key=AIzaSyAelcE44NB-3d40mpX2UOq87ueXFhD8DgM')
      .then((response) => response.json())
      .then((responseJson) => {
        var names = [];
        for (i=0; i<responseJson.results.length; i++){
          names[i]=responseJson.results[i].name;
        }
        var unique = names.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        this.setState({results: unique})
      })
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'LunchMate requests location information',
        'message': 'LunchMate needs your location to give you sick deals near you!'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
    } else {
      console.log("Location permission denied")
    }
    }
    catch (err) {
      console.warn(err)
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      this.setState({
        position: {
          latitude: lat,
          longitude: long
        }
      })
      this.getRestuarants()
    })
  }
  render() {

    return (
      <View style={styles.container}>
        <Header title="Lunchmate"/>
        <Text>{this.state.latitude}</Text>
        <View style={styles.scroll}>
            <ScrollView>
                {this.state.results.map((place, index) => (
                    <RestuarantCard key={index} title={place} navigation={this.props.navigation}/>
                ))}
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
