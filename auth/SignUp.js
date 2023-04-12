import React, { Component } from 'react';
import styles from '../style/SignupStyles';
import stylebasics from '../style/StyleBasics'
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';


class SignUp extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          firstname: '',
          lastname: '',
          email: '',
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
    
      handlePasswordChange = (password) => {
        this.setState({ password });
      };
    
      handleConfirmPasswordChange = (confirmPassword) => {
        this.setState({ confirmPassword });
      };
    
      handleSignUp = () => {
        const { email, password, confirmPassword } = this.state;
        console.log('Firstname:'+ firstname);
        console.log('Lastname:'+ lastname);
        console.log('Email:'+ email);
        console.log('Password:'+ password);
        console.log('Confirm:'+ confirmPassword);
    
        // Validate email, password, and confirmPassword here
    
        // Make API call to sign up user here
    
        // Navigate to home screen or show error message here
      };

render() {
    const {firstname, lastname, email, password, confirmPassword } = this.state;

    return (
      <View style={stylebasics.container} >
        <View style={styles.containerTitel}>
          <Text style={styles.titel} >Who are you?</Text>
        </View>
        

        <View style={styles.containerNames}>
    
            <TextInput 
            style={styles.inputnames}
            placeholder='first name'
            value={firstname}
            onChangeText={this.handleFirstnameChange}
            />
        
            <TextInput 
            style={styles.inputnames}
            placeholder='last name'
            value={lastname}
            onChangeText={this.handleLastnameChange}
            />
        
        </View>
       
        <TextInput 
          style={styles.input}
          placeholder="email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={this.handleEmailChange}
        />

        <Text style={styles.label}>Enter a password: </Text>
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

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
    );
  }
};

export default SignUp;