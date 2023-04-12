import { StyleSheet } from 'react-native'

const restorePasswordStyles = StyleSheet.create({
    container:{
        flex: 1,
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
      backgroundColor: 'limegreen', //#2980b9 - blauw
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
    title:{
        textAlign: 'left',
         paddingBottom: 40,
         color: 'white',
         fontWeight: 700,
         fontSize: 30,
    },
    Text:{
        fontSize: 15,
        fontWeight: 500,
        marginLeft: 10,
        marginBottom: 5,
        
    }

})

  export default restorePasswordStyles;