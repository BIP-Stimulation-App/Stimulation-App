import { StyleSheet } from 'react-native'

const HealthStyles = StyleSheet.create({
    container:{
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        flex:1,
        paddingBottom: 20
    },

    //WALK
    containerWalk:{
        flexDirection:'row',
        alignItems:'center',
    },
    circleWalk:{
        borderWidth: 1,
        borderColor: '#67C288',
        backgroundColor: '#67C288',
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center'
    },
    stepsP:{
        fontWeight: 700,
        fontSize: 40,
        alignSelf:'center',
        color:'white'
    },
    walk:{
        fontSize: 20,
        fontWeight: 400,
        //paddingLeft: 50
        alignSelf:'center',

    },
    steps:{
        textAlign:'right', 
        paddingRight: 20, 
        fontSize: 20,
        color:'white'
    },
    imageFootprints:{
        height: 100,
        width: 100,
        position:'absolute',
        right: 0,
    },

    //BPM
    containerBPM:{
        flexDirection: 'row',
        alignItems:'center',

    },
    circleBPM:{
        borderWidth: 1,
        borderColor: '#CB5382',
        backgroundColor: '#CB5382',
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center'
    },
    bpmP:{
        fontWeight: 700,
        fontSize: 40,
        alignSelf:'center',
        color:'white'
    },
    bpm:{
        textAlign:'right', 
        paddingRight: 20, 
        fontSize: 20,
        color:'white'
    },
    pulse:{
        fontSize: 20,
        fontWeight: 400,
        alignSelf:'center',
        marginTop: 10
    },
    imagePulse:{
        width:100,
        height: 100,
    },


    //SATURATION
    containerSaturation:{
        flexDirection:'row',
        alignItems:'center',
    },
    saturation:{
        fontSize: 20,
        fontWeight: 400,
        //paddingLeft: 20,
        alignSelf:'center',
        marginTop: 10
    },
    circleSaturation:{
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        borderRadius: 100
    },
    saturationP:{
        fontWeight: 700,
        fontSize: 40,
        alignSelf:'center',
        color: 'white'
    },
    imageAir:{
        width: 100,
        height: 100,
        position:'absolute',
        right: 0,
    },


    //BODY TEMPERATURE
    containerTEMP:{
        flexDirection: 'row',
        alignItems:'center',
    },
    temperature:{
        fontSize: 20,
        fontWeight: 400,
        alignSelf:'flex-end',
        //paddingRight: 10
        alignSelf:'center',
        marginTop: 10

    },
    circleTemp:{
        alignSelf:'flex-end',
        borderWidth: 1,
        borderColor: 'orange',
        backgroundColor: 'orange',
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
    },
    temperatureP:{
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 40,
        color:'white'
    },
    imageTemp:{
        width:100,
        height: 100,
    },
});

export default HealthStyles;