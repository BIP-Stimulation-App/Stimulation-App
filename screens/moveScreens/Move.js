import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../style/moveStyles/MoveStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ExerciseService } from "../../Service/ExerciseService";
import { Difficulty } from "../../Models/Excercise";

const Move = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState("Strength");
  const [exercises, setExercises] = useState([]);

  const changeCategory = (text) => {
    console.log("updating!");
    setCategory(text);
    ExerciseService.getExercises(text).then((result) => {
      if (typeof result == "string") {
        return console.log(result);
      }
      console.log(result);
      console.log("setting data");
      setExercises(result);
    });
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      fetchExercises();
    });
  });
  const fetchExercises = async () => {
    //insert logic to get the list from the database
    ExerciseService.getExercises("Strength").then((result) => {
      if (typeof result == "string") {
        return console.log(result);
      }
      console.log(result);
      console.log("setting data");
      setExercises(result);
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.listComponent}>
      <TouchableOpacity onPress={() => handleNavigation(item)}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.textExercise}>{item.duration}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textExercise}>
            Difficulty: {Difficulty[item.difficulty].toUpperCase()}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.textExercise}>{item.reward}</Text>
            <Image
              source={require("../../assets/coin.png")}
              style={styles.coin}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const handleNavigation = (item) => {
    navigation.navigate("MoveNav", {
      screen: "exercisePage",
      params: {
        exercise: item,
      },
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background2.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.strength,
              category === "Strength" && { backgroundColor: "lightgrey" },
            ]}
            onPress={() => changeCategory("Strength")}
          >
            <Text style={styles.text}>strength</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.cardio,
              category === "Cardio" && { backgroundColor: "lightgrey" },
            ]}
            onPress={() => changeCategory("Cardio")}
          >
            <Text style={styles.text}>cardio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.yoga,
              category === "Yoga" && { backgroundColor: "lightgrey" },
            ]}
            onPress={() => changeCategory("Yoga")}
          >
            <Text style={styles.text}>yoga/stretching</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer2}>
          <TouchableOpacity
            style={[
              styles.coördination,
              category === "Coordination" && { backgroundColor: "lightgrey" },
            ]}
            onPress={() => changeCategory("Coordination")}
          >
            <Text style={styles.text}>coördination</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.walking,
              category === "Walking" && { backgroundColor: "lightgrey" },
            ]}
            onPress={() => changeCategory("Walking")}
          >
            <Text style={styles.text}>walking</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={exercises}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={{ height: 200 }}
            showsVerticalScrollIndicator={true}
          />
        </View>
        <View>
          <Image
            source={require("../../assets/work-out.png")}
            style={styles.workout}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Move;
