import { StyleSheet } from 'react-native'

const InlogStyles = StyleSheet.create({

    input: {
      width: '90%',
      backgroundColor: '#ffffff',
      padding: 25,
      marginBottom: 20,
      borderRadius: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    input2:{
      width: '90%',
      backgroundColor: '#ffffff',
      padding: 25,
      //marginBottom: 20,
      borderRadius: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    button: {
      width: '90%',
      backgroundColor: '#388C77',
      padding: 20,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    buttonText: {
      color: '#ffffff',
      fontWeight: '700',
      fontSize: 20
    },
    welcomeMessage: {
         textAlign: 'left',
         paddingBottom: 40,
         color: 'white',
         fontWeight: 700,
         fontSize: 40,
         paddingLeft:10,
         

    },
    createAccountView:{
        textAlign: 'center',
        marginTop: 30,
       
    },
    createAccountText:{
        textAlign: 'center',
        fontSize: 15,
        
    },
    signuplink:{
        textAlign: 'center',
        fontSize: 20,
        textDecorationLine: 'underline',
        paddingTop: 5,
    },
    passwordlink:{
      textAlign: 'center',
      fontSize: 13,
      textDecorationLine: 'underline',
      marginTop: 5,
      marginBottom: 10,
    },
    errorMessageText:{
      color: 'red', 
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,      
      marginTop: 10,
      marginBottom: 5,
    }
  })

  export default InlogStyles;