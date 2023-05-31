import React, {  } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import health from './Health';

const HealthNav = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name='health' component={health} options={{
                headerTitle: "My Health",
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }}/>
            
            
        </Stack.Navigator>
    )

}

export default HealthNav;