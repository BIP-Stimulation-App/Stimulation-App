export class UserService{
static route = "http://stimulationapp.com:5000/api/User"

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
    return e
  }
}}