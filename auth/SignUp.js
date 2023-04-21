import React, { Component } from 'react';
import styles from '../style/SignupStyles';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';


class SignUp extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          firstname: '',
          lastname: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
          errorMessage: ''
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

      handleEmailChange = (username) => {
        this.setState({ username });
      };
    
      handlePasswordChange = (password) => {
        this.setState({ password });
      };
    
      handleConfirmPasswordChange = (confirmPassword) => {
        this.setState({ confirmPassword });
      };

      handleErrorMessage = (errorMessage) => {
        this.setState({ errorMessage })
      };
    
      handleSignUp = () => {
        const { firstname, lastname, email, username, password, confirmPassword } = this.state;
        console.log('Firstname:'+ firstname);
        console.log('Lastname:'+ lastname);
        console.log('Email:'+ email);
        console.log('Username:'+ username);
        console.log('Password:'+ password);
        console.log('Confirm:'+ confirmPassword);

       /* if(firstname == 'Yana'){
          this.setState({ errorMessage: 'You typed the right name'})
        }
        else{
          this.setState({ errorMessage: 'You have not filled all the inputfields'})
        }*/
        //dit mag ook weg na insert logic
        // Validate email, password, and confirmPassword here
    
        // Make API call to sign up user here
    
        // Navigate to home screen or show error message here
      };

render() {
    const {firstname, lastname, email, password, confirmPassword, errorMessage } = this.state;

    return (
      <ImageBackground source={require('../pictures/backgroundlogin.png')} style={{ flex: 1 }}>

      <View style={styles.container} >
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
          secureTextEntry
          value={password}
          onChangeText={this.handlePasswordChange}
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

        {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSignUp}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    );
  }
};

export default SignUp;