import React, { useEffect, useState } from "react";
import styles from "../style/SignupStyles";
import { View, TextInput, Text, TouchableOpacity,ImageBackground } from "react-native";
import { LoginService } from "../Service/LoginService";
import { UserService } from "../Service/UserService";
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [usernameInUse, setUsernameInUse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstnameChange = (text) => {
    setFirstname(text);
  };

  const handleLastnameChange = (text) => {
    setLastname(text)
  };

  const handleEmailChange = (text) => {
    setEmail(text)
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
    if (username === "") return;
    UserService.UsernameInUse(username).then((result)=>{
      if(result.includes("not")){
        setErrorMessage("")
        setUsernameInUse(true);
        return;
      }
      setUsernameInUse(false);
      setErrorMessage(result)
      return;
    });
    
  };

  const handlePasswordChange = (text) => {
    setPassword(text)
  };

  const handleConfirmPasswordChange = () => {
    setConfirmPassword(true);
  };
  
  const handleErrorMessageChange = (text) => {
    setErrorMessage(text);
  };

  const handleSignUp = () => {
    var obj = {firstname: firstname, lastname: lastname, username: username, email: email, password: password, usernameInUse: usernameInUse }
    LoginService.AddLogin(obj).then((result)=>{
      setErrorMessage(result)
      if (result === "") {
        navigation.navigate('AuthNav', {screen: 'login'});
      }
    });    
  };

    return (
      <ImageBackground source={require('../assets/backgroundlogin.png')} style={{ flex: 1 }}>

      <View style={styles.container} >
        <View style={styles.containerNames}>
          <TextInput
            style={styles.inputnames}
            placeholder="first name"
            placeholderTextColor="grey"
            onChangeText={handleFirstnameChange}
          />

          <TextInput
            style={styles.inputnames}
            placeholder="last name"
            placeholderTextColor="grey"
            onChangeText={handleLastnameChange}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="grey"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={handleEmailChange}
        />

        <Text style={styles.label}>Enter a username:</Text>
        <TextInput
          style={styles.input}
          placeholder="example123"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={handleUsernameChange}
        />

        <Text style={styles.label}>Enter a password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />

        <Text style={styles.label}>Repeat your password: </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={handleConfirmPasswordChange}
        />

        {errorMessage ? (
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }


export default SignUp;
