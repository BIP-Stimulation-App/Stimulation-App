import { saveLoginCredentials, getLoginCredentials, saveApiToken, getApiToken, updatePassword } from '../DataContext';
import { NewAccount } from '../Models/NewAccount';
import { Settings } from "../AppSettings";
export class LoginService {
  static apiLoginlink:string = Settings.api +"/Login"

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
        
        saveLoginCredentials(username,password);
        await response.json().then(async data => {
          console.log(data);
           saveApiToken("Bearer " + data.token);
        });
        return '';
      }
      else if(response.status === 404){
        return "User not found";
      }
      else {
        console.log("Error "+ response.status + ' ' + response.body);
        return "Error "+ response.status + ' ' + response.body;
      }
    } catch (error) {
      console.log(error);
      return 'An error happened, please try again';
    }
  }

  static async ReLogIn(){    
    try {
      var login = await getLoginCredentials()
      const response = await fetch(this.apiLoginlink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: login.username,
          password: login.password
        })
      });
      if (response.ok) {
        await response.json().then(data => {
         saveApiToken("Bearer " + data.token);
        }); // Extract the response body as text
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
  static async UpdatePassword(newPassword:string):Promise<string>{
    
    try{
      var token = await getApiToken();
      const response = await fetch(this.apiLoginlink+"/ChangePassword",{
        method: 'POST',
          headers: {
              'password': newPassword,
              'Authorization': token
            },
      })
      if (response.ok) {
        updatePassword(newPassword);
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