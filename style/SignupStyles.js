import { StyleSheet } from 'react-native'


const SignupStyles = StyleSheet.create({
  container:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flex: 1,
    justifyContent:'center',
  },
    containerNames:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    containerLabels:{
        flexDirection: 'row',
    },
    input:{
      height: 60,
      marginVertical: 10,
      padding: 20,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
      marginRight: 10,
      borderRadius: 5,
      
    },
    inputnames:{
      height: 60,
      width: '59%',
      marginVertical: 10,
      padding: 20,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
      marginRight: 10,
      borderRadius: 5,
    },
    label:{
        textAlign: 'left',
        fontSize: 15,
        marginRight: 95,
        fontWeight:500,
    },
   
    button:{
        width: '90%',
      backgroundColor: '#388C77',
      padding: 20,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    buttonText: {
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

  export default SignupStyles;