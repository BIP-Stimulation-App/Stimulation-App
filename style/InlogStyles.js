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
    button: {
      width: '90%',
      backgroundColor: 'limegreen', //#2980b9 - blauw
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
    }
  })

  export default InlogStyles;