import { StyleSheet } from 'react-native'

const BluetoothStyles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        paddingTop: 50
    },
    button:{
        width: '90%',
        backgroundColor: '#388C77',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
    
    },
    textButton:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 20
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    scroll:{
        width: 'auto',
        height: 150,
        borderWidth: 1,
        borderColor: '#388C77'
    },
    deviceName:{
        marginLeft: 20,
        paddingBottom: 20
    }
});
export default BluetoothStyles;