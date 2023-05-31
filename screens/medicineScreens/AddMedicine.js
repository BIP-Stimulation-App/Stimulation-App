import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import styles from "../../style/medicineStyles/AddMedicineStyles";
import { MedicationService } from "../../Service/MedicationService";
import Medication from "../../Models/Medication";

const AddMedicine = () => {
  const navigation = useNavigation();

  const [nameMedicine, setNameMedicine] = useState("");
  const [timestamp, setTimestamp] = useState("12:00 AM");
  const [frequency, setFrequency] = useState(0);
  const [day, setDay] = useState("");
  const [description, setDescription] = useState("");

  const handleTimeChange = (value) => {
    setTimestamp(value);
  };

  const handleFrequencyChange = (value) => {
    setFrequency(value);
  };

  const handleDayChange = (value) => {
    setDay(value);
  };

  const handleSave = () => {
    //insert logic to save to the database
    var time = new Date();
    if (timestamp.includes("AM")) {
      if (timestamp.startsWith("12")) {
        time.setHours(0, Number.parseInt(timestamp.substring(3, 5)));
      } else {
        time.setHours(
          Number.parseInt(timestamp.substring(0, 2)),
          Number.parseInt(timestamp.substring(3, 5))
        );
      }
    } else {
      if (timestamp.startsWith("12")) {
        time.setHours(12, Number.parseInt(timestamp.substring(3, 5)));
      } else {
        time.setHours(
          Number.parseInt(timestamp.substring(0, 2)) + 12,
          Number.parseInt(timestamp.substring(3, 5))
        );
      }
    }
    var med = new Medication(
      0,
      nameMedicine,
      description,
      time,
      Number.parseInt(frequency)
    );
    console.log(med.toString());
    MedicationService.addMedication(med).then((result) => {
      if (result === "") {
        navigation.navigate("MedicineNav", { screen: "medicine" });
        return;
      }
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background2.png")}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/medicine.png")}
            style={styles.picture}
          />
          <Text style={styles.text}>medicine name:</Text>
          <TextInput
            onChangeText={setNameMedicine}
            style={styles.inputMedicineName}
            placeholder="name"
            placeholderTextColor="grey"
          ></TextInput>

          <Text style={styles.text}>Description:</Text>
          <TextInput
            onChangeText={setDescription}
            style={styles.inputMedicineName}
            placeholder="amount of pills - example"
            placeholderTextColor="grey"
          ></TextInput>

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
            <Picker.Item label="12:00 PM" value="12:00 PM" />
            <Picker.Item label="12:30 PM" value="12:30 PM" />
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
            <Picker.Item label="only today" value="0" />
            <Picker.Item label="repeat every day" value="1" />
            <Picker.Item label="repeat once every week" value="2" />
          </Picker>

          {frequency === "weekly" && (
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
      </ScrollView>
    </ImageBackground>
  );
};

export default AddMedicine;
