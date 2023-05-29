import crypto from 'expo-crypto';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createContext, useEffect, useState } from 'react';
import { AppState } from 'react-native';

// Screens
import AuthNav from './auth/AuthNav';
import HomeNav from './screens/HomeNav';
// Main navigation for entire app

const Stack = createStackNavigator();
const AppContext = createContext();
const AppContextProvider = ({ children }) => {

  const [getData, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const encryptedData = await SecureStore.getItemAsync('myData');
      if (encryptedData) {
        const decryptedData = await decryptData(encryptedData);
        setData(decryptedData);
      }
    };

    loadData();
  }, []);

  // Save encrypted data to secure store when app is put into background or closed
  useEffect(() => {
    const saveData = async () => {
      const encryptedData = await encryptData(getData);
      await SecureStore.setItemAsync('myData', encryptedData);
    };

    const handleAppStateChange = (nextAppState) => {
      if (nextAppState.match(/inactive|background/)) {
        saveData();
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [getData]);

  const setEncryptedData = async (data) => {
    const key = await crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA256, 'mySecretKey');
    const encryptedData = await crypto.encryptAsync('AES-GCM', key, data);
    setData(encryptedData);
  };

  // Decrypt data before returning it
  const getDecryptedData = async () => {
    const key = await crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA256, 'mySecretKey');
    const decryptedData = await crypto.decryptAsync('AES-GCM', key, getData);
    return decryptedData;
  };

  return (
    <MyContext.Provider value={{ myData: getDecryptedData(), setMyData: setEncryptedData }}>
      {children}
    </MyContext.Provider>
  );
};
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

export { AppContext, AppContextProvider };
export default App;
