import React, { Component } from "react";
import styles from "../style/SignupStyles";
import { View, TextInput, Button, Text, TouchableOpacity,ImageBackground } from "react-native";
import { LoginService } from "../Service/LoginService";
import { UserService } from "../Service/UserService";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      usernameInUse: false,
      errorMessage: "",
      password: "",
      confirmPassword: "",
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
    if (username === "") return;
    UserService.UsernameInUse(username).then((result)=>{
      if(result.includes("not")){
        this.setState({ errorMessage: "" });
        return;
      }
      this.setState({ errorMessage: result });
      return;
    });
    
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
    LoginService.AddLogin(this.state).then((result)=>{
      this.setState({ errorMessage: result });
      if (result === "") {
        this.props.navigation.navigate("LogIn");
      }
    });    
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      username,
      errorMessage,
      password,
      confirmPassword,
    } = this.state;

    return (
      <ImageBackground source={require('../pictures/backgroundlogin.png')} style={{ flex: 1 }}>

      <View style={styles.container} >
        <View style={styles.containerTitel}>
          <Text style={styles.titel}>Who are you?</Text>
        </View>

        <View style={styles.containerNames}>
          <TextInput
            style={styles.inputnames}
            placeholder="first name"
            placeholderTextColor="grey"
            value={firstname}
            onChangeText={this.handleFirstnameChange}
          />

          <TextInput
            style={styles.inputnames}
            placeholder="last name"
            placeholderTextColor="grey"
            value={lastname}
            onChangeText={this.handleLastnameChange}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="grey"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={this.handleEmailChange}
        />

        <Text style={styles.label}>Enter a username:</Text>
        <TextInput
          style={styles.input}
          placeholder="example123"
          placeholderTextColor="grey"
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

        {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}

        {errorMessage ? (
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

export default SignUp;
