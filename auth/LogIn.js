import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import stylebasics from '../style/StyleBasics';
import styles from '../style/InlogStyles';


class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: ''
  }

  handleEmail = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (username, password) => {
    // You can add your own login logic here, e.g. sending a request to an API
    try{
      let request = new XMLHttpRequest();
      request.open("POST","https://localhost:7022/api/Login");
      request.setRequestHeader("Content-Type", "application/json");
      request.addEventListener('error',(event) =>{})
      var post = JSON.stringify({
        username: username,
        password: password
      });          
      console.log(post);
      request.send(post);
      request.onload = () =>{
        if(request.status === 200){
          Credential.username = username;
          Credential.password = password;
          Credential.token = request.response;
          alert("logged in");
          //this.props.navigation.navigate('Home');
        }
        if(request.status === 404){
          console.log("Error 404:"+request.response)
          this.errorMessage = request.response;
        }
        else{
          console.log(request.status+ " " +request.response);
        }
      }
      request.onerror = () =>{
        this.setState({errorMessage: request.response});
      }
    }
    catch(e){
      console.log("error: " + e);
    }
  }

  render() {
    return (
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
            /*this.props.navigation.navigate('HomeNav');*/ //dit moet uit comments gehaald worden om naar de landing page te navigeren, maar homenav is nog niet gekend op de login branch en om problemen te vermijden staat dit hier in comments.
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
    )
  }
}



export default Login;