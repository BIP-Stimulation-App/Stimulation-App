import { ImageBackground, StyleSheet } from 'react-native'

const MoveStyles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight: 20,
        paddingBottom: 60,
        paddingTop: 100,
        flex: 1
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    buttonsContainer2:{
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    //Buttons
        strength:{
            heigth: 100,
            width: 'auto',
            backgroundColor: '#F8AC59',
            marginBottom: 10,
            borderRadius: 5,
            marginRight: 2,
        },
        cardio:{
            heigth: 100,
            width: 'auto',
            backgroundColor: '#5CC6C6',
            marginBottom: 10,
            borderRadius: 5,
            marginRight: 2
        },
        yoga:{
            heigth: 100,
            width: 'auto',
            backgroundColor: '#ED5565',
            marginBottom: 10,
            borderRadius: 5
        },
        coördination:{
            heigth: 100,
            width: 'auto',
            backgroundColor: '#ACF200',
            marginBottom: 10,
            borderRadius: 5
        },
        walking:{
            heigth: 100,
            width: 'auto',
            backgroundColor: '#9C9CC9',
            marginBottom: 10,
            borderRadius: 5
        },
    text:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
    listContainer:{
        //borderColor: '#388C77',
        //borderWidth: 1,
        //borderRadius: 20,
       padding: 5,
       height: '70%'
    },
    listComponent:{
        borderRadius: 5,
        width: 'auto',
        backgroundColor: '#46A289',
        padding: 5,
        marginTop: 10,
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 20,
        fontWeight: 500,
        color: 'white',
        textAlign:'left',
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textExercise:{
        color: 'white',
        fontSize: 15,
        paddingRight: 2
    },
    coin:{
        width: 20,
        height: 20,
        borderRadius: 10
    },
    workout:{
        width: 100,
        height: 100,
        
    },

});
export default MoveStyles;