import { StyleSheet } from 'react-native'


const SignupStyles = StyleSheet.create({
  container:{
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'lightgreen',
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
      height: 40,
      marginVertical: 10,
      padding: 20,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
      marginRight: 10,
      borderRadius: 5,
      
    },
    inputnames:{
      height: 40,
      width: '40vw',
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
        fontSize: 10,
        marginRight: 95,
        fontWeight:500,
    },
    containerTitel:{

    },
    titel:{
      textAlign: 'left',
      paddingBottom: 10,
      color: 'white',
      fontWeight: 700,
      fontSize: 30,
    },
    button:{
        width: '90%',
      backgroundColor: 'limegreen', //#2980b9 - blauw
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
  });

  export default SignupStyles;