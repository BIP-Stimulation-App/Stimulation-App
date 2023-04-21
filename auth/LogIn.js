import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import stylebasics from '../style/StyleBasics';
import styles from '../style/InlogStyles';


class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleEmail = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (username, password) => {
    // You can add your own login logic here, e.g. sending a request to an API
    alert('username: ' + username + ' password: ' + password) //mag na insert logic ook weg
  }

  render() {
    return (
      <ImageBackground source={require('../pictures/backgroundlogin.png')} style={{ flex: 1 }}>
      <View style={stylebasics.container}>
        <Text style={ styles.welcomeMessage}> Welcome,</Text>
        <TextInput
          style={styles.input}
          placeholder= "username"
          placeholderTextColor= 'grey'
          onChangeText={this.handleEmail}
          
        />
        <TextInput
          style={styles.input2}
          placeholder='password'
          placeholderTextColor='grey'
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
          onPress={() => {
            this.login(this.state.username, this.state.password);
            this.props.navigation.navigate('HomeNav');
          }}
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
      </ImageBackground>
    )
  }
}



export default Login;