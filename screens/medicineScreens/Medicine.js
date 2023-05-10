import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image, ScrollView} from 'react-native';
import styles from '../../style/medicineStyles/MedicineStyles';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import { MedicationService } from '../../Service/MedicationService';
import Medication from '../../Models/Medication';

const Medicine = () => {
  const navigation = useNavigation();
  const [medications,setMedications] = useState([]);

  useEffect(()=>{
      navigation.addListener('focus', () => {
        fetchMedicines();     
    }) 
  })

  const fetchMedicines = async () => {
      //insert logic to get the list from the database    
    MedicationService.getMedications()
    .then((result) => {
      setMedications(result)
    });
  };

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
      const index = id;
      if(MedicationService.removeMedications(index)){
        MedicationService.getMedications().then((result) => setMedications(result));
        navigation.navigate("MedicineNav", { screen: "medicine" });
      }      
  }

  const convertFrequency = (frequency) =>{
    if(frequency == 0){
      return "Only once"
    }
    if(frequency == 1){
      return "Daily"
    }
    return "Weekly"
  }
  const convertTime = (datetime) =>{
    //get part after T T00:00:00
    var time = datetime.split("T")[1];
    console.log(time);
    return time.substring(0,5);
  }

  const renderItem = ({item}) => (
      <View style={styles.listComponent}>
          <View style= {styles.titleContainer}>
              <Text style={styles.titel}>{item.name}</Text>
          </View>
            
          <View style={styles.textContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.text}>{convertTime(item.time)}</Text>
              <Text style={styles.text}>{convertFrequency(item.frequency)}</Text>
    
          </View>
          <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                  <Text style={styles.delete}>DELETE</Text>
          </TouchableOpacity>
        
      </View>
  );

  
  return(
      <ImageBackground source={require('../../assets/background2.png')} style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.buttonView}>
          <TouchableOpacity style={styles.addButton} onPress={handleNavigate}>
              <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
          <FlatList 
              data={medications}
              renderItem={renderItem} 
              ListEmptyComponent={renderEmpty}
              keyExtractor={(item) => item.id}
              style={{height: 200}}
              showsVerticalScrollIndicator={false}
          />
      </View>
      <Text style={styles.explanation}>By adding medicine, a notification on your phone will appear on the selected time.</Text>
      </View>    
      </ImageBackground>
  )
}

export default Medicine;