import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/AddExerciseStyle'


const AddExercise = () => {
    const navigation = useNavigation();
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [images, setImages] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [reward, setReward] = useState('');
    const [category, setCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleName = (text) => {
        setName(text);
    }

    const handleDescription = (text) => {
        setDescription(text);
    }

    const handleDuration = (text) => {
        setDuration(text);
    }

    const handleImages = (text) => {
        setImages(text)
    }

    const handleDifficulty = (text) => {
        setDifficulty(text);
    }

    const handleReward = (nr) => {
        setReward(nr);
    }

    const handleCategory = (text) => {
        setCategory(text);
    }

    const handleError = (text) => {
        setErrorMessage(text);
    }

    const handleSave = () => {
        //add logic to insert the data in database
        //indien succes
        alert('Exercise added with succes');
        navigation.navigate('ProfileNav', {screen:'adminAdd'})
    }


    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>
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
                
                <Text style={styles.text}>images:</Text>

            <View style={styles.doubleInput}>
                <TextInput
                    style={styles.input}
                    value={images}
                    onChangeText={handleImages}
                />
                <TouchableOpacity style={styles.browse}>
                    <Text>Browse</Text>
                </TouchableOpacity>
                
                
            </View>
            <View style={styles.doubleText}>
                <Text style={styles.text}>difficulty:</Text>
                <Text style={styles.textReward}>reward:</Text>
            </View>
            <View style={styles.doubleInput}>
                <Picker
                    style={styles.difficultyPicker}
                    selectedValue={difficulty}
                    onValueChange={handleDifficulty}
                >
                    <Picker.Item label="easy" value="easy" />
                    <Picker.Item label="normal" value="normal" />
                    <Picker.Item label="hard" value="hard" />
                </Picker>

                <TextInput
                    style={styles.inputReward}
                    value={reward}
                    onChangeText={handleReward}
                />
            </View>
                <Text style={styles.text}>category:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={category}
                    onValueChange={handleCategory}
                >
                    <Picker.Item label="strength" value="strength" />
                    <Picker.Item label="cardio" value="cardio" />
                    <Picker.Item label="yoga/stretching" value="yoga" />
                    <Picker.Item label="coördination" value="coördination" />
                    <Picker.Item label="walking" value="walking" />

                </Picker>

                {errorMessage ? <Text style={styles.errorMessageText}>{errorMessage}</Text> : null}


                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.textButton}>SAVE</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    )

}

export default AddExercise;