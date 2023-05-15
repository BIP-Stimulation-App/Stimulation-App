import { StyleSheet } from 'react-native'

const ExerciseStyles = StyleSheet.create({
    container:{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 100,
        
    },
    photo:{
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    title:{
        fontSize: 30,
        fontWeight: 700,
        alignSelf: 'center',
        paddingBottom: 10
    },
    timeText:{
        textAlign:'right'
    },
    descriptionContainer:{
        padding: 20,
        borderWidth: 2,
        borderColor: '#75BC9C',
        margin: 10,
        borderRadius: 20,
        height: 'auto',
        backgroundColor: '#75BC9C'
    },
    descriptionText:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    rewardText:{
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5
    },
    coin:{
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 2
    },
    button:{
        width: '90%',
        backgroundColor: '#388C77',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
    
    },
    textButton:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 20
    },
    timeLeft:{
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20,
        color: 'red' 
    },
    completedText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#00bfff'
      }

});
export default ExerciseStyles;