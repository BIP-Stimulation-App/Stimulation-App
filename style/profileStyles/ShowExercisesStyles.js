import { StyleSheet } from 'react-native'

const ShowExercisesStyles = StyleSheet.create({
    container:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        marginTop: 20,
        alignContent: 'center',
        flex: 1
    },
    listContainer:{
        borderColor: '#388C77',
        borderWidth: 1,
        borderRadius: 20,
        height: '90%',
        padding: 5,
        marginTop: 20
    },
    
    listComponent:{
        borderRadius: 5,
        width: 'auto',
        backgroundColor: '#46A289',
        padding: 5,
        marginTop: 10,
      
    },
    noListMessage:{
        textAlign: 'center',
    },
    messageContainer:{
        marginTop: 20
    },
    titel:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'left',
    },
    text:{
        color: 'white',
        paddingLeft: 20,
        paddingTop: 2
    },
    delete:{
        color: 'black',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    deleteButton:{
        width: 'auto',
        paddingTop: 5,
        alignSelf: 'flex-end'
      },

});
export default ShowExercisesStyles