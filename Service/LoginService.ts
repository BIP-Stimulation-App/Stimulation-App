import { acc } from "react-native-reanimated";
import Credential from "../auth/Models/Credentials"
import { NewAccount } from "../auth/Models/NewAccount";

export class LoginService {
  static apiLoginlink:string = "http://stimulationapp.com:5000/api/Login"

  static async Login(username:string, password:string):Promise<string>{
    if(username === "" || username === " "){
        return "Username can not be empty.";
    }
    if(password === ""){
      return "Password can not be empty.";
    }
  
    try {
      const response = await fetch(this.apiLoginlink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      if (response.ok) {
        Credential.username = username;
        Credential.password = password;
        const token = await response.text(); // Extract the response body as text
        Credential.token = token;
        return '';
      } else {
        console.log(response.status + ' ' + response.statusText);
        return response.statusText;
      }
    } catch (error) {
      console.log(error);
      return 'An error happened, please try again';
    }
  }

  static async ValidateEmail(email:string):Promise<string>{
    if(!email.includes('@') ||!email.includes('.')){
      return "Email is invalid";
    }
    try{
      const response = await fetch(this.apiLoginlink+"/Reset",{
        method: 'POST',
          headers: {
              'email': email
            },
      })
      if (response.ok) {
        return "";  
      }
      return response.statusText;
    }
    catch(e){
      console.log("error: " + e);
      return e
    }
  }

  static async ValidateCode(code:string):Promise<string>{
    if(code.length != 5){
        return "Token is invalid!";
    }      
    try{
      const response = await fetch(this.apiLoginlink+"/Reset",{
        method: 'POST',
          headers: {
              'resetToken': code
            },
      })
      if (response.ok) {
        return "";  
      }
      return response.statusText;
    }
    catch(e){
      console.log("error: " + e);
      return e
    }
  }
  static async UpdatePassword(newPassword: string, repeatPassword:string, email:string):Promise<string>{
    if(newPassword != repeatPassword){
      return "Passwords do not match";
    }
    else if(newPassword.length<8 ){
      return "Password must be at least 8 characters long";
    }

    try{
      const response = await fetch(this.apiLoginlink+"/ChangePassword/"+ email,{
        method: 'POST',
          headers: {
              'password': newPassword,
              'Authorization': "Bearer " + Credential.token
            },
      })
      if (response.ok) {
        return "";  
      }
      return response.statusText;
    }
    catch(e){
      console.log("error: " + e);
      return e
    }
  }

  static async AddLogin(object:Record<string,any>):Promise<string>{
    if(object.usernameInUse){
      return "Username is already in use.";
    }
    if(object.username === ""){
      return "Username can not be empty.";
    }
    if(object.password != object.confirmPassword){
      return "Passwords do not match.";
    }
    if(object.password.length<8){
      return "Password must be at least 8 characters long";
    }
    if(!object.email.includes('@') || !object.email.includes('.')){
      return "Email is invalid.";
    }
    if(object.firstname === ""){
      return "First name can't be empty";
    }
    if(object.lastname === ""){
      return "Last name can't be empty";
    }
    // Make API call to sign up user here
    let account = new NewAccount(object.username,object.firstname,object.lastname,object.email,object.password);


    try {
      const response = await fetch(this.apiLoginlink + "/Add", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
      });
      if (response.ok) {        
        return '';
      } else {
        console.log(response.status + ' ' + response.statusText);
        return response.statusText;
      }
    } catch (error) {
      console.log(error);
      return 'An error happened, please try again';
    }
  }

}