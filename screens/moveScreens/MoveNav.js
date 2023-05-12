import React, {  } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import move from './Move';
import exercise from './Exercise';

const MoveNav = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name='move' component={move} options={{
                headerTitle: "Let's Move!",
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }}/>
              <Stack.Screen name='exercise' component={exercise} options={{
                headerTitle: "Exercise", 
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }}/>
            
        </Stack.Navigator>
    )

}

export default MoveNav;