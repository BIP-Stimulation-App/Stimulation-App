import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import styles from "../../style/profileStyles/AddExerciseStyle";
import { Category, Difficulty } from "../../Models/Excercise";
import { ExerciseService } from "../../Service/ExerciseService";
import { Exercise } from "../../Models/Excercise";
import { useRoute } from "@react-navigation/native";

const ChangeExercise = () => {
  const route = useRoute();
  const { exercise } = route.params;
  const navigation = useNavigation();
  const [changed, setChanged] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [reward, setReward] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (!changed) {
      setName(exercise.name);
      setDescription(exercise.description);
      setDuration(exercise.duration);
      setReward(exercise.reward.toString());
      setCategory(Category[exercise.category]);
      setDifficulty(Difficulty[exercise.difficulty]);
      setChanged(true);
    }
  });

  const handleName = (text) => {
    setName(text);
  };

  const handleDescription = (text) => {
    setDescription(text);
  };

  const handleDuration = (text) => {
    const numericInput = text.replace(/[^0-9]/g, "");

    // Format the numeric input as HH:mm:ss
    let formattedTime = "";
    if (numericInput.length > 0) {
      formattedTime += numericInput.substring(0, 2);
    }
    if (numericInput.length > 2) {
      formattedTime += ":" + numericInput.substring(2, 4);
    }
    if (numericInput.length > 4) {
      formattedTime += ":" + numericInput.substring(4, 6);
    }
    setDuration(formattedTime);
  };

  const handleImages = (text) => {
    setImages(text);
  };

  const handleDifficultyChange = (text) => {
    setDifficulty(text);
  };

  const handleReward = (nr) => {
    setReward(nr.replace(/[^0-9]/g, "0"));
  };

  const handleCategory = (text) => {
    setCategory(text);
  };

  const handleError = (text) => {
    setErrorMessage(text);
  };

  const handleSave = () => {
    //add logic to insert the data in database
    //indien succes
    let exercise = new Exercise(
      0,
      name,
      description,
      duration,
      difficulty,
      Number.parseInt(reward),
      category
    );
    let result = ExerciseService.updateExercise(exercise);
    if (result === "") {
      alert("Exercise added with succes");
      navigation.navigate("ProfileNav", { screen: "changeExercise" });
    } else alert(result);
  };

  return (
    <ImageBackground
      source={require("../../assets/background3.png")}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleName}
          />
          <Text style={styles.text}>description:</Text>
          <TextInput
            style={styles.description}
            value={description}
            onChangeText={handleDescription}
          />

          <Text style={styles.text}>duration (hh:mm:ss):</Text>
          <TextInput
            style={styles.input}
            value={duration}
            onChangeText={handleDuration}
          />

          <Text style={styles.text}>difficulty:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              mode={Platform.OS === "ios" ? "dropdown" : undefined} //doesn't work in IOS, keeps being a wheel
              style={styles.picker}
              selectedValue={difficulty}
              onValueChange={handleDifficultyChange}
            >
              <Picker.Item label="easy" value="Easy" />
              <Picker.Item label="normal" value="Normal" />
              <Picker.Item label="hard" value="Hard" />
            </Picker>
          </View>

          <Text style={styles.text}>reward:</Text>
          <TextInput
            style={styles.inputReward}
            value={reward}
            onChangeText={handleReward}
          />

          <Text style={styles.text}>category:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={category}
              onValueChange={handleCategory}
            >
              <Picker.Item label="strength" value="Strength" />
              <Picker.Item label="cardio" value="Cardio" />
              <Picker.Item label="yoga/stretching" value="Yoga" />
              <Picker.Item label="coördination" value="Coordination" />
              <Picker.Item label="walking" value="Walking" />
            </Picker>
          </View>
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

export default ChangeExercise;
