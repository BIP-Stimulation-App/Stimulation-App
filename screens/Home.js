import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../style/HomeStyles";
import { UserService } from "../Service/UserService";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    setWelcomeName();
  });
  async function setWelcomeName() {
    let user = await UserService.GetUserData();
    console.log("user:" + user.firstName);
    setFirstName(user.firstName);
  }

  return (
    <ImageBackground
      source={require("../assets/background1.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.hello}>Hello {firstName}!</Text>

        <TouchableOpacity
          style={styles.widebutton}
          onPress={() => navigation.navigate("HealthNav", { screen: "Health" })}
        >
          <Text style={styles.textHealth}>My Health</Text>
        </TouchableOpacity>

        <View style={styles.containerSmall}>
          <TouchableOpacity
            style={styles.smallbutton1}
            onPress={() =>
              navigation.navigate("MedicineNav", { screen: "Medicine" })
            }
          >
            <Text style={styles.text}>Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.smallbutton2}
            onPress={() =>
              navigation.navigate("HomeNav", { screen: "MoveNav" })
            }
          >
            <Text style={styles.text}>Let's Move!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerSmall}>
          <TouchableOpacity
            style={styles.smallbutton3}
            onPress={() =>
              navigation.navigate("LeaderboardNav", { screen: "Leaderboard" })
            }
          >
            <Text style={styles.text}>Compete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.smallbutton4}
            onPress={() =>
              navigation.navigate("HomeNav", { screen: "ProfileNav" })
            }
          >
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
