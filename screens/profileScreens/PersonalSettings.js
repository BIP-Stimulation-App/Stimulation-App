import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Switch,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../style/profileStyles/PersonalSettingsStyles";
import { UserService } from "../../Service/UserService";
import { saveLoginCredentials, getLoginCredentials } from "../../DataContext";
import { LoginService } from "../../Service/LoginService";
import { ScrollView } from "react-native-gesture-handler";

const PersonalSettings = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [deviceName, setDeviceName] = useState("testDeviceName");
  const [userNameVisible, setUsernameVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [originalUser, setOriginalUser] = useState(null);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  useEffect(() => {
    if (originalUser == null) {
      getUserData();
    }
  }, []);

  async function getUserData() {
    //add logic to retrieve user data

    var data = await UserService.GetUserData();
    console.log(
      "User: " +
        data.userName +
        "name: " +
        data.firstName[0] +
        ". " +
        this.lastname
    );
    setOriginalUser(data);
    setEmail(data.email);
    setUsername(data.userName);
    setUsernameVisible(!data.anounymous);
  }

  const handleSave = async () => {
    setErrorMessage("");
    if (originalUser == null) return;
    if (username != originalUser.username) {
      UserService.UpdateUsername(username);
    }
    if (email != originalUser.email) {
      UserService.UpdateEmail(email);
    }
    if (password != null && password != "") {
      if (oldPassword == null)
        return setErrorMessage(
          "Please fill in your old password if you want to change it."
        );
      if (oldPassword != (await getLoginCredentials()).password)
        return setErrorMessage("Your old password is incorrect");
      if (password.length < 6)
        return setErrorMessage("Password must be at 6 characters long!");
      await LoginService.UpdatePassword(password);
    }
    console.log(userNameVisible + " " + originalUser.anounymous);
    if (userNameVisible != originalUser.anounymous) {
      console.log("updating privacy");
      UserService.UpdatePrivacy(userNameVisible);
    }
    alert("changes saved");
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleOldPasswordChange = (text) => {
    setOldPassword(text);
  };

  const handleDeviceNameChange = (text) => {
    setDeviceName(text);
  };

  const handleUsernameVisibleChange = () => {
    setUsernameVisible((previousState) => !previousState);
  };

  return (
    <ImageBackground
      source={require("../../assets/background3.png")}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: keyboardOffset },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.text}>Change username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={handleUsernameChange}
          />
          <Text style={styles.text}>Show username in leaderboard?</Text>
          <View style={styles.switch}>
            <Switch
              trackColor={{ false: "#767577", true: "#BFE4C0" }}
              thumbColor={userNameVisible ? "#388C77" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleUsernameVisibleChange}
              value={userNameVisible}
            />
            <Text style={styles.switchText}>
              {userNameVisible ? "On" : "Off"}
            </Text>
          </View>

          <Text style={styles.text}>Change email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
          />

          <Text style={styles.text}>Change password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={handlePasswordChange}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
            secureTextEntry={true}
          />

          <Text style={styles.text}>Old password:</Text>
          <TextInput
            style={styles.input}
            value={oldPassword}
            onChangeText={handleOldPasswordChange}
            secureTextEntry={true}
            ref={(input) => {
              this.passwordInput = input;
            }}
          />

          {deviceName !== "none" && (
            <View>
              <Text style={styles.text}>Change bracelet name:</Text>
              <TextInput
                style={styles.input}
                value={deviceName}
                onChangeText={handleDeviceNameChange}
              />
            </View>
          )}

          {errorMessage ? (
            <Text style={styles.errorMessageText}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.textButton}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PersonalSettings;
