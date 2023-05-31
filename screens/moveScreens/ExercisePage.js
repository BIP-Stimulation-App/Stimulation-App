import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "../../style/moveStyles/ExerciseStyles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ExerciseService } from "../../Service/ExerciseService";
import { useRoute } from "@react-navigation/native";
import { Category, Difficulty, Exercise } from "../../Models/Excercise";

const ExercisePage = () => {
  const route = useRoute();
  const [exercise, setExercise] = useState(route.params.exercise);
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(exercise.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);

  const handleComplete = () => {
    //logic to handle when the exercise is completed
  };

  const startTimer = () => {
    if (!isRunning) {
      const timerDuration = new Date(`1970-01-01T${timeLeft}Z`).getTime();
      const startTime = new Date().getTime();
      setTimer(
        setInterval(() => {
          const elapsed = new Date().getTime() - startTime;
          const remaining = Math.max(timerDuration - elapsed, 0);
          const newTimeLeft = new Date(remaining).toISOString().substr(11, 8);
          setTimeLeft(newTimeLeft);
          if (remaining <= 0) {
            clearInterval(timer);
            setIsRunning(false);
            setShowStartButton(true);
            setTimeLeft("Yay! You completed the exercise!");
          }
        }, 1000)
      );
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setIsRunning(false);
  };

  const repeatTimer = () => {
    setTimer(null);
    setShowStartButton(true);
    setShowRepeatButton(false);
    setIsRunning(false);
    setTimeLeft(exercise.duration);
  };

  if (!exercise) {
    return (
      <View>
        <Text>Exercise not found...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/background3.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          source={exercise.image}
          style={styles.photo}
          resizeMode="contain"
          animationDuration={2000}
          repeatCount={-1}
        />
        <Text style={styles.title}>{exercise.name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>
            Difficulty: {Exercise.getDifficultyName(exercise.difficulty)}
          </Text>
          <Text style={styles.timeText}>{exercise.duration}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{exercise.description}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Reward:</Text>
          <Text style={styles.rewardText}>{exercise.reward}</Text>
          <Image
            source={require("../../assets/coin.png")}
            style={styles.coin}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                timeLeft === "Yay! You completed the exercise!"
                  ? "gray"
                  : "#388C77",
            },
          ]}
          onPress={isRunning ? pauseTimer : startTimer}
          disabled={timeLeft === "Yay! You completed the exercise!"}
        >
          <Text style={styles.textButton}>
            {isRunning
              ? "PAUSE"
              : timeLeft === "Yay! You completed the exercise!"
              ? "COMPLETE"
              : "START"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.timeLeft}>{timeLeft}</Text>
      </View>
    </ImageBackground>
  );
};

export default ExercisePage;
