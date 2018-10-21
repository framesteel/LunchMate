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
        <Text>Sign Up</Text>
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
        <TouchableOpacity title="Sign Up" onPress={this.handleSignUp} >
            <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        >
        <Text>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
