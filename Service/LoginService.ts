import Credential from "../auth/Models/Credentials"
import { NewAccount } from "../auth/Models/NewAccount";
import SignUp from "../auth/SignUp";

export class LoginService {
    static apiLoginlink:string = "http://localhost:5000/api/Login"

    static Login(username:string, password:string):string{
        if(username === "" || username === " "){
            return "Username can not be empty.";
          }
          if(password === ""){
            return "Password can not be empty.";
          }
      
          try{
            let request = new XMLHttpRequest();
            request.open("POST",this.apiLoginlink);
            request.setRequestHeader("Content-Type", "application/json");
            request.addEventListener('error',() =>{})
            var post = JSON.stringify({
              username: username,
              password: password
            });          
            console.log(post);
            request.send(post);
            request.onload = () =>{
              if(request.status === 200){
                Credential.username = username;
                Credential.password = password;
                Credential.token = request.response;
                return "";
              }
              else{
                console.log(request.status+ " " +request.response);
                return request.response;
              }
            }
          }
          catch(e){
            console.log("error: " + e);
            return "An error happend, please try again";
          }
        

    }

    static ValidateEmail(email:string):string{
        if(!email.includes('@') ||!email.includes('.')){
            return "Email is invalid";
          }
          try{
            let request = new XMLHttpRequest();
            request.open("POST",this.apiLoginlink+"/Reset");
            console.log("email: " + email)
            request.setRequestHeader("email", email);
            request.addEventListener('error',() =>{})
            request.send();
            request.onload = () =>{
              if(request.status === 200){
                console.log("succes");
                return "";         
              }              
              else{
                console.log(request.status+ " " +request.response);
                return request.status;
              }
            }
          }
          catch(e){
            console.log("error: " + e);
          }
    }

    static ValidateCode(code:string):string{
        if(code.length != 5){
            return "Token is invalid!";
          }      
          try{
            let request = new XMLHttpRequest();
            request.open("POST",this.apiLoginlink+"ResetWithToken");
            console.log("resetToken: " + code)
            request.setRequestHeader("resetToken", code);
            request.addEventListener('error',() =>{})
            request.send();
            request.onload = () =>{
              if(request.status === 200){
                console.log("succes");
                return ""; 
              }
              else{
                console.log(request.status+ " " +request.response);
                return request.status;
              }
            }
          }
          catch(e){
            console.log("error: " + e);
          }
    }
    static UpdatePassword(newPassword: string, repeatPassword:string, email:string):string{
        try{
            if(newPassword != repeatPassword){
              return "Passwords do not match";
            }
            else if(newPassword.length<8 ){
              return "Password must be at least 8 characters long";
            }
            let request = new XMLHttpRequest();
            request.open("POST",this.apiLoginlink+"/ChangePassword/"+ email);
            console.log("resetting password");
            request.setRequestHeader("password", newPassword);       
            request.setRequestHeader("Authorization", "Bearer " + Credential.token) 
            request.addEventListener('error',() =>{})
            request.send();
            request.onload = () =>{
              if(request.status === 200){
                console.log("succes"); 
                return ""
              }
              else{
                console.log(request.status+ " " +request.response);
                return request.response;
              }
            }
          }
          catch(e){
            console.log("error: " + e);
          }
    }
    static AddLogin(object:Record<string,any>):string{
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
          try{
            let request = new XMLHttpRequest();
            request.open("POST",this.apiLoginlink + "/Add");
            request.setRequestHeader("Content-Type", "application/json");
            request.addEventListener('error',(event) =>{})
            var post = JSON.stringify(account);          
            console.log(post);
            request.send(post);
            request.onload = () =>{
              if(request.status === 200){               
               return "";
              }
              if(request.status === 400){
                console.log(request.response);
                return request.response
              }
            }
          }
          catch(e){
            console.log("error: " + e);
          }
    }

}