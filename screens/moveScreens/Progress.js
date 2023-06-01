import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from '../../style/moveStyles/ProgressStyles';


const Progress = () => {
    const navigation = useNavigation();

    const [timeSpent1, setTimeSpent1] = useState('10:30:25');
    const [coins1, setcoins1] = useState('150');
    const [exercises1, setExercises1] = useState('36');

    const [timeSpent12, setTimeSpent12] = useState('200:25:10');
    const [coins12, setcoins12] = useState('620');
    const [exercises12, setExercises12] = useState('250');


    return(
        <ImageBackground source={require('../../assets/background2.png')} style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.bubble}>
                <Text style={styles.title}>Last 30 days...</Text>
                <View>
                        <Text style={styles.text}>Time spent on exercises:</Text>
                        <Text style={styles.inputData}>{timeSpent1}</Text>

                        <Text style={styles.text}>Total amount of coins earned:</Text>
                        <Text style={styles.inputData}>{coins1}</Text>

                        <Text style={styles.text}>Amount of Exercises completed:</Text>
                        <Text style={styles.inputData}>{exercises1}</Text>
                </View>
                </View>

                <View style={styles.bubble}>
                <Text style={styles.title}>This year...</Text>
                <View>
                        <Text style={styles.text}>Time spent on exercises:</Text>
                        <Text style={styles.inputData}>{timeSpent12}</Text>

                        <Text style={styles.text}t>Total amount of coins earned:</Text>
                        <Text style={styles.inputData}>{coins12}</Text>

                        <Text style={styles.text}>Amount of Exercises completed:</Text>
                        <Text style={styles.inputData}>{exercises12}</Text>
                </View>
                </View>
            </View>
        </ImageBackground>
    )

}

export default Progress;