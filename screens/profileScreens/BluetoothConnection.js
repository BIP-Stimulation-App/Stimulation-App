import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from '../../style/profileStyles/BluetoothStyles'
import { ScrollView } from 'react-native-gesture-handler';
import {BleManager, Device } from 'react-native-ble-plx';
const BluetoothConnection = () => {
    
    const[device, setDevice] = useState('none'); //must be empty, just for testing frontend
    const[devices, setDevices] = useState<Array<Device>>([]);
    const bleManager = new BleManager();
    var started = false;
     /*useEffect(() => {
        //fetch user data from database
        //const userData = getUserData(userId);
        var Bluetooth = BluetoothConnector.instance;
            Bluetooth.onConnected
            deviceEventEmitter.subscribe(device => {
                // Handle the event, e.g., update the view or perform any necessary actions
                console.log('Device discovered:', device);
        });
        Bluetooth.scanDevices();
        

        //set state variables with user data
        //setDevice(userData.device);
        //maybe try catch or if else when there is no device connected yet, the value will be 'none' otherwise the name of the device
        })*/ 
    const checkDupe = (newDevice) => devices.findIndex(existingDevice => existingDevice.id === newDevice.id);

    const getUserData = () => {
        //add logic to retrieve user data
        
    }
    
    const startSearch =() =>{
        if(!started){
            bleManager.startDeviceScan(null,null, (error,data) =>{
                if(error)console.log(error);
                if(data /*&& data.name?.includes("StimWatch")*/){
                    setDevices((prevState) => !checkDupe(prevState,data)?[...prevState,data]:prevState);                    
                }
            })
        }
        
    }


    const updateUserData = () => {
        //add logic to update the user data in database

    }

    const handleConnect = () => {
        //add logic
        bleManager.startDeviceScan();
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
                            {startSearch()}
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