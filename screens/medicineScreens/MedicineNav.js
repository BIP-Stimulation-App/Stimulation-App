import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import medicine from './Medicine';
import addMedicine from './AddMedicine';


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
                headerBackTitleVisible: false
            }}/>
        </Stack.Navigator>
    )

}
export default MedicineNav;