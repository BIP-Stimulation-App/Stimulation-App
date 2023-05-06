import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert, AppRegistry } from 'react-native';
import stylebasics from '../style/StyleBasics';
import styles from '../style/InlogStyles';
import { LoginService } from '../Service/LoginService';
import Credentials from '../Models/Credentials';
import React, { Component } from 'react';


class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    disableButton: false
  }

  handleEmail = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = async (username, password) => {
    this.setState({disableButton:true})
   LoginService.Login(username,password).then((result) =>{
    this.setState({errorMessage: result})
    console.log(result);
    if(result === ""){
      this.props.navigation.navigate('HomeNav');
    }
    this.setState({disableButton:false})
   })
     
  }

  render() {
    const {errorMessage} = this.state;
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
        {errorMessage ? <Text style={styles.errorMessageText}>{errorMessage}</Text>:null}
        
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RestorePassword')}>
            <Text style={styles.passwordlink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        

        <TouchableOpacity
          style={styles.button}
          disabled = {this.disableButton}
          onPress={() => {
            this.login(this.state.username, this.state.password);            
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