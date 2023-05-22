import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from '../../style/healthStyles/HealthStyles'

const Health = () => {
    const navigation = useNavigation();

    const [parameters,setParameters] = useState(
        { // to be deleted
            id: 1,
            bpm: 70,
            saturation: 100,
            temperature:37,
            steps: 10000
        },
    );

    useEffect(()=>{
        navigation.addListener('focus', () => {
          fetchParameters();     
      }) 
    })
    const fetchParameters = async () => {
        //insert logic to get the list from the database    
      /*HealthService.getParameters()
      .then((result) => {
        setParameters(result)
      });*/
    };

    return(
        <ImageBackground source={require('../../assets/background1.png')} style={{ flex: 1 }}>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.walk}>WALK</Text>
                <View style={styles.containerWalk}>
                    <View style={styles.circleWalk}>
                        <Text style={styles.stepsP}>{parameters.steps}</Text>
                        <Text style={styles.steps}>steps</Text>
                    </View>
                    <Image source={require("../../assets/footsteps.png")} style={styles.imageFootprints}></Image>
                </View>

                <View>
                    <Text style={styles.pulse}>PULSE</Text>
                    <View style={styles.containerBPM}>
                        <View style={{width: '55%'}}>
                            <Image source={require("../../assets/electrocardiogram.png")} style={styles.imagePulse}></Image>
                        </View>
                        <View style={styles.circleBPM}>
                            <Text style={styles.bpmP}>{parameters.bpm}</Text>
                            <Text style={styles.bpm}>BPM</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.saturation}>SATURATION</Text>
                    <View styles={styles.containerSaturation}>
                        <View style={styles.circleSaturation}>
                            <Text style={styles.saturationP}>{parameters.saturation}%</Text>
                        </View>
                        <Image source={require("../../assets/air.png")} style={styles.imageAir}></Image>
                    </View>
                </View>

                <View>
                    <Text style={styles.temperature}>TEMPERATURE</Text>
                    <View style={styles.containerTEMP}>
                        <View style={{width: '55%'}}>
                            <Image source={require("../../assets/temperature.png")} style={styles.imageTemp}></Image>
                        </View>
                        <View style={styles.circleTemp}>
                            <Text style={styles.temperatureP}>{parameters.temperature} °C</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        </ImageBackground>
    )

}

export default Health;