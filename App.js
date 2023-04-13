
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
import RestorePassword from './auth/RestorePassword';
import HomeNav from './screens/HomeNav';




// Main navigation for entire app

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ 
        headerStyle: { backgroundColor: 'lightgreen', borderBottomColor: 'lightgreen'},
        headerTintColor: 'white',
        headerBackTitleVisible: 'true',
        headerBackTitleStyle: { fontWeight: 'bold'}
        }}
    >
      <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle: ''}} />
      <Stack.Screen name="RestorePassword" component={RestorePassword} options={{headerTitle: ''}} />
      <Stack.Screen name="HomeNav" component={HomeNav} options={{ headerShown: false}}/>
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
