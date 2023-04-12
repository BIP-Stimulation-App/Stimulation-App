import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import stylebasics from '../style/StyleBasics';
import styles from '../style/InlogStyles';


class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (email, password) => {
    // You can add your own login logic here, e.g. sending a request to an API
    alert('email: ' + email + ' password: ' + password)
  }

  render() {
    return (
      <View style={stylebasics.container}>
        <Text style={ styles.welcomeMessage}> Welcome,</Text>
        <TextInput
          style={styles.input}
          placeholder= "email"
          //placeholderTextColor= 'grey'
          onChangeText={this.handleEmail}
          
        />
        <TextInput
          style={styles.input2}
          placeholder='password'
         // placeholderTextColor='grey'
          secureTextEntry={true}
          onChangeText={this.handlePassword}
          
        />
        
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RestorePassword')}>
            <Text style={styles.passwordlink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={styles.button}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={ styles.createAccountView}>
          <Text style={styles.createAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
           <Text style={styles.signuplink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



export default Login;