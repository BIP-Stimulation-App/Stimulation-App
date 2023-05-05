import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from '../../style/profileStyles/ShowExercisesStyles'

const ShowExercises = () => {
    const[testList, setTestList]=useState([ //to be deleted
       {
            id:1,
            nameExercise: 'sitUp',
            description:'test',
            duration: '00:01:00',
            difficulty: 'easy',
            category:'strength',
            reward: 5
        },
        {
            id:2,
            nameExercise: 'sitUp',
            description:'test',
            duration: '00:01:00',
            difficulty: 'easy',
            category:'strength',
            reward: 5
        },
        {
            id:3,
            nameExercise: 'sitUp',
            description:'test',
            duration: '00:01:00',
            difficulty: 'easy',
            category:'strength',
            reward: 5
        },
        {
            id:4,
            nameExercise: 'sitUp',
            description:'test',
            duration: '00:01:00',
            difficulty: 'easy',
            category:'strength',
            reward: 5
        },
        {
            id:5,
            nameExercise: 'sitUp',
            description:'test',
            duration: '00:01:00',
            difficulty: 'easy',
            category:'strength',
            reward: 5
        },
        {
            id:6,
            nameExercise: 'sitUp',
            description:'test',
            duration: '00:01:00',
            difficulty: 'easy',
            category:'strength',
            reward: 5
        },
        {
            id:7,
            nameExercise: 'sitUp',
            description:'test',
            duration: '00:01:00',
            difficulty: 'easy',
            category:'strength',
            reward: 5
        },
    ])
    //const[exercises, setExercises]= useState([]);
    
    /*useEffect(()=>{
        fetchExercises();
    }, []);*/

   /* const fetchExercises = async () => {
        //insert logic to get the list from the database

    }*/

    const renderEmpty = () => (
        <View style={styles.messageContainer}>
            <Text style={styles.noListMessage}>No exercises found!</Text>
            <Text style={styles.noListMessage}>Go to the 'Add Exercise'-section in the profile category to start adding exercises.</Text>
        </View>
    )

    const handleDelete = (id) => {
        //logic
    }
    
    const renderItem = ({item}) => (
        <View style={styles.listComponent}>
            <Text style={styles.titel}>{item.nameExercise}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>duration: {item.duration}</Text>
            <Text style={styles.text}>difficulty: {item.difficulty}</Text>
            <Text style={styles.text}>category: {item.category}</Text>
            <Text style={styles.text}>{item.reward} coins</Text>
            <TouchableOpacity onPress={()=> handleDelete(item.id)} style={styles.deleteButton}>
                <Text style={styles.delete}>DELETE</Text>
            </TouchableOpacity>
        </View>
    )


    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <FlatList
                        data={testList} //to be replaced with exercises list
                        renderItem={renderItem}
                        ListEmptyComponent={renderEmpty}
                        keyExtractor={(item) => item.id.toString()}
                        style={{height: 200}}
                        showsHorizontalScrollIndicator={false}
                    >
                    </FlatList>
                </View>
            </View>
        </ImageBackground>
    )
};
export default ShowExercises;