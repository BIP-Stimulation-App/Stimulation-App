
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import AuthNav from './auth/AuthNav';
import HomeNav from './screens/HomeNav';
import DataContextProvider  from './DataContext';
// Main navigation for entire app

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AuthNav" component={AuthNav} options={{ headerShown: false}}/>
          <Stack.Screen name="HomeNav" component={HomeNav} options={{ headerShown: false}}/> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
