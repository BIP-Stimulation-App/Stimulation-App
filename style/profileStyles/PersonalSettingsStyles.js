import { StyleSheet } from 'react-native'

const PersonalSettingsStyles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft: 20,
        paddingRight: 20,
        //justifyContent: 'center',
        paddingTop: 40
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    input:{
        height: 60,
        padding: 20,
        borderWidth: 2,
        borderColor: '#388C77',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20
    },
    switch:{
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 20
    },
    switchText:{
        marginLeft: 10
    },
    button:{
        width: '90%',
        backgroundColor: '#388C77',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30
    
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
