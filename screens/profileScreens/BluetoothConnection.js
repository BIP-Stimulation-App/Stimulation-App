import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from '../../style/profileStyles/BluetoothStyles'
import { ScrollView } from 'react-native-gesture-handler';

const BluetoothConnection = ({username}) => {

    const[device, setDevice] = useState('testNameDevice'); //must be empty, just for testing frontend

     /*useEffect(() => {
        //fetch user data from database
        const userData = getUserData(userId);

        //set state variables with user data
        setDevice(userData.device);
        //maybe try catch or if else when there is no device connected yet, the value will be 'none' otherwise the name of the device
    })*/

    const getUserData = () => {
        //add logic to retrieve user data
    }


    const updateUserData = () => {
        //add logic to update the user data in database

    }

    const handleConnect = () => {
        //add logic
        setDevice('testNameDevice') //to be replaced
        updateUserData(username, {device})
                //add logic to update the user data in database
    }

    const handleDisconnect = () => {
        setDevice('none')
        updateUserData(username, {device})
                //add logic to update the user data in database
    }

    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>Already connected medicine bracelet:</Text>
                <Text style={styles.deviceName}>{device}</Text>

                {device === 'none' ? (
                    <View>
                        <Text style={styles.text}>Start searching: </Text>
                        <ScrollView style={styles.scroll}>
                            {/* implement the searchable devices */}
                        </ScrollView>
                        <TouchableOpacity style={styles.button} onPress={handleConnect}>
                            <Text style={styles.textButton}>CONNECT</Text>
                        </TouchableOpacity>
                    </View>
                ):(
                    <View>
                        <TouchableOpacity style={styles.button} onPress={handleDisconnect}>
                            <Text style={styles.textButton}>DISCONNECT</Text>
                        </TouchableOpacity>
                    </View>
                )}
            
            </View>
        </ImageBackground>
    )
}

export default BluetoothConnection;