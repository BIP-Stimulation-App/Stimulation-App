import React, { Component } from 'react';
import styles from '../style/SignupStyles';
import stylebasics from '../style/StyleBasics'
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { NewAccount } from './Models/NewAccount';
import { event } from 'react-native-reanimated';




class SignUp extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          firstname: '',
          lastname: '',
          email: '',
          username: '',
          usernameInUse:false,
          errorMessage: '',
          password: '',
          confirmPassword: '',
        };
        
      }
      handleFirstnameChange = (firstname) => {
        this.setState({ firstname });
      };
    
      handleLastnameChange = (lastname) => {
        this.setState({ lastname });        
      };

      handleEmailChange = (email) => {
        this.setState({ email });
      };

      handleUsernameChange = (username) => {
        this.setState({ username });
        if(username === "")return;
        try{
          let request = new XMLHttpRequest();
          request.open("GET","https://localhost:7022/api/User/UsernameInUse/"+username);
          request.send();
          request.onload = () =>{
            if(request.status === 200){ 
              console.log(request.response);
              this.usernameInUse = !request.response.includes("not");
              if(this.usernameInUse){
                this.setState({errorMessage:request.response});
                return;
              }
              this.setState({errorMessage: ""});
            }
          }
          
          
        }
        catch(e){
          //do nothing
          console.log("error: " + e);
        }        

      };
    
      handlePasswordChange = (password) => {
        this.setState({ password });
      };
    
      handleConfirmPasswordChange = (confirmPassword) => {
        this.setState({ confirmPassword });
      };
      handleErrorMessageChange = (errorMessage) => {
        this.setState({ errorMessage });
      };
    
      handleSignUp = () => {
        const { email, password, confirmPassword, username, usernameInUse,firstname,lastname } = this.state;
        
        if(usernameInUse){
          this.setState({errorMessage:"Username is already in use."});
          console.log(this.errorMessage);
          return;
        }
        if(username === ""){
          this.setState({errorMessage:"Username can not be empty."});
          console.log(this.errorMessage);
          return;
        }
        if(password != confirmPassword){
          this.setState({errorMessage:"Passwords do not match."} );
          console.log(this.errorMessage);
          return;
        }
        if(password.length<8){
          this.setState({errorMessage:"Password must be at least 8 characters long"} );
          console.log(this.errorMessage);
          return;
        }
        if(!email.includes('@') || !email.includes('.')){
          this.setState({errorMessage:"Email is invalid." });
          
          console.log(this.errorMessage);
          return;
        }
        if(firstname === ""){
          this.setState({errorMessage:"First name can't be empty"} );
          console.log(this.errorMessage);
          return;
        }
        if(lastname === ""){
          this.setState({errorMessage:"Last name can't be empty"} );
          console.log(this.errorMessage);
          return;
        }
        // Make API call to sign up user here
        let account = new NewAccount(username,firstname,lastname,email,password);
        try{
          let request = new XMLHttpRequest();
          request.open("POST","https://localhost:7022/api/Login/Add");
          request.setRequestHeader("Content-Type", "application/json");
          request.addEventListener('error',(event) =>{})
          var post = JSON.stringify(account);          
          console.log(post);
          request.send(post);
          request.onload = () =>{
            if(request.status === 200){               
              this.props.navigation.navigate('LogIn');
            }
            if(request.status === 400){
              console.log(request.response);
            }
          }
          request.onerror = () =>{
            this.setState({errorMessage: request.response});
          }
        }
        catch(e){
          console.log("error: " + e);
        }
      };

render() {
    const {firstname, lastname, email,username, errorMessage, password, confirmPassword } = this.state;

    return (
      <View style={stylebasics.container} >
        <View style={styles.containerTitel}>
          <Text style={styles.titel} >Who are you?</Text>
        </View>
        

        <View style={styles.containerNames}>
    
            <TextInput 
            style={styles.inputnames}
            placeholder='first name'
            placeholderTextColor= 'grey'
            value={firstname}
            onChangeText={this.handleFirstnameChange}
            />
        
            <TextInput 
            style={styles.inputnames}
            placeholder='last name'
            placeholderTextColor= 'grey'
            value={lastname}
            onChangeText={this.handleLastnameChange}
            />
        
        </View>
       
        <TextInput 
          style={styles.input}
          placeholder="email"
          placeholderTextColor= 'grey'
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={this.handleEmailChange}
        />

        <Text style={styles.label}>Enter a username:</Text>
        <TextInput
          style={styles.input}
          placeholder='example123'
          placeholderTextColor= 'grey'
          autoCapitalize="none"
          value={username}
          onChangeText={this.handleUsernameChange}
        />

        <Text style={styles.label}>Enter a password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={this.handlePasswordChange}
        />

        <Text style={styles.label}>Repeat your password: </Text>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry
          value={confirmPassword}
          onChangeText={this.handleConfirmPasswordChange}
        />

        {errorMessage ? <Text style={styles.errorMessageText}>{errorMessage}</Text>:null}

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSignUp}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
    );
  }
};

export default SignUp;