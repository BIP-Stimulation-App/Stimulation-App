import React, {  } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/ProfileStyles.js'


const Profile = () => {
    const navigation = useNavigation();

    const handleLogOff = () =>{
        //navigation to be added (make a navigator from the auth pages, and then ref. navigation.navigate('authNav', {screen: ... }))
        //add the logic with the token

        navigation.navigate('AuthNav',{screen:'login'})
    }

    return(
        <ImageBackground source={require('../../assets/background2.png')} style={{flex: 1}}> 
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('personalSettings')}}>
                <Text style={styles.textButton}>Personal settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('bluetooth')}}>
                <Text style={styles.textButton}>Connect bluetooth</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('notifications')}}>
                <Text style={styles.textButton}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('adminAdd')}}>
                <Text style={styles.textButton}>Add Exercise</Text>
            </TouchableOpacity>

            <View style={styles.container2}>
            <TouchableOpacity style={styles.logOffContainer} onPress={handleLogOff}>
            <Text style={styles.logOff}>Log off</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    )

}

export default Profile;