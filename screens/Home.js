import React, { Component, useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../style/HomeStyles'



class Home extends Component {
 
  state={
    firstName: 'Bob',
  }

  /*useEffect(() => {
      axios.get('https://my-api.com/user/1') //nog aan te passen
        .then(response => {
          setFirstName(response.data.name);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);*/

render(){
  const {firstName} = this.state;
  return(
    <ImageBackground source={require('../pictures/background1.png')} style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.hello}>Hello {firstName}!</Text>

      <TouchableOpacity style={styles.widebutton} onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Health'})}>
           <Text style={styles.textHealth}>My Health</Text>
      </TouchableOpacity>
      <br></br>
      <View style={styles.containerSmall}>

        <TouchableOpacity style={styles.smallbutton1} onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Medicine'})}>
            <Text style={styles.text}>Medicine</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallbutton2} onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Move'})}>
           <Text style={styles.text}>Let's Move!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSmall}>

      <TouchableOpacity style={styles.smallbutton3} onPress={() => this.props.navigation.navigate('HomeNav',{screen:'LeaderBoard'})}>
           <Text style={styles.text}>Compete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallbutton4} onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Profile'})}>
           <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  )
}
  
}


export default Home;