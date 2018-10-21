import React from 'react'
import firebase from 'react-native-firebase'

import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableOpacity title="Sign Up" style={styles.buttonContainer} onPress={this.handleSignUp} >
            <Text styles={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        >
        <Text style={styles.fatFingers}>Already have an account? Login</Text>
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
