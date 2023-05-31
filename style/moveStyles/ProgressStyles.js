import { StyleSheet } from 'react-native'

const ProgressStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
    },
    bubble:{
        width: 300,
        height: 300,
        borderRadius: 200,
        marginBottom: 20,
        padding: 10,
        justifyContent:'center',
        backgroundColor:'#46A289',

    },
    title:{
        alignSelf: 'center',
        color: 'white',
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputData:{
        alignSelf: 'center',
        fontWeight: 400,
        color: 'white',
        padding: 5,
        fontSize: 20
    },
    text:{
        alignSelf: 'center',
        //color: 'white',

    }
    
})

export default ProgressStyles;