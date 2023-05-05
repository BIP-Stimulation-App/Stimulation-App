import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/ShowExercisesStyles'

const ShowExercises = () => {
    
    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>
            <View>
                <Text>Test text</Text>
            </View>
        </ImageBackground>
    )
};
export default ShowExercises;