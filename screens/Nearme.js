import React from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';


const API_Key = "AIzaSyAelcE44NB-3d40mpX2UOq87ueXFhD8DgM";
export default class Nearme extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      position: {
        latitude: 0,
        longitude: 0
      },
      places;
    }
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
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Lat: {this.state.position.latitude}</Text>
        <Text>Long: {this.state.position.longitude}</Text>
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
