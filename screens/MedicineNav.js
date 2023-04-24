import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import medicine from './Medicine';
import addMedicine from '../screens/AddMedicine';


const Stack = createStackNavigator();

const MedicineNav = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name='medicine' component={medicine} options={{
                headerTitle: 'Medicine',
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }}/>
            <Stack.Screen name='addMed' component={addMedicine} options={{
                headerTitle: 'Add Medicine',
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true,
                headerStyle: {marginTop: 5}
            }}/>
        </Stack.Navigator>
    )

}
export default MedicineNav;