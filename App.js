
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // import the LoginScreen component
import SignUp from './screens/SignUp';
import ListScreen from './Bluetooth/BluetoothConnectionPage';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen} // add the LoginScreen as a screen
        />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        />
        {/* add other screens to your stack here */}
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default App();
