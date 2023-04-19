import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import restorePasswordStyles from '../style/RestorePasswordStyles';


const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showEmailField, setShowEmailField] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const handleEmailrequest= async () => {
    if(!email.includes('@') ||!email.includes('.')){
      seterrorMessage("Email is invalid");
      return;
    }
    seterrorMessage("");
    try{
      let request = new XMLHttpRequest();
      request.open("POST","https://localhost:7022/api/Login/Reset");
      console.log("email: " + email)
      request.setRequestHeader("email", email);
      request.addEventListener('error',() =>{})
      request.send();
      request.onload = () =>{
        if(request.status === 200){
          console.log("succes");
          setShowEmailField(true);          
        }
        if(request.status === 404){
          console.log("Error 404:"+request.response)
          seterrorMessage(request.response);
        }
        else{
          console.log(request.status+ " " +request.response);
        }
      }
      request.onerror = () =>{        
        console.log(request.status+ " " +request.response);
      }
    }
    catch(e){
      console.log("error: " + e);
    }
  };

  const handleVerify = async () => {
    if(token.length != 5){
      seterrorMessage("Token is invalid!");
      return;
    }
    seterrorMessage("");

    try{
      let request = new XMLHttpRequest();
      request.open("POST","https://localhost:7022/api/Login/ResetWithToken");
      console.log("resetToken: " + code)
      request.setRequestHeader("resetToken", code);
      request.addEventListener('error',() =>{})
      request.send();
      request.onload = () =>{
        if(request.status === 200){
          console.log("succes");
          setShowEmailField(false);  
          setShowPasswordFields(true);   
          Credential.token = request.response;    
        }
        else{
          console.log(request.status+ " " +request.response);
        }
      }
      request.onerror = () =>{        
        console.log(request.status+ " " +request.response);
      }
    }
    catch(e){
      console.log("error: " + e);
    }
  };

  const handleUpdatePassword = async () => {
    try{
      if(newPassword != repeatPassword){
        seterrorMessage("Passwords do not match");
        return;
      }
      else if(newPassword.length<8 ){
        seterrorMessage("Password must be at least 8 characters long");
        return;
      }
      seterrorMessage("");
      let request = new XMLHttpRequest();
      request.open("POST","https://localhost:7022/api/Login/ChangePassword/"+ email);
      request.setRequestHeader("password", code,"Authorization", "Bearer " + Credential.token);
      request.addEventListener('error',() =>{})
      request.send();
      request.onload = () =>{
        if(request.status === 200){
          console.log("succes"); 
          Credential.password = newPassword;    
          this.props.navigation.navigate('LogIn');
        }
        else{
          console.log(request.status+ " " +request.response);
        }
      }
      request.onerror = () =>{        
        console.log(request.status+ " " +request.response);
      }
    }
    catch(e){
      console.log("error: " + e);
    }
  };

  const handleSubmit = () => {
    if (showPasswordFields) {
      handleUpdatePassword();
    } else if(showEmailField) {
      handleVerify();
    }
    else{
      handleEmailrequest();
    }
  };

  return (
    <View>
      <Text style={restorePasswordStyles.title}>Reset your password,</Text>
      {!showEmailField && !showPasswordFields && (
        <>
        <Text style={restorePasswordStyles.Text}> Please enter the email of your existing account:</Text>
      <TextInput
        style={ restorePasswordStyles.input}
        placeholder="email"
        placeholderTextColor= 'grey'
        value={email}
        onChangeText={setEmail}
      />
        </>
      )}
      {showEmailField && !showPasswordFields && (
        <>
        <Text style={restorePasswordStyles.Text}>Enter the received code (please check your spam): </Text>
        <TextInput
          style={ restorePasswordStyles.input}
          placeholder="code"
          placeholderTextColor= 'grey'
          value={code}
          onChangeText={setCode}
        />
        </>
      )}
      {showPasswordFields && (
        <>
          <Text style={restorePasswordStyles.Text}>Enter new password:</Text>
          <TextInput
            style={ restorePasswordStyles.input}
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <Text style={restorePasswordStyles.Text}>Repeat your new password:</Text>
          <TextInput
            style={ restorePasswordStyles.input}
            placeholder="Repeat Password"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            secureTextEntry
          />
        </>
      )}
      {errorMessage ? <Text style={restorePasswordStyles.errorMessageText}>{errorMessage}</Text>:null}

        <TouchableOpacity style={restorePasswordStyles.button1} onPress={handleSubmit}>
          <Text style={restorePasswordStyles.buttonTitle}>SUBMIT</Text>
        </TouchableOpacity>


    </View>
  );
};

export default ForgetPasswordForm;