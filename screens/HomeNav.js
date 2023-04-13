import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Health from './Health';
import Medicine from './Medicine';
import Move from './Move';
import LeaderBoard from './LeaderBoard';
import Profile from './Profile';

const Stack = createStackNavigator();


const HomeNav = () => {
   

    return (
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name="Home" component={Home} options={{
          headerLeft: null,
        }}/>
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="Medicine" component={Medicine} />
        <Stack.Screen name="Move" component={Move} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    )
}


export default HomeNav;