import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import HealthNav from './healthScreens/HealthNav';
import MedicineNav from './medicineScreens/MedicineNav';
import MoveNav from './moveScreens/MoveNav'
import LeaderboardNav from './leaderboardScreens/LeaderboardNav';
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
        <Stack.Screen name="HealthNav" component={HealthNav} options={{headerShown: false}}/>
        <Stack.Screen name="MedicineNav" component={MedicineNav} options={{headerShown: false}} />
        <Stack.Screen name="MoveNav" component={MoveNav} options={{headerShown: false}}/>
        <Stack.Screen name="LeaderboardNav" component={LeaderboardNav} options={{headerShown: false}} />
        <Stack.Screen name="ProfileNav" component={ProfileNav} options={{headerShown: false}}/>
      </Stack.Navigator>
    )
}




export default HomeNav;