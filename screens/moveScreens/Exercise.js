import React, {  } from 'react';
import { View, Text, ImageBackground } from 'react-native';


const Exercise = () => {

    return(
        <ImageBackground source={require('../../assets/backgroundlogin.png')} style={{ flex: 1 }}>

        <View style={{flex:1, paddingTop: 100}}>
            <Text>MY HEALTH</Text>
        </View>

        </ImageBackground>
    )

}

export default Exercise;