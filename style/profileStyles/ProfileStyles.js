import { StyleSheet } from 'react-native'

const ProfileStyles = StyleSheet.create({ 
container:{
    flex: 1,
    paddingLeft:20,
    paddingRight: 20,
    justifyContent: 'center',
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
    marginTop:30
},
logOff:{
    textDecorationLine: 'underline',
    fontSize: 20,
    textAlign: 'center'
}

})
export default ProfileStyles;