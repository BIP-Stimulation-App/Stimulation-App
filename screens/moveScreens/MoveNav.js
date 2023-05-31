import React, {  } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import move from './Move';
import exercisePage from './ExercisePage';
import progress from './Progress';

const MoveNav = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name='move' component={move} options={{
                headerTitle: "Let's Move!",
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }}/>
            <Stack.Screen name='exercisePage' component={exercisePage} options={{
                headerTitle: "Exercise", 
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }}/>
            <Stack.Screen name='progress' component={progress} options={{
                headerTitle: "Progress", 
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                headerTransparent: true
            }}/>
            
        </Stack.Navigator>
    )

}

export default MoveNav;