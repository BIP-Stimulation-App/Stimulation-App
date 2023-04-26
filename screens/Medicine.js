import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image, ScrollView} from 'react-native';
import styles from '../style/MedicineStyles';
import {useNavigation} from '@react-navigation/native';

const Medicine = () => {
    const navigation = useNavigation();
    const [testList, setTestList] = useState([
    {
        id: 1,
        nameMedicine: 'Aspirin',
        description: '2 pils',
        timestamp: '10:00 AM',
        frequency: 'daily'
      },
      {
        id: 2,
        nameMedicine: 'Ibuprofen',
        timestamp: '12:00 PM',
        frequency: 'once'
      },
      {
        id: 3,
        nameMedicine: 'Paracetamol',
        description: '2 pils',
        timestamp: '08:00 AM',
        frequency: 'daily'
      },
      {
        id: 4,
        nameMedicine: 'Antihistamine',
        timestamp: '10:00 PM',
        frequency: 'weekly'
      },
      {
        id: 5,
        nameMedicine: 'Antihistamine',
        timestamp: '10:00 PM',
        frequency: 'weekly'
      },
      {
        id: 6,
        nameMedicine: 'Antihistamine',
        timestamp: '10:00 PM',
        frequency: 'weekly'
      },
      {
        id: 7,
        nameMedicine: 'Antihistamine',
        description: '2 pils',
        timestamp: '10:00 PM',
        frequency: 'weekly'
      },
      {
        id: 8,
        nameMedicine: 'Antihistamine',
        timestamp: '10:00 PM',
        frequency: 'weekly'
      },
      {
        id: 9,
        nameMedicine: 'Antihistamine',
        timestamp: '10:00 PM',
        frequency: 'weekly'
      },
]);    
//const [medicines, setMedcines] = useState([]);

/*useEffect(() => {
    fetchMedicines();
}, []);

const fetchMedicines = async () => {
    //insert logic to get the list from the database
};*/

const handleNavigate = () => {
    navigation.navigate('MedicineNav', {screen:'addMed'})
}

const renderEmpty = () => (
    <View style={styles.messageContainer}>
        <Text style={styles.noListMessage}>No medicines found</Text>
        <Text style={styles.noListMessage}>Press the '+' sign to add medicine</Text>
    </View>
);

const handleDelete = (id) => {
    const updatedList = testList.filter(item => item.id !== id); //testList moet vervangen worden door medicines (na implementatie logica)
    setTestList(updatedList); //setTestList moet vervangen worden door setMedicines (na implementatie logica)
}

const renderItem = ({item}) => (
    <View style={styles.listComponent}>
        <View style= {styles.titleContainer}>
            <Text style={styles.titel}>{item.nameMedicine}</Text>
        </View>
           
        <View style={styles.textContainer}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.text}>{item.timestamp}</Text>
            <Text style={styles.text}>{item.frequency}</Text>
  
        </View>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Text style={styles.delete}>DELETE</Text>
        </TouchableOpacity>
      
    </View>
);

 
return(
    <ImageBackground source={require('../pictures/background2.png')} style={{ flex: 1 }}>
    <View style={styles.container}>
    <View style={styles.buttonView}>
        <TouchableOpacity style={styles.addButton} onPress={handleNavigate}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.listContainer}>
        <FlatList 
            data={testList} //needs to be replaced with medicines property, after implementation the testlist may be deleted
            renderItem={renderItem} 
            ListEmptyComponent={renderEmpty}
            keyExtractor={(item) => item.id.toString()}
            style={{height: 200}}
            showsVerticalScrollIndicator={false}
        />
    </View>
    <Text style={styles.explanation}>By adding medicine, <br/> a notification on your phone will appear on the selected time.</Text>
    </View>    
    </ImageBackground>
)
}

export default Medicine;