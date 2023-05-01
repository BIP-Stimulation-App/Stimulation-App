import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import profile from './Profile';


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
        </Stack.Navigator>   
    )

}
export default ProfileNav;