import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BleManager } from "react-native-ble-plx";

import styles from "../../style/profileStyles/BluetoothStyles";

const BluetoothConnection = () => {
  const [device, setDevice] = useState("none");
  const [devices, setDevices] = useState([]);
  const [bleManager, setBleManager] = useState(null);
  var started = false;

  useEffect(() => {
    console.log("This still works");
    try {
      const manager = new BleManager();
      if (manager != null) {
        setBleManager(manager);
        console.log("hopefully this too!");
        bleManager.startDeviceScan(null, null, (err, device) => {
          if (err) console.log(err);
          else console.log(device);
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const checkDupe = (newDevice) =>
    devices.findIndex((existingDevice) => existingDevice.id === newDevice.id);

  const startSearch = () => {
    bleManager.startDeviceScan(null, null, (error, data) => {
      if (error) console.log(error);
      if (data /*&& data.name?.includes("StimWatch")*/) {
        setDevices((prevState) =>
          !checkDupe(data) ? [...prevState, data] : prevState
        );
      }
    });
  };

  const updateUserData = () => {
    // Add logic to update the user data in the database
  };

  const handleConnect = () => {
    bleManager.startDeviceScan();
    setDevice("testNameDevice"); // Replace with actual device name
    updateUserData(username, { device });
    // Add logic to update the user data in the database
  };

  const handleDisconnect = () => {
    setDevice("none");
    updateUserData(username, { device });
    // Add logic to update the user data in the database
  };

  return (
    <ImageBackground
      source={require("../../assets/background3.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Already connected medicine bracelet:</Text>
        <Text style={styles.deviceName}>{device}</Text>

        {device === "none" ? (
          <View>
            <Text style={styles.text}>Start searching: </Text>
            <ScrollView style={styles.scroll}>
              {devices.map((data, index) => (
                <Text key={index}>{data.name}</Text>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleConnect}>
              <Text style={styles.textButton}>CONNECT</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.button} onPress={handleDisconnect}>
              <Text style={styles.textButton}>DISCONNECT</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default BluetoothConnection;
