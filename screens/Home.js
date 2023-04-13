import React, { Component, useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';


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
    <View>
      <Text>Hello {firstName}!</Text>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Health'})}>
           <Text>My Health</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Medicine'})}>
           <Text>Medicine</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Move'})}>
           <Text>Let's Move!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNav',{screen:'LeaderBoard'})}>
           <Text>LeaderBoard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNav',{screen:'Profile'})}>
           <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
  
}


export default Home;