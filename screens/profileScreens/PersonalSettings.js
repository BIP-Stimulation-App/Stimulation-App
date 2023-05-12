import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/PersonalSettingsStyles'


const PersonalSettings = ({username}) => {
    const navigation = useNavigation();

   // const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[deviceName, setDeviceName] = useState('testDeviceName');
    const[userNameVisible, setUsernameVisible] = useState(true);
    const[errorMessage, setErrorMessage] = useState('');

    /*useEffect(() => {
        //fetch user data from database
        const userData = getUserData(userId);

        //set state variables with user data
        setUsername(userData.username);
        setEmail(userData.email);
        setPassword(userData.password);
        setDeviceName(userData.deviceName);
        setUsernameVisible(userData.userNameVisible);
    })*/

    const getUserData = () => {
        //add logic to retrieve user data
    }

    const handleSave = () => {
        //add logic to update the user data in database
        updateUserData(username, {username, email, password, userNameVisible})

        //indien ok
        alert('changes saved');
        navigation.navigate('ProfileNav', {screen: 'profile'});

    }

    const updateUserData = () => {
        //add logic to update the user data in database

    }

    const handleUsernameChange = (text) => {
        setUsername(text);
    }

    const handleEmailChange = (text) => {
        setEmail(text);
    }

    const handlePasswordChange = (text) => {
        setPassword(text);
    }

    const handleDeviceNameChange = (text) => {
        setDeviceName(text);
        //beperkingen hier opleggen
    }

    const handleUsernameVisibleChange = () => {
        setUsernameVisible(previousState => !previousState);
    }

    const handleErrorMessage = (message) => {
        setErrorMessage(message)
    }

    return(
        <ImageBackground source={require('../../assets/background3.png')} style={{ flex: 1 }}>
            <View style={styles.container}>

                <Text style={styles.text}>Change username:</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={handleUsernameChange}
                />
            <Text style={styles.text}>Show username in leaderboard?</Text>
            <View style={styles.switch}>
                <Switch 
                    trackColor={{ false: '#767577', true: '#BFE4C0' }}
                    thumbColor={userNameVisible ? '#388C77' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={handleUsernameVisibleChange}
                    value={userNameVisible}
                />
                <Text style={styles.switchText}>{userNameVisible ? 'On' : 'Off'}</Text>
            </View>

                <Text style={styles.text}>Change email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={handleEmailChange}
                />

                <Text style={styles.text}>Change password:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                />

                <Text style={styles.text}>Old password:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                />
                

                {deviceName !== "none" && (
                    <View>
                        <Text style={styles.text}>Change bracelet name:</Text>
                        <TextInput
                            style={styles.input}
                            value={deviceName}
                            onChangeText={handleDeviceNameChange}
                        />
                    </View>
                )}
                

                {errorMessage ? <Text style={styles.errorMessageText}>{errorMessage}</Text> : null}


                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.textButton}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )

}

export default PersonalSettings;