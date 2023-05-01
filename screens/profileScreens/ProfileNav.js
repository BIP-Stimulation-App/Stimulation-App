import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import profile from './Profile';
import personalSettings from './PersonalSettings';
import notifications from './Notifications';
import bluetooth from './BluetoothConnection';


const Stack = createStackNavigator();

const ProfileNav = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name='profile' component={profile} options={{
                headerTitle: 'Profile',
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
                
            }}/>
            <Stack.Screen name='personalSettings' component={personalSettings} options={{
                headerTitle: 'Settings',
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }} />
            <Stack.Screen name='notifications' component={notifications} options={{
                headerTitle: 'Notifications',
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                 headerTransparent: true
            }}/>
            <Stack.Screen name='bluetooth' component={bluetooth} options={{
                headerTitle: 'Bluetooth',
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                 headerTransparent: true
            }}/>

        </Stack.Navigator>   
    )

}
export default ProfileNav;