import React, { useState, useEffect} from 'react';
import { View, Text, ImageBackground, Image, } from 'react-native';
import styles from '../../style/moveStyles/ExerciseStyles';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ExerciseService } from '../../Service/ExerciseService';



const Exercise = () => {
    const [exercise,setExercise] = useState({ //to be deleted 
        name: 'Sit up',
        description: 'Sit ups are a great exercise for strengthening your chest, shoulders, and triceps. Put your hands behind your ears. Pull your torso off the ground and lay down again.',
        difficulty: 'easy',
        category: 'strength',
        reward: 10,
        image: require('../../assets/situp.gif'),
        time: '00:00:15'
    })
    const [timer, setTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(exercise.time);
    const [isRunning, setIsRunning] = useState(false);
    const [showStartButton, setShowStartButton] = useState(false);
    
    useEffect(() => {
        //logic to pull the exercise from the database
        
    }, []);

 
    const handleComplete = () => {
        //logic to handle when the exercise is completed
    }

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
    setTimeLeft(exercise.time);
  };

   

    if (!exercise){
        return (
            <View>
                <Text>Exercise not found...</Text>
            </View>
        );
    }

    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>

        <View style={styles.container}>
            <Image
                //source={{uri: exercise.image}}
                source={exercise.image}
                style={styles.photo} 
                resizeMode='contain'
                animationDuration={2000}
                repeatCount={-1}
            />
            <Text style={styles.title}>{exercise.name}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Difficulty: {exercise.difficulty.toUpperCase()}</Text>
                <Text style={styles.timeText}>{exercise.time}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{exercise.description}</Text>
            </View>
            <View style={{flexDirection: 'row'}}> 
                <Text>Reward:</Text>
                <Text style={styles.rewardText}>{exercise.reward}</Text>
                <Image source={require('../../assets/coin.png')} style={styles.coin} />
            </View>
            <TouchableOpacity 
                style={[styles.button, {backgroundColor: timeLeft === "Yay! You completed the exercise!" ? 'gray' : '#388C77'}]} 
                onPress={isRunning ? pauseTimer : startTimer} 
                disabled={timeLeft === "Yay! You completed the exercise!"}
            >
            <Text style={styles.textButton}>
                {isRunning ? 'PAUSE' : timeLeft === "Yay! You completed the exercise!" ? 'COMPLETE' : 'START'}
            </Text>
            </TouchableOpacity>
                <Text style={styles.timeLeft}>{timeLeft}</Text>
            
        </View>

        </ImageBackground>
    )

}

export default Exercise;