import { StyleSheet } from 'react-native'

const NotificationsStyles = StyleSheet.create({
    container:{
        //flex:1,
        paddingLeft: 20,
        paddingRight: 20,
        //justifyContent: 'center',
        paddingTop: 100
    },
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    input:{
        height: 40,
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
    button:{
        width: '90%',
        backgroundColor: '#388C77',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    
    },
    textButton:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 20
    },
});
export default NotificationsStyles;