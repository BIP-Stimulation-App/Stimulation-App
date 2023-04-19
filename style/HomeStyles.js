import { StyleSheet } from 'react-native'
import { block } from 'react-native-reanimated';

const HomeStyles = StyleSheet.create({
    container:{
        padding: 20,
        flex:1,
        
    },
    hello:{
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 40,
        display: 'block',
        marginTop: 20,
    },
    widebutton:{
        width:'auto',
        borderColor: 'black', 
        backgroundColor: '#CB5382',
        //margin: 5,
        padding: 40,
        borderRadius: 40,
        
    },
    containerSmall:{
        flexDirection: 'row',
        width: '80%',
        height: '20%',
        marginBottom: 10,
        flex: 1,
    },
    smallbutton1:{
       // borderColor: 'black', 
        color: 'white',
        backgroundColor: '#46BC7E',
        width: '60%',
        height: '90%',
        borderRadius: 20,
        padding: 10,
        marginRight: 5,

    },
    smallbutton2:{
      //  borderColor: 'black', 
        color: 'white',
        backgroundColor: '#5CC6C6',
        width: '60%',
        borderRadius: 20,
        padding: 10,
        height: '90%',
        marginLeft:5,

    },
    smallbutton3:{
      //  borderColor: 'black', 
        color: 'white',
        backgroundColor: '#F9E076',
        width:'60%',
        borderRadius: 20,
        padding: 10,
        marginRight: 5,
        height:'90%',

    },
    smallbutton4:{
     //   borderColor: 'black', 
        color: 'white',
        backgroundColor: '#BFBFBF',
        width: '60%',
        borderRadius: 20,
        padding: 10,
        marginLeft: 5,
        height:'90%',

    },
    textHealth:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
     
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingTop: '30%'
    },


})
export default HomeStyles;