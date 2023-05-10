import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import login from './LogIn';
import signup from './SignUp';
import resetPassword from './ForgetPasswordForm';

const Stack = createStackNavigator();


const AuthNav = () => {
   

    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'lightgreen', borderBottomColor: 'lightgreen'},
        headerTintColor: 'white',
        headerBackTitleVisible: 'true',
        headerBackTitleStyle: { fontWeight: 'bold'}
      }}>
        <Stack.Screen name="login" component={login} options={{headerShown: false}}/>
        <Stack.Screen name="signup" component={signup} options={{
          headerTitle: 'Who are you?', 
          headerTransparent: true, 
          headerTitleStyle: {fontSize: 24, fontWeight:'bold'},
          headerTitleAlign: 'center', 
}} />
        <Stack.Screen name="resetPassword" component={resetPassword} options={{headerTitle: 'Reset Password', 
        headerTransparent: true, 
        headerTitleStyle: {fontSize: 24, fontWeight:'bold'},
        headerTitleAlign: 'center', 
      }} />
      </Stack.Navigator>
    )
}


export default AuthNav;