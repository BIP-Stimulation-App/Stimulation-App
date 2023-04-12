import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import restorePasswordStyles from '../style/RestorePasswordStyles';


const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const handleVerify = async () => {
   /* try {
      // Send email and code to server for verification
      const response = await fetch('https://example.com/verify', {
        method: 'POST',
        body: JSON.stringify({ email, code }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Verification failed');
      }

      setShowPasswordFields(true);
    } catch (error) {
      Alert.alert('Error', error.message);
    }*/
  };

  const handleUpdatePassword = async () => {
   /* try {
      // Update user's password
      const response = await fetch('https://example.com/update-password', {
        method: 'POST',
        body: JSON.stringify({ email, newPassword }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Password update failed');
      }

      Alert.alert('Success', 'Your password has been updated');
    } catch (error) {
      Alert.alert('Error', error.message);
    }*/
  };

  const handleSubmit = () => {
    if (showPasswordFields) {
      handleUpdatePassword();
    } else {
      handleVerify();
    }
  };

  return (
    <View>
      <Text style={restorePasswordStyles.title}>Reset your password,</Text>
      <Text style={restorePasswordStyles.Text}> Please enter the email of your existing account:</Text>
      <TextInput
        style={ restorePasswordStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={restorePasswordStyles.Text}>Enter the received code (please check your spam): </Text>
      {!showPasswordFields && (
        <TextInput
          style={ restorePasswordStyles.input}
          placeholder="Code"
          value={code}
          onChangeText={setCode}
        />
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

        <TouchableOpacity style={restorePasswordStyles.button1} onPress={handleSubmit}>
          <Text style={restorePasswordStyles.buttonTitle}>SUBMIT</Text>
        </TouchableOpacity>


    </View>
  );
};

export default ForgetPasswordForm;