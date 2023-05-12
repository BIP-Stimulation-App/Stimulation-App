import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/NotificationsStyles';

const Notifications = ({username}) => {
    const navigation = useNavigation();

    const [receiveForMedicine, setReceiveForMedicine] = useState(true); //def yes
    const [receive1HourBefore, setReceive1HourBefore] = useState(false); //def no
    const [receiveGames, setReceiveGames] = useState(true); //def yes
    const [receiveWarning, setReceiveWarning] = useState(true); //def yes
    const [participation, setParticipation] = useState(true);//def yes

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

    const handleReceiveForMedicineChange = () => {
        setReceiveForMedicine(previousState => !previousState);
    }

    const handleReceive1HourBeforeChange = () => {
        setReceive1HourBefore(previousState => !previousState);
    }

    const handleReceiveGamesChange = () => {
        setReceiveGames(previousState => !previousState);
    }

    const handleReceiveWarningChange = () => {
        setReceiveWarning(previousState => !previousState);
    }

    const handleParticipationChange = () => {
        setParticipation(previousState => !previousState);
    }

    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>
            <View style={styles.container}>
            <Text style={styles.text}>Receive notification for medicine?</Text>
            <View style={styles.switch}>
                <Switch 
                    trackColor={{ false: '#767577', true: '#BFE4C0' }}
                    thumbColor={receiveForMedicine ? '#388C77' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={handleReceiveForMedicineChange}
                    value={receiveForMedicine}
                />
                <Text style={styles.switchText}>{receiveForMedicine ? 'On' : 'Off'}</Text>
            </View>
                {receiveForMedicine === true && (
                    <View>
                        <Text style={styles.text}>Receive notification 1 hour before a medicine needs to be taken?</Text>
                        <View style={styles.switch}>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#BFE4C0' }}
                            thumbColor={receive1HourBefore ? '#388C77' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={handleReceive1HourBeforeChange}
                            value={receive1HourBefore}
                        />
                        <Text style={styles.switchText}>{receive1HourBefore ? 'On' : 'Off'}</Text>
                        </View>
                    </View>
                )}
                
                <Text style={styles.text}>Receive a daily reminder for exercises/puzzels?</Text>
                <View style={styles.switch}>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#BFE4C0' }}
                            thumbColor={receiveGames ? '#388C77' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={handleReceiveGamesChange}
                            value={receiveGames}
                        />
                        <Text style={styles.switchText}>{receiveGames ? 'On' : 'Off'}</Text>
                </View>

                <Text style={styles.text}>Receive a warning when one of your physical measured parameters are dangerously high/low?</Text>
                <View style={styles.switch}>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#BFE4C0' }}
                            thumbColor={receiveWarning ? '#388C77' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={handleReceiveWarningChange}
                            value={receiveWarning}
                        />
                        <Text style={styles.switchText}>{receiveWarning ? 'On' : 'Off'}</Text>
                </View>

                <Text style={styles.text}>Participate in the online leaderboard?</Text>
                <View style={styles.switch}>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#BFE4C0' }}
                            thumbColor={participation ? '#388C77' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={handleParticipationChange}
                            value={participation}
                        />
                        <Text style={styles.switchText}>{participation ? 'On' : 'Off'}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('ProfileNav', {screen: 'profile'});
                    alert('clicked the save button'); //must be replaced with the 'handleSave' - function
                }}>
                    <Text style={styles.textButton}>SAVE</Text>
                </TouchableOpacity>
            
            </View>
        </ImageBackground>
    )
}

export default Notifications;