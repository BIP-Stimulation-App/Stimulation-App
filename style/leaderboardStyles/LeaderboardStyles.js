import { StyleSheet } from 'react-native'

const LeaderboardStyles = StyleSheet.create({
    container:{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 100,
        paddingBottom: 40
    },
    podium:{
        width: 300,
        height: 200,
        alignSelf: 'center',
        position: 'relative',
        marginTop: 30
        
    },
   
    winner:{
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 20,
        fontWeight: 400,
        top: 5
        
    },
    second:{
        alignSelf: 'flex-start',
        position:'absolute',
        left: 45,
        top: 40,
        fontSize: 20,
        fontWeight: 400
    },
    thirth:{
        alignSelf: 'flex-end',
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        fontSize: 20,
        fontWeight: 400,
        right: 52,
        top: 78
    },
    listContainer:{
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        height: '60%',
        marginTop: 40,
        padding: 10,
    },
    listComponent:{
        width: '100%',
        height: 40,
        position:'relative'
    },
    coin:{
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    amount:{
        position:'absolute',
        right: 25,
        fontSize: 15
    },
    username:{
        fontSize: 15
    }
});

export default LeaderboardStyles;