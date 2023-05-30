import { User } from "../Models/User";
import { getApiToken } from '../DataContext';
import { Settings } from "../AppSettings";

export class UserService{
static route = Settings.api +"/User"

static async UsernameInUse(username:string):Promise<string>
{
  try{
    const response = await fetch(this.route+"/UsernameInUse/" + username,{
      method: 'GET'
    })
    return response.statusText;
  }
  catch(e){
    console.log("error: " + e);
    return e;
  }
}
static async UpdatePrivacy(anonymous:string):Promise<String>{
  try{
    var token = await getApiToken();
    const response = await fetch(this.route+"/UpdatePrivacy",{
      method: 'PUT',
      headers: {
        "anonymous": anonymous,
        'Authorization': token
      }
    });
    return response.statusText;
  }
  catch (e){
    console.log(e);
    return e;
  }
}
static async GetUserData():Promise<User>{
  var token = await getApiToken();
  try{
    const response = await fetch(this.route,{
      method: 'GET',
      headers: {
        'Authorization': token
      }
      
    });
    return response.ok? (await response.json()) as User:null;
  }
  catch(e) {
    console.log(e);
    return null;
  }
}
static async UpdateUsername(username:string){
  if(await this.UsernameInUse(username)) return "Username in use";
  var token = await getApiToken();
  try{
    const response = await fetch(this.route+"/UpdateUsername",{
      method:'put',
      headers:{
        "newUsername": username,
        'Authorization': token,
      }
    });
    return response.statusText;
  }  
  catch(e) {
    console.log(e);
    return null;
  }
}
static async UpdateEmail(email:string){
  try{
    var token = await getApiToken();
    const response = await fetch(this.route+"/UpdateEmail",{
      method:'put',
      headers:{
        "email": email,
        'Authorization': token,
      }
    });
    return response.statusText;
  }  
  catch(e) {
    console.log(e);
    return null;
  }
}

}

//update user data
