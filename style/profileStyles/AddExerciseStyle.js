import { StyleSheet } from 'react-native'

const PersonalSettingsStyles = StyleSheet.create({
    container:{
        //flex:1,
        paddingLeft: 20,
        paddingRight: 20,
        //justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 20
    },
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    input:{
        height: 30,
        padding: 10,
        borderWidth: 2,
        borderColor: '#388C77',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20
    },
    description:{
        height: 60,
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
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5,
        marginLeft: '35%'
    },
    
    doubleInput:{
        flexDirection: 'row',
    },
    difficultyPicker:{
        width: '50%',
        marginRight: 5,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#388C77',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    inputReward:{
        width: '50%',
        height: 30,
        padding: 20,
        borderWidth: 2,
        borderColor: '#388C77',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20
    },
    
    picker:{
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#388C77',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
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
export default PersonalSettingsStyles;