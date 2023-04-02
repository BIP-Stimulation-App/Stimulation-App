import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BluetoothConnector } from './BluetoothConnector';

const items = [];

const ListItem = ({ item, onPress }) => {
  const { name, connected } = item;
  
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.connected}>{connected ? 'Connected' : 'Disconnected'}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{connected ? 'Disconnect' : 'Connect'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ListScreen = () => {
  BluetoothConnector.scanDevices();
  items.push({})

  const [list, setList] = useState(items);
  
  const handleToggle = (id) => {
    const newList = list.map(item => {
      if (item.id === id) {
        return { ...item, connected: !item.connected };
      }
      return item;
    });
    setList(newList);
  };
  
  return (
    <View style={styles.container}>
      {list.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onPress={() => handleToggle(item.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:50
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  connected: {
    marginRight: 16,
  },
  button: {
    backgroundColor: '#063970',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ListScreen;