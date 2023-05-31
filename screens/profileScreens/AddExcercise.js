import React, { useState } from "react";
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
import { ExerciseService } from "../../Service/ExerciseService";
import { Exercise } from "../../Models/Excercise";

const AddExercise = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("00:01:00");
  const [difficulty, setDifficulty] = useState("easy");
  const [reward, setReward] = useState("0");
  const [category, setCategory] = useState("Strength");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSave = async () => {
    let exercise = new Exercise(
      0,
      name,
      description,
      duration,
      difficulty,
      Number.parseInt(reward),
      category
    );
    console.log(`adding exercise ${exercise.toString()}`);
    let result = await ExerciseService.addExcercise(exercise);
    if (result === "") {
      alert("Exercise added with succes");
      navigation.navigate("ProfileNav", { screen: "adminAdd" });
    } else alert(result);
  };
  const validateTime = (text) => {
    // Validate the time format
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return regex.test(text);
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

          <Text style={styles.text}>duration (HH:mm:ss):</Text>
          <TextInput
            style={styles.input}
            value={duration}
            onChangeText={handleDuration}
            onEndEditing={(e) => {
              if (!validateTime(e.nativeEvent.text)) {
              }
            }}
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

export default AddExercise;
