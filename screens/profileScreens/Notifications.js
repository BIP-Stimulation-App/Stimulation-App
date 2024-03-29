import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,Switch, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/NotificationsStyles';
import { getNotificationSettings, saveNotificationSettings } from '../../DataContext';
import {NotificationSetting} from '../../Models/NotificationSetting'

const Notifications = ({username}) => {
    const navigation = useNavigation();

    const [receiveForMedicine, setReceiveForMedicine] = useState(true); //def yes
    const [receive1HourBefore, setReceive1HourBefore] = useState(false); //def no
    const [receiveGames, setReceiveGames] = useState(true); //def yes
    const [receiveWarning, setReceiveWarning] = useState(true); //def yes
    const [participation, setParticipation] = useState(true);//def yes
    const [firstLoad,setFirstLoad] = useState(true);
      useEffect(()  => {
        //fetch user data from database
        if(firstLoad) getData();
    })

    const getData = async () => {
        setFirstLoad(false);
        var notifications = await getNotificationSettings();
        console.log(notifications);
        if(notifications == null){
            saveNotificationSettings(new NotificationSetting(true,false,true,true,true));
            console.log("saved");
            return;
        }
        console.log("Setting values accordingly");
        //set state variables with user data
        setReceiveForMedicine(notifications.medecine);
        setReceive1HourBefore(notifications.medecineEarly);
        setReceiveGames(notifications.dailyReminder);
        setReceiveWarning(notifications.dangerousParameters);
        setParticipation(notifications.leaderboards);
    }

    const handleSave = () => {
        saveNotificationSettings(new NotificationSetting(receiveForMedicine,receive1HourBefore,receiveGames,receiveWarning,participation))
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
            <ScrollView>
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
                    handleSave();
                }}>
                    <Text style={styles.textButton}>SAVE</Text>
                </TouchableOpacity>            
            </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Notifications;