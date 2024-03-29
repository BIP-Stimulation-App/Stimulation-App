import React, { useEffect, useState } from "react";
import { getApiToken } from "../../DataContext";
import { Settings } from "../../AppSettings";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../style/profileStyles/ProfileStyles.js";
import { logout } from "../../DataContext.js";

const Profile = () => {
  const navigation = useNavigation();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Fetch user data from the database
    checkAdmin();
  }, []);

  async function checkAdmin() {
    var token = await getApiToken();
    const response = await fetch(Settings.api + "/Admin", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    setIsAdmin(response.ok);
  }
  const handleLogOff = async () => {
    //navigation to be added (make a navigator from the auth pages, and then ref. navigation.navigate('authNav', {screen: ... }))
    //add the logic with the token
    await logout();
    navigation.navigate("AuthNav", { screen: "login" });
  };

  return (
    <ImageBackground
      source={require("../../assets/background2.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("personalSettings");
          }}
        >
          <Text style={styles.textButton}>Personal settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("bluetooth");
          }}
        >
          <Text style={styles.textButton}>Connect bluetooth</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("notifications");
          }}
        >
          <Text style={styles.textButton}>Notifications</Text>
        </TouchableOpacity>

        {isAdmin && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("adminAdd");
            }}
          >
            <Text style={styles.textButton}>Add Exercise</Text>
          </TouchableOpacity>
        )}

        {/* Conditionally render the 'showExercises' button if the user is an admin */}
        {isAdmin && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("showExercises");
            }}
          >
            <Text style={styles.textButton}>Show Exercises</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.logOffContainer} onPress={handleLogOff}>
          <Text style={styles.logOff}>Log off</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Profile;
