import { StyleSheet } from 'react-native'

const MedicineStyles = StyleSheet.create({
 container:{
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 100,
  height: '100%'
 },
 plus:{
  fontSize: 40,
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
 },
 addButton:{
  backgroundColor: '#388C77',
  borderRadius: 50,
  width: 60,
  height: 60,
  alignSelf: 'center',
 },
 buttonView:{
  height: '15%'
 }, 
 listContainer:{
  borderColor: '#388C77',
  borderWidth: 1,
  borderRadius: 25,
  height: '70%',
  padding: 5
 },
 listComponent:{
  borderRadius: 5,
  width: 'auto',
  backgroundColor: '#46A289',
  padding: 5,
  marginTop: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
 },
 titelContainer:{
  flex: 1,
  width: '50%',
 // paddingRight: 10
 },
 titel:{
  fontSize: 15,
  fontWeight: 'bold',
  color: 'white',
  textAlign:'left',
  
 },
 textContainer:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '50%',
 },
 text:{
  color: 'white',
  paddingLeft: 5
 },
 noListMessage:{
  textAlign: 'center',
 },
 messageContainer:{
  marginTop: 20
 },
delete:{
  width: 30,
  height: 30,
  backgroundColor: 'transparent',
  color: 'black',
  textAlign: 'right',
  fontWeight: 'bold',
  paddingTop: 5,
},
deleteButton:{
  borderRadius: 50,
  width: 30,
  height: 30,
},
explanation:{
  fontSize: 10,
  textAlign: 'center',
  marginTop: 10
}

});
  export default MedicineStyles