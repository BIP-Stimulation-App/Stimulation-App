import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground,FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from '../../style/moveStyles/MoveStyles'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Move = () => {
    const navigation = useNavigation();

    const [category, setCategory] = useState('strength');
    const [exercises,setExercises] = useState([
        { // to be deleted
            id: 1,
            name: "situp",
            duration: "00:00:15",
            difficulty:"easy",
            reward: 10
        },
        {
            id: 2,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
        {
            id: 3,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
        {
            id: 4,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
        {
            id: 5,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
        {
            id: 6,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
        {
            id: 7,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
        {
            id: 8,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
        {
            id: 9,
            name: "situp",
            duration: "00:01:00",
            difficulty:"normal",
            reward: 10
        },
    ]);


    const changeCategory = (text) => {
        setCategory(text);
    }

    useEffect(()=>{
        navigation.addListener('focus', () => {
          fetchExercises();     
      }) 
    })
    const fetchExercises = async () => {
        //insert logic to get the list from the database    
      /*ExerciseService.getExercises()
      .then((result) => {
        setExercises(result)
      });*/
    };

    const renderItem = ({item}) => (
        <View style={styles.listComponent}>
            <TouchableOpacity onPress={handleNavigation}>
            <View style= {styles.titleContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.textExercise}>{item.duration}</Text>

            </View>
              
            <View style={styles.textContainer}>
                <Text style={styles.textExercise}>Difficulty: {item.difficulty.toUpperCase()}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textExercise}>{item.reward}</Text>
                    <Image source={require('../../assets/coin.png')} style={styles.coin} />
                </View>
            </View>
            </TouchableOpacity>
          
        </View>
    );

    const handleNavigation = () => {
        navigation.navigate('MoveNav', {screen: 'exercise'})
    }
  

    return(
        <ImageBackground source={require('../../assets/background2.png')} style={{ flex: 1 }}>
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.strength, category === 'strength' && {backgroundColor: 'lightgrey'}]} onPress={() => changeCategory('strength')}>
                    <Text style={styles.text}>strength</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardio, category === 'cardio' && {backgroundColor: 'lightgrey'}]} onPress={() => changeCategory('cardio')}>
                    <Text style={styles.text}>cardio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.yoga, category === 'yoga' && {backgroundColor: 'lightgrey'}]} onPress={() => changeCategory('yoga')}>
                    <Text style={styles.text}>yoga/stretching</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer2}>
                <TouchableOpacity style={[styles.coördination, category === 'coördination' && {backgroundColor: 'lightgrey'}]} onPress={() =>changeCategory('coördination')}>
                    <Text style={styles.text}>coördination</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.walking, category === 'walking' && {backgroundColor: 'lightgrey'}]} onPress={() => changeCategory('walking')}>
                    <Text style={styles.text}>walking</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
            <FlatList 
                data={exercises}
                renderItem={renderItem} 
                keyExtractor={(item) => item.id}
                style={{height: 200}}
                showsVerticalScrollIndicator={true}
            />
            </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <Image source={require('../../assets/work-out.png')} style={styles.workout} />
            <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('MoveNav', {screen:'progress'})}>
                <Text style={styles.history}>View your progress</Text>
            </TouchableOpacity>
        </View>
    </View>
    
    </ImageBackground>
    )

}

export default Move;