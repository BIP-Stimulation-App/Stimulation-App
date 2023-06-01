import { StyleSheet } from 'react-native'

const restorePasswordStyles = StyleSheet.create({
    container:{
        paddingLeft: 20,
        paddingRight:20,
        paddingTop: 100,
        
    },
    input:{
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 25,
        marginBottom: 20,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button1:{
      width: '90%',
      backgroundColor: '#388C77', 
      padding: 20,
      borderRadius: 90,
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      
    },
    buttonTitle:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 20
    },
    
    Text:{
        fontSize: 15,
        fontWeight: 500,
        marginLeft: 10,
        marginBottom: 5,
        
    },
    errorMessageText:{
        color: 'red', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,      
        marginTop: 5,
        marginBottom: 10,
      }

})

  export default restorePasswordStyles;