import React, { useState } from 'react';
import {  View, Text, TextInput, Picker, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/medicineStyles/AddMedicineStyles'


const AddMedicine = () => {
    const navigation = useNavigation();

    const [nameMedicine, setNameMedicine] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [frequency, setFrequency] = useState('');
    const [day, setDay] = useState('');


    const handleTimeChange = (value) => {
        setTimestamp(value);
    }

    const handleFrequencyChange = (value) => {
        setFrequency(value);
    }

    const handleDayChange = (value) => {
        setDay(value);
    }

    const handleSave = () => {
        //insert logic to save to the database
        alert(`name: ${nameMedicine}, timestamp: ${timestamp}, frequency: ${frequency}`);
        navigation.navigate('MedicineNav', {screen: 'medicine'} )
    }

    return(
        <ImageBackground source={require('../../pictures/background2.png')} style={{ flex: 1 }}>

        <View style={styles.container}>
            
            <Image
                source={require('../../pictures/medicine.png')}
                style={styles.picture}
            />
            <Text style={styles.text}>medicine name:</Text>
            <TextInput onChangeText={setNameMedicine} style={styles.inputMedicineName} placeholder="name" placeholderTextColor="grey"></TextInput>

            <Text style={styles.text}>Description:</Text>
            <TextInput onChangeText={setNameMedicine} style={styles.inputMedicineName} placeholder="amount of pills - example" placeholderTextColor="grey"></TextInput>


            <Text style={styles.text}>time: </Text>
            <Picker 
                selectedValue={timestamp} 
                onValueChange={handleTimeChange}
                style={styles.picker}

            >
                <Picker.Item label="12:00 AM" value="12:00 AM" />
                <Picker.Item label="12:30 AM" value="12:30 AM" />
                <Picker.Item label="01:00 AM" value="01:00 AM" />
                <Picker.Item label="01:30 AM" value="01:30 AM" />
                <Picker.Item label="02:00 AM" value="02:00 AM" />
                <Picker.Item label="02:30 AM" value="02:30 AM" />
                <Picker.Item label="03:00 AM" value="03:00 AM" />
                <Picker.Item label="03:30 AM" value="03:30 AM" />
                <Picker.Item label="04:00 AM" value="04:00 AM" />
                <Picker.Item label="04:30 AM" value="04:30 AM" />
                <Picker.Item label="05:00 AM" value="05:00 AM" />
                <Picker.Item label="05:30 AM" value="05:30 AM" />
                <Picker.Item label="06:00 AM" value="06:00 AM" />
                <Picker.Item label="06:30 AM" value="06:30 AM" />
                <Picker.Item label="07:00 AM" value="07:00 AM" />
                <Picker.Item label="07:30 AM" value="07:30 AM" />
                <Picker.Item label="08:00 AM" value="08:00 AM" />
                <Picker.Item label="08:30 AM" value="08:30 AM" />
                <Picker.Item label="09:00 AM" value="09:00 AM" />
                <Picker.Item label="09:30 AM" value="09:30 AM" />
                <Picker.Item label="10:00 AM" value="10:00 AM" />
                <Picker.Item label="10:30 AM" value="10:30 AM" />
                <Picker.Item label="11:00 AM" value="11:00 AM" />
                <Picker.Item label="11:30 AM" value="11:30 AM" />
                <Picker.Item label="12:00 AM" value="12:00 AM" />
                <Picker.Item label="12:30 AM" value="12:30 AM" />
                <Picker.Item label="01:00 PM" value="01:00 PM" />
                <Picker.Item label="01:30 PM" value="01:30 PM" />
                <Picker.Item label="02:00 PM" value="02:00 PM" />
                <Picker.Item label="02:30 PM" value="02:30 PM" />
                <Picker.Item label="03:00 PM" value="03:00 PM" />
                <Picker.Item label="03:30 PM" value="03:30 PM" />
                <Picker.Item label="04:00 PM" value="04:00 PM" />
                <Picker.Item label="04:30 PM" value="04:30 PM" />
                <Picker.Item label="05:00 PM" value="05:00 PM" />
                <Picker.Item label="05:30 PM" value="05:30 PM" />
                <Picker.Item label="06:00 PM" value="06:00 PM" />
                <Picker.Item label="06:30 PM" value="06:30 PM" />
                <Picker.Item label="07:00 PM" value="07:00 PM" />
                <Picker.Item label="07:30 PM" value="07:30 PM" />
                <Picker.Item label="08:00 PM" value="08:00 PM" />
                <Picker.Item label="08:30 PM" value="08:30 PM" />
                <Picker.Item label="09:00 PM" value="09:00 PM" />
                <Picker.Item label="09:30 PM" value="09:30 PM" />
                <Picker.Item label="10:00 PM" value="10:00 PM" />
                <Picker.Item label="10:30 PM" value="10:30 PM" />
                <Picker.Item label="11:00 PM" value="11:00 PM" />
                <Picker.Item label="11:30 PM" value="11:30 PM" />
            </Picker>

            <Text style={styles.text}>frequency: </Text>
            <Picker
                selectedValue={frequency}
                onValueChange={handleFrequencyChange}
                style={styles.picker}
            >
                <Picker.Item label="only today" value="once"/>
                <Picker.Item label="repeat every day" value="daily" />
                <Picker.Item label="repeat once every week" value="weekly" />
            </Picker>
            
            {frequency === 'weekly' && (
                <View>
                    <Text style={styles.text}>Which day?</Text>
                <Picker
                    selectedValue={day}
                    onValueChange={handleDayChange}
                    style={styles.picker}
                >
                    <Picker.Item label="Monday" value="monday" />
                    <Picker.Item label="Tuesday" value="tuesday" />
                    <Picker.Item label="Wednessday" value="wednessday" />
                    <Picker.Item label="Thursday" value="thursday" />
                    <Picker.Item label="Friday" value="friday" />
                    <Picker.Item label="Saturday" value="saturday" />
                    <Picker.Item label="Sunday" value="sunday" />
                </Picker>
                </View>
            )}

            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                <Text style={styles.saveText}>SAVE</Text>
            </TouchableOpacity>
         
        </View>
        </ImageBackground>
    )

   
}


export default AddMedicine;