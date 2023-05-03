import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LoginService } from '../Service/LoginService';
import restorePasswordStyles from '../style/RestorePasswordStyles';


const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showTokenField, setShowTokenField] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const ValidateEmail= async () => {
    LoginService.ValidateEmail(email).then((result) => {
      seterrorMessage(result);
      if(result === ""){
        setShowTokenField(true);
      }
    });    
  };

  const ValidateCode = async () => {
    LoginService.ValidateCode(code).then((result) => {
      seterrorMessage(result);
      if(result === ""){      
        setShowEmailField(false);  
        setShowPasswordFields(true);   
        Credential.token = request.response;  
      }
    });    
  };

  const UpdatePassword = async () => {
    LoginService.UpdatePassword(newPassword,repeatPassword,email).then((result)=>{
      seterrorMessage(result);
      if(result === ""){      
        console.log("succes"); 
        Credential.password = newPassword;    
        this.props.navigation.navigate('LogIn');
      }
    });    
  };

  const handleSubmit = () => {
    if (showPasswordFields) {
      UpdatePassword();
    } else if(showTokenField) {
      ValidateCode();      
    }
    else{      
      ValidateEmail();
    }
  };

  return (
    <ImageBackground source={require('../pictures/backgroundlogin.png')} style={{ flex: 1 }}>

    <View style={restorePasswordStyles.container}>
      <Text style={restorePasswordStyles.title}>Reset your password,</Text>
      {!showTokenField && !showPasswordFields && (
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
      {showTokenField && !showPasswordFields && (
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
    </ImageBackground>
  );
};

export default ForgetPasswordForm;