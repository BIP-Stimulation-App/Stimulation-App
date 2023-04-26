import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../style/HomeStyles'

import Home from './Home';
import Health from './Health';
import MedicineNav from './medicineScreens/MedicineNav';
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
          headerLeft: null, headerShown: false
        }}/>
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="MedicineNav" component={MedicineNav} options={{headerShown: false}} />
        <Stack.Screen name="Move" component={Move} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    )
}




export default HomeNav;