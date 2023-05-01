import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/PersonalSettingsStyles'


const PersonalSettings = ({userId}) => {
    const navigation = useNavigation();

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[userNameVisible, setUsernameVisible] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

    /*useEffect(() => {
        //fetch user data from database
        const userData = getUserData(userId);

        //set state variables with user data
        setUsername(userData.username);
        setEmail(userData.email);
        setPassword(userData.password);
        setUsernameVisible(userData.userNameVisible);
    })*/

    const getUserData = () => {
        //add logic to retrieve user data
    }

    const handleSave = () => {
        //add logic to update the user data in database
        updateUserData(userId, {username, email, password, userNameVisible})
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

    const handleUsernameVisibleChange = (text) => {
        setUsernameVisible(text)
    }

    const handleErrorMessage = (message) => {
        setErrorMessage(message)
    }

    return(
        <ImageBackground source={require('../../pictures/background3.png')} style={{ flex: 1 }}>
            <View style={styles.container}>

                <Text style={styles.text}>username:</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={handleUsernameChange}
                />

                <Text style={styles.text}>Show username in leaderboard?</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={userNameVisible}
                    onValueChange={handleUsernameVisibleChange}
                >
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                </Picker>

                <Text style={styles.text}>email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={handleEmailChange}
                />

                <Text style={styles.text}>password:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                />

                {errorMessage ? <Text style={styles.errorMessageText}>{errorMessage}</Text> : null}


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

export default PersonalSettings;