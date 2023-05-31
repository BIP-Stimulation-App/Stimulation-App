import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../style/profileStyles/ShowExercisesStyles";
import { ExerciseService } from "../../Service/ExerciseService";
import { Exercise } from "../../Models/Excercise";

const ShowExercises = () => {
  const navigation = useNavigation();

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    console.log("Getting exercises");
    var result = await ExerciseService.getExercises();
    console.log(result);
    if (typeof result === "string") {
      log(result);
      return;
    }
    setExercises(result);
  };

  const renderEmpty = () => (
    <View style={styles.messageContainer}>
      <Text style={styles.noListMessage}>No exercises found!</Text>
      <Text style={styles.noListMessage}>
        Go to the 'Add Exercise'-section in the profile category to start adding
        exercises.
      </Text>
    </View>
  );

  const handleDelete = async (id) => {
    console.log("Deleting");
    var result = await ExerciseService.removeExercise(id);
    console.log(result);
    if (result) {
      await fetchExercises();
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.listComponent}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProfileNav", { screen: "changeExercise",
          params:{ exercise:item} });
        }}
      >
        <Text style={styles.titel}>{item.nameExercise}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>duration: {item.duration}</Text>
        <Text style={styles.text}>
          difficulty: {Exercise.getDifficultyName(item.difficulty)}
        </Text>
        <Text style={styles.text}>
          category: {Exercise.getCategoryName(item.category)}
        </Text>
        <Text style={styles.text}>{item.reward} coins</Text>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.delete}>DELETE</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/background3.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={exercises}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
            keyExtractor={(item) => item.id.toString()}
            style={{ height: 200 }}
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </View>
      </View>
    </ImageBackground>
  );
};
export default ShowExercises;
