import * as SecureStore from 'expo-secure-store';

// Save user's login credentials
export const saveLoginCredentials = async (username, password) => {
  try {
    await SecureStore.setItemAsync('username', username);
    await SecureStore.setItemAsync('password', password);
  } catch (error) {
    console.log('Error saving login credentials: ', error);
  }
};

// Retrieve user's login credentials
export const getLoginCredentials = async () => {
  try {
    const username = await SecureStore.getItemAsync('username');
    const password = await SecureStore.getItemAsync('password');
    return { username, password };
  } catch (error) {
    console.log('Error retrieving login credentials: ', error);
  }
};

// Save user's API token
export const saveApiToken = async (token) => {
  try {
    await SecureStore.setItemAsync('apiToken', token);
  } catch (error) {
    console.log('Error saving API token: ', error);
  }
};

// Retrieve user's API token
export const getApiToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('apiToken');
    return token;
  } catch (error) {
    console.log('Error retrieving API token: ', error);
  }
};

export const saveNotificationSettings = async(notifications) =>{
  try {
    await SecureStore.setItemAsync('notifications', JSON.stringify(notifications));
  } catch (error) {
    console.log('Error saving notifications: ', error);
  }
}
export const getNotificationSettings = async () => {
  try {
    const token = await SecureStore.getItemAsync('notifications');
    return JSON.parse(token);
  } catch (error) {
    console.log('Error retrieving API token: ', error);
  }
};