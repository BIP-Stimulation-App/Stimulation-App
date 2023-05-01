import React, {  } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/profileStyles/ProfileStyles.js'


const Profile = () => {
    const navigation = useNavigation();

    const handleLogOff = () =>{
        navigation.navigate('../../auth/LogIn.js');
    }

    return(
        <ImageBackground source={require('../../pictures/background2.png')} style={{flex: 1}}> 
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Personal settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Connect bluetooth</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Notification</Text>
            </TouchableOpacity>

            <View style={styles.container2}>
            <TouchableOpacity style={styles.logOffContainer} onPress={()=>{handleLogOff}}>
            <Text style={styles.logOff}>Log off</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    )

}

export default Profile;