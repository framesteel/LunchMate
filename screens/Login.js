import React from 'react'
import firebase from 'react-native-firebase'

import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('MainTabNavigator'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>

            <Text style={styles.titleText}>Lunchmate</Text>
            {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
              </Text>}

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableOpacity title="Login" style={styles.buttonContainer} onPress={this.handleLogin} >
            <Text styles={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('signUp')}
        >

            <Text style={styles.fatFingers}>Need an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5E7D7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  buttonContainer: {
      backgroundColor: 'white',
      //width: 75,
      paddingVertical: 15,
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 10,
      width: '35%',
      alignItems: 'center',
      borderRadius: 9
  },
  buttonText: {
      textAlign: 'center',
      fontWeight: '900'
  },
  titleText: {
      textAlign: 'center',
      fontWeight: '900',
      fontStyle: 'italic',
      fontSize: 40,
      fontFamily: 'serif'
  },
  fatFingers: {
      paddingVertical: 15
  }


})
