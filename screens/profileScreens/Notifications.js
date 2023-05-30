import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/NotificationsStyles';

const Notifications = ({username}) => {
    const navigation = useNavigation();

    const [receiveForMedicine, setReceiveForMedicine] = useState('yes'); //def yes
    const [receive1HourBefore, setReceive1HourBefore] = useState(''); //def no
    const [receiveGames, setReceiveGames] = useState(''); //def yes
    const [receiveWarning, setReceiveWarning] = useState(''); //def yes
    const [participation, setParticipation] = useState('');//def yes

      /*useEffect(() => {
        //fetch user data from database
        const userData = getUserData(userId);

        //set state variables with user data
        setReceiveForMedicine(userData.receiveForMedicine);
        setReceive1HourBefore(userData.receive1HourBefore);
        setReceiveGames(userData.receiveGames);
        setReceiveWarning(userData.receiveWarning);
        setParticipation(userData.participation)
    })*/
    const getUserData = () => {
        //add logic to retrieve user data
    }

    const handleSave = () => {
        //add logic to update the user data in database
        updateUserData(username, {receiveForMedicine, receive1HourBefore, receiveGames, receiveWarning, participation})
    }

    const updateUserData = () => {
        //add logic to update the user data in database

    }

    const handleReceiveForMedicineChange = (itemValue) => {
        setReceiveForMedicine(itemValue);
    }

    const handleReceive1HourBeforeChange = (itemValue) => {
        setReceive1HourBefore(itemValue);
    }

    const handleReceiveGamesChange = (itemValue) => {
        setReceiveGames(itemValue);
    }

    const handleReceiveWarningChange = (itemValue) => {
        setReceiveWarning(itemValue);
    }

    const handleParticipationChange = (itemValue) => {
        setParticipation(itemValue);
    }

    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.text}>Receive notification for medicine?</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={receiveForMedicine}
                    onValueChange={handleReceiveForMedicineChange}
                >
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                </Picker>

                {receiveForMedicine === 'yes' && (
                    <View>
                        <Text style={styles.text}>Receive notification 1 hour before a medicine needs to be taken?</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={receive1HourBefore}
                            onValueChange={handleReceive1HourBeforeChange}
                        >
                            <Picker.Item label="No" value="no" />
                            <Picker.Item label="Yes" value="yes" />
                        </Picker>
                    </View>
                )}
                
                <Text style={styles.text}>Receive a daily reminder for exercises/puzzels?</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={receiveGames}
                    onValueChange={handleReceiveGamesChange}
                >
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                </Picker>

                <Text style={styles.text}>Receive a warning when one of your physical measured parameters are dangerously high/low?</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={receiveWarning}
                    onValueChange={handleReceiveWarningChange}
                >
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                </Picker>

                <Text style={styles.text}>Participate in the online leaderboard?</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={participation}
                    onValueChange={handleParticipationChange}
                >
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                </Picker>

                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('ProfileNav', {screen: 'profile'});
                    alert('clicked the save button'); //must be replaced with the 'handleSave' - function
                }}>
                    <Text style={styles.textButton}>SAVE</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Notifications;