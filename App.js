
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
import RestorePassword from './auth/RestorePassword'


// Drawer menu styling - later nog in aparte styling folder zetten
const Drawer = createDrawerNavigator();
const DrawerStyles = {
/*  activeTintColor: '#fff',
  inactiveTintColor: '#c6c6c6',
  activeBackgroundColor: '#2196f3',
  itemStyle: { marginVertical: 5 },
  labelStyle: { fontSize: 18, fontWeight: 'bold' },
  drawerStyle: { backgroundColor: '#3f51b5' }*/
}




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
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
