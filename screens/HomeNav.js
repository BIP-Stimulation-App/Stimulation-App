import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../style/HomeStyles'

import Home from './Home';
import Health from './Health';
import Medicine from './Medicine';
import Move from './Move';
import LeaderBoard from './LeaderBoard';
import ProfileNav from './profileScreens/ProfileNav';

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
        <Stack.Screen name="Medicine" component={Medicine} />
        <Stack.Screen name="Move" component={Move} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="ProfileNav" component={ProfileNav} />
      </Stack.Navigator>
    )
}


export default HomeNav;