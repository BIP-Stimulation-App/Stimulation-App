import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { saveApiToken } from "../DataContext";
import { LoginService } from "../Service/LoginService";
import restorePasswordStyles from "../style/RestorePasswordStyles";
import { useNavigation } from "@react-navigation/native";
const ForgetPasswordForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showTokenField, setShowTokenField] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const ValidateEmail = async () => {
    LoginService.ValidateEmail(email).then((result) => {
      seterrorMessage(result);
      if (result === "") {
        setShowTokenField(true);
      }
    });
  };

  const ValidateCode = async () => {
    LoginService.ValidateCode(code).then((result) => {
      seterrorMessage(result);
      if (result === "") {
        setShowTokenField(false);
        setShowPasswordFields(true);
        saveApiToken(request.response);
      }
    });
  };

  const UpdatePassword = async () => {
    if (newPassword != repeatPassword) {
      return "Passwords do not match";
    } else if (newPassword.length < 8) {
      return "Password must be at least 8 characters long";
    }
    LoginService.UpdatePassword(newPassword).then((result) => {
      seterrorMessage(result);
      if (result === "") {
        console.log("succes");
        setNewPassword(newPassword);
        navigation.navigate("Login");
      } else return result;
    });
  };

  const handleSubmit = () => {
    if (showPasswordFields) {
      UpdatePassword();
    } else if (showTokenField) {
      ValidateCode();
    } else {
      ValidateEmail();
    }
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundlogin.png")}
      style={{ flex: 1 }}
    >
      <View style={restorePasswordStyles.container}>
        {!showTokenField && !showPasswordFields && (
          <>
            <Text style={restorePasswordStyles.Text}>
              {" "}
              Please enter the email of your existing account:
            </Text>
            <TextInput
              style={restorePasswordStyles.input}
              placeholder="email"
              placeholderTextColor="grey"
              value={email}
              onChangeText={setEmail}
            />
          </>
        )}
        {showTokenField && !showPasswordFields && (
          <>
            <Text style={restorePasswordStyles.Text}>
              Enter the received code (please check your spam):{" "}
            </Text>
            <TextInput
              style={restorePasswordStyles.input}
              placeholder="code"
              placeholderTextColor="grey"
              value={code}
              onChangeText={setCode}
            />
          </>
        )}
        {showPasswordFields && (
          <>
            <Text style={restorePasswordStyles.Text}>Enter new password:</Text>
            <TextInput
              style={restorePasswordStyles.input}
              placeholder="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <Text style={restorePasswordStyles.Text}>
              Repeat your new password:
            </Text>
            <TextInput
              style={restorePasswordStyles.input}
              placeholder="Repeat Password"
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              secureTextEntry
            />
          </>
        )}
        {errorMessage ? (
          <Text style={restorePasswordStyles.errorMessageText}>
            {errorMessage}
          </Text>
        ) : null}

        <TouchableOpacity
          style={restorePasswordStyles.button1}
          onPress={handleSubmit}
        >
          <Text style={restorePasswordStyles.buttonTitle}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ForgetPasswordForm;
