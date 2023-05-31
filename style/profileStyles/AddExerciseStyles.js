import { StyleSheet, } from 'react-native'

const  AddExerciseStyles = StyleSheet.create({
    container:{
        paddingLeft: 20,
        paddingRight: 20,
        //justifyContent: 'center',
        paddingTop: 20,
        marginBottom: 50  
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 5
    },
    input:{
        height: 60,
        padding: 10,
        borderWidth: 2,
        borderColor: '#388C77',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20
    },
    description:{
        height: 200,
        padding: 20,
        borderWidth: 2,
        borderColor: '#388C77',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20

    },
    doubleText:{
        flexDirection: 'row',
    },
    textReward:{
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5,
        marginLeft: '35%'
    },
    
    doubleInput:{
        flexDirection: 'row',
    },
    pickerContainer:{
        width: '100%',
        marginRight: 5,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#388C77',
        height: '20%',
        borderRadius: 5,
        marginBottom: 10
    },
    picker: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    inputReward:{
        width: '50%',
        height: 60,
        padding: 20,
        borderWidth: 2,
        borderColor: '#388C77',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20
    },
   
    browse:{
        height: 30,
        width: 'auto',
        marginLeft: 5,
    },
    button:{
        width: '90%',
        backgroundColor: '#388C77',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10, 
    },
    textButton:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 20
    },
    errorMessageText:{
        color: 'red', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,      
        marginTop: 10,
        marginBottom: 5,
    }
});
export default AddExerciseStyles;