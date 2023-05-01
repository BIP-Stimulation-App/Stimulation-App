import { StyleSheet } from 'react-native'

const ProfileStyles = StyleSheet.create({ 
container:{
    padding:20,
    flex: 1,
    justifyContent: 'center'
},
container2:{
    justifyContent: 'center',
    marginTop: 200
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
logOffContainer:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
},
logOff:{
    textDecorationLine: 'underline',
    fontSize: 15,
}

})
export default ProfileStyles;