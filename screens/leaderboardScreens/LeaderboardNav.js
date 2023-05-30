import React, {  } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import leaderboard from './LeaderBoard';

const LeaderboardNav = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name='leaderboard' component={leaderboard} options={{
                headerTitle: "Leaderboard",
                headerTitleStyle: {fontSize: 24},
                headerTitleAlign: 'center', 
                //headerTransparent: true,
               
            }}/>
            
        </Stack.Navigator>
    )

}

export default LeaderboardNav;