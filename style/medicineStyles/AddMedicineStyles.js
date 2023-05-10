import { StyleSheet } from 'react-native'

const AddMedicineStyles = StyleSheet.create({
container:{
    paddingLeft: 20,
    paddingRight: 20,
    //justifyContent: 'center',
    paddingTop: 100
},
picture:{
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 5,
},
text:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5
},
inputMedicineName:{
    height: 40,
    padding: 20,
    borderWidth: 2,
    borderColor: '#388C77',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20
},
picker:{
    height:'auto',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#388C77',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
},
saveButton:{
    width: '90%',
    backgroundColor: '#388C77', 
    padding: 20,
    borderRadius: 90,
    alignItems: 'center',
    //marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
},
saveText:{
    color: '#ffffff',
        fontWeight: '700',
        fontSize: 20
}
})

export default AddMedicineStyles;